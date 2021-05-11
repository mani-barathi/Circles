import { InMemoryCache } from "@apollo/client"
import { PaginatedCircle } from "../generated/graphql"

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        myCircles: {
          keyArgs: false,
          merge(
            existingCircles: PaginatedCircle,
            incomingCircles: PaginatedCircle,
            { readField }
          ): PaginatedCircle {
            if (!existingCircles) return incomingCircles
            if (!incomingCircles) return existingCircles
            const data = removeDuplicatesAndMerge(
              existingCircles.data,
              incomingCircles.data
            )
            data.sort(
              (d1, d2) =>
                (readField("updatedAt", d2) as number) -
                (readField("updatedAt", d1) as number)
            )
            return {
              ...incomingCircles,
              data,
            }
          },
        }, // end of myCircles
      }, // end of fields
    },
  },
})

const removeDuplicatesAndMerge = (existingArray, incomingArray): any[] => {
  let newArray = []

  for (let iObj of incomingArray) {
    let isPresent = false
    for (let eObj of existingArray) {
      if (eObj.__ref === iObj.__ref) {
        isPresent = true
      }
    }
    if (!isPresent) {
      newArray.push(iObj)
    }
  }
  newArray = [...existingArray, ...newArray]
  return newArray
}

export default cache
