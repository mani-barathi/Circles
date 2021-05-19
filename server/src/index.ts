import "reflect-metadata"
import { ApolloServer } from "apollo-server-express"
import express from "express"
import http from "http"
import cors from "cors"
import redis from "redis"
import connectRedis from "connect-redis"
import session from "express-session"
import { createConnection } from "typeorm"
import { buildSchema } from "type-graphql"
import { RedisPubSub } from "graphql-redis-subscriptions"

import UserResolver from "./resolvers/user"
import CircleResolver from "./resolvers/circle"
import InvitationResolver from "./resolvers/invitation"
import MemberResolver from "./resolvers/member"
import MemberRequestResolver from "./resolvers/MemberRequest"
import PostResolver from "./resolvers/post"
import LikeResolver from "./resolvers/like"
import MessageResolver from "./resolvers/message"

import { COOKIE_NAME } from "./constants"
import { customAuthChecker } from "./utils/authChecker"
import { createUserLoader } from "./utils/dataloaders"

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
}
const options = {
  host: "127.0.0.1",
  port: 6379,
  retryStrategy: (times: number) => {
    return Math.min(times * 50, 2000)
  },
}

const main = async () => {
  await createConnection()

  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      CircleResolver,
      InvitationResolver,
      MemberResolver,
      MemberRequestResolver,
      PostResolver,
      LikeResolver,
      MessageResolver,
    ],
    authChecker: customAuthChecker,
  })
  const RedisStore = connectRedis(session)
  const redisClient = redis.createClient()

  const app: express.Application = express()
  const httpServer = http.createServer(app)
  app.use(cors(corsOptions))
  const sessionMiddleware = session({
    name: COOKIE_NAME,
    store: new RedisStore({
      client: redisClient,
      disableTouch: true,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
    saveUninitialized: false,
    secret: "aksdfmioy234-asdfn-23fs-234",
    resave: false,
  })

  app.use(sessionMiddleware)

  const pubsub = new RedisPubSub({
    connection: options,
  })

  const apolloServer = new ApolloServer({
    schema,
    subscriptions: {
      path: "/subscriptions",
      onConnect: (_, ws: any) => {
        return new Promise((resolve) =>
          sessionMiddleware(ws.upgradeReq, {} as any, () => {
            resolve({ req: ws.upgradeReq })
          })
        )
      },
      onDisconnect: () => console.log("client Disconnect"),
    },
    context: ({ req, res, connection }) => ({
      req,
      res,
      userLoader: createUserLoader(),
      pubsub,
      connection,
    }),
  })

  apolloServer.applyMiddleware({ app, cors: false })
  apolloServer.installSubscriptionHandlers(httpServer)

  app.get("/", (_, res) => res.send("Circles API"))

  httpServer.listen(4000, () =>
    console.log(`URL: http://localhost:4000/graphql`)
  )
}

main()
