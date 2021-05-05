import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Circle = {
  __typename?: 'Circle';
  id: Scalars['ID'];
  name: Scalars['String'];
  creatorId: Scalars['String'];
  totalMembers: Scalars['Int'];
  isMember: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  creator?: Maybe<User>;
  invitations?: Maybe<Array<Invitation>>;
  members?: Maybe<Array<Member>>;
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CircleResponse = {
  __typename?: 'CircleResponse';
  circle?: Maybe<Circle>;
  errors?: Maybe<Array<CustomError>>;
};

export type CustomError = {
  __typename?: 'CustomError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Invitation = {
  __typename?: 'Invitation';
  active: Scalars['Boolean'];
  circleId?: Maybe<Scalars['Int']>;
  circle: Circle;
  senderId?: Maybe<Scalars['Int']>;
  sender: User;
  recipientId?: Maybe<Scalars['Int']>;
  recipient: User;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type InvitationResponse = {
  __typename?: 'InvitationResponse';
  invitation?: Maybe<Invitation>;
  errors?: Maybe<Array<CustomError>>;
};

export type Member = {
  __typename?: 'Member';
  userId: Scalars['Int'];
  user?: Maybe<User>;
  circleId?: Maybe<Scalars['Int']>;
  circle?: Maybe<Circle>;
  isAdmin: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createCircle: CircleResponse;
  acceptInvitation: Circle;
  rejectInvitation: Scalars['Boolean'];
  cancelInvitation: Scalars['Boolean'];
  sendInvitation: InvitationResponse;
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateCircleArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAcceptInvitationArgs = {
  circleId: Scalars['Int'];
  senderId: Scalars['Int'];
};


export type MutationRejectInvitationArgs = {
  circleId: Scalars['Int'];
  senderId: Scalars['Int'];
};


export type MutationCancelInvitationArgs = {
  circleId: Scalars['Int'];
  recipientId: Scalars['Int'];
};


export type MutationSendInvitationArgs = {
  circleId: Scalars['Int'];
  recipiantName: Scalars['String'];
};

export type PaginatedMembers = {
  __typename?: 'PaginatedMembers';
  members: Array<Member>;
  hasMore: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getCircles: Array<Circle>;
  circle: Circle;
  getIntivations: Array<Invitation>;
  getSentInvitationOfCircle: Array<Invitation>;
  members: PaginatedMembers;
};


export type QueryCircleArgs = {
  circleId: Scalars['Int'];
};


export type QueryGetSentInvitationOfCircleArgs = {
  circleId: Scalars['Int'];
};


export type QueryMembersArgs = {
  cursor?: Maybe<Scalars['String']>;
  circleId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  myCircles: Array<Circle>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  user?: Maybe<User>;
  errors?: Maybe<Array<CustomError>>;
};

export type AcceptInviteMutationVariables = Exact<{
  circleId: Scalars['Int'];
  senderId: Scalars['Int'];
}>;


export type AcceptInviteMutation = (
  { __typename?: 'Mutation' }
  & { acceptInvitation: (
    { __typename?: 'Circle' }
    & Pick<Circle, 'id' | 'name'>
  ) }
);

export type CancelInvitationMutationVariables = Exact<{
  circleId: Scalars['Int'];
  recipientId: Scalars['Int'];
}>;


export type CancelInvitationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'cancelInvitation'>
);

export type CreateCircleMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateCircleMutation = (
  { __typename?: 'Mutation' }
  & { createCircle: (
    { __typename?: 'CircleResponse' }
    & { circle?: Maybe<(
      { __typename?: 'Circle' }
      & Pick<Circle, 'id' | 'name' | 'description' | 'creatorId' | 'createdAt'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'CustomError' }
      & Pick<CustomError, 'path' | 'message'>
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'CustomError' }
      & Pick<CustomError, 'path' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'CustomError' }
      & Pick<CustomError, 'path' | 'message'>
    )>> }
  ) }
);

export type RejectInvitationMutationVariables = Exact<{
  circleId: Scalars['Int'];
  senderId: Scalars['Int'];
}>;


export type RejectInvitationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'rejectInvitation'>
);

export type SendInvitationMutationVariables = Exact<{
  circleId: Scalars['Int'];
  recipiantName: Scalars['String'];
}>;


export type SendInvitationMutation = (
  { __typename?: 'Mutation' }
  & { sendInvitation: (
    { __typename?: 'InvitationResponse' }
    & { invitation?: Maybe<(
      { __typename?: 'Invitation' }
      & Pick<Invitation, 'circleId' | 'senderId' | 'recipientId' | 'active'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'CustomError' }
      & Pick<CustomError, 'path' | 'message'>
    )>> }
  ) }
);

export type CircleQueryVariables = Exact<{
  circleId: Scalars['Int'];
}>;


export type CircleQuery = (
  { __typename?: 'Query' }
  & { circle: (
    { __typename?: 'Circle' }
    & Pick<Circle, 'id' | 'name' | 'description' | 'createdAt' | 'totalMembers' | 'isAdmin' | 'isMember'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )> }
  ) }
);

export type GetCirclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCirclesQuery = (
  { __typename?: 'Query' }
  & { getCircles: Array<(
    { __typename?: 'Circle' }
    & Pick<Circle, 'id' | 'name' | 'description' | 'createdAt'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )> }
  )> }
);

export type GetIntivationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIntivationsQuery = (
  { __typename?: 'Query' }
  & { getIntivations: Array<(
    { __typename?: 'Invitation' }
    & Pick<Invitation, 'active' | 'createdAt'>
    & { circle: (
      { __typename?: 'Circle' }
      & Pick<Circle, 'id' | 'name'>
    ), sender: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'id'>
    ) }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
    & { myCircles: Array<(
      { __typename?: 'Circle' }
      & Pick<Circle, 'id' | 'name'>
    )> }
  )> }
);

export type MembersQueryVariables = Exact<{
  circleId: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type MembersQuery = (
  { __typename?: 'Query' }
  & { members: (
    { __typename?: 'PaginatedMembers' }
    & Pick<PaginatedMembers, 'hasMore'>
    & { members: Array<(
      { __typename?: 'Member' }
      & Pick<Member, 'userId' | 'isAdmin' | 'createdAt'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'username'>
      )> }
    )> }
  ) }
);

export type SentInvitaionsQueryVariables = Exact<{
  circleId: Scalars['Int'];
}>;


export type SentInvitaionsQuery = (
  { __typename?: 'Query' }
  & { getSentInvitationOfCircle: Array<(
    { __typename?: 'Invitation' }
    & Pick<Invitation, 'senderId' | 'recipientId' | 'circleId' | 'createdAt'>
    & { recipient: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);


export const AcceptInviteDocument = gql`
    mutation AcceptInvite($circleId: Int!, $senderId: Int!) {
  acceptInvitation(circleId: $circleId, senderId: $senderId) {
    id
    name
  }
}
    `;
export type AcceptInviteMutationFn = Apollo.MutationFunction<AcceptInviteMutation, AcceptInviteMutationVariables>;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      senderId: // value for 'senderId'
 *   },
 * });
 */
export function useAcceptInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInviteMutation, AcceptInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(AcceptInviteDocument, options);
      }
export type AcceptInviteMutationHookResult = ReturnType<typeof useAcceptInviteMutation>;
export type AcceptInviteMutationResult = Apollo.MutationResult<AcceptInviteMutation>;
export type AcceptInviteMutationOptions = Apollo.BaseMutationOptions<AcceptInviteMutation, AcceptInviteMutationVariables>;
export const CancelInvitationDocument = gql`
    mutation CancelInvitation($circleId: Int!, $recipientId: Int!) {
  cancelInvitation(circleId: $circleId, recipientId: $recipientId)
}
    `;
export type CancelInvitationMutationFn = Apollo.MutationFunction<CancelInvitationMutation, CancelInvitationMutationVariables>;

/**
 * __useCancelInvitationMutation__
 *
 * To run a mutation, you first call `useCancelInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelInvitationMutation, { data, loading, error }] = useCancelInvitationMutation({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      recipientId: // value for 'recipientId'
 *   },
 * });
 */
export function useCancelInvitationMutation(baseOptions?: Apollo.MutationHookOptions<CancelInvitationMutation, CancelInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelInvitationMutation, CancelInvitationMutationVariables>(CancelInvitationDocument, options);
      }
export type CancelInvitationMutationHookResult = ReturnType<typeof useCancelInvitationMutation>;
export type CancelInvitationMutationResult = Apollo.MutationResult<CancelInvitationMutation>;
export type CancelInvitationMutationOptions = Apollo.BaseMutationOptions<CancelInvitationMutation, CancelInvitationMutationVariables>;
export const CreateCircleDocument = gql`
    mutation CreateCircle($name: String!, $description: String!) {
  createCircle(name: $name, description: $description) {
    circle {
      id
      name
      description
      creatorId
      createdAt
    }
    errors {
      path
      message
    }
  }
}
    `;
export type CreateCircleMutationFn = Apollo.MutationFunction<CreateCircleMutation, CreateCircleMutationVariables>;

/**
 * __useCreateCircleMutation__
 *
 * To run a mutation, you first call `useCreateCircleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCircleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCircleMutation, { data, loading, error }] = useCreateCircleMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateCircleMutation(baseOptions?: Apollo.MutationHookOptions<CreateCircleMutation, CreateCircleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCircleMutation, CreateCircleMutationVariables>(CreateCircleDocument, options);
      }
export type CreateCircleMutationHookResult = ReturnType<typeof useCreateCircleMutation>;
export type CreateCircleMutationResult = Apollo.MutationResult<CreateCircleMutation>;
export type CreateCircleMutationOptions = Apollo.BaseMutationOptions<CreateCircleMutation, CreateCircleMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errors {
      path
      message
    }
    user {
      id
      username
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $email: String!) {
  register(email: $email, password: $password, username: $username) {
    user {
      id
      username
      email
    }
    errors {
      path
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RejectInvitationDocument = gql`
    mutation RejectInvitation($circleId: Int!, $senderId: Int!) {
  rejectInvitation(circleId: $circleId, senderId: $senderId)
}
    `;
export type RejectInvitationMutationFn = Apollo.MutationFunction<RejectInvitationMutation, RejectInvitationMutationVariables>;

/**
 * __useRejectInvitationMutation__
 *
 * To run a mutation, you first call `useRejectInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectInvitationMutation, { data, loading, error }] = useRejectInvitationMutation({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      senderId: // value for 'senderId'
 *   },
 * });
 */
export function useRejectInvitationMutation(baseOptions?: Apollo.MutationHookOptions<RejectInvitationMutation, RejectInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectInvitationMutation, RejectInvitationMutationVariables>(RejectInvitationDocument, options);
      }
export type RejectInvitationMutationHookResult = ReturnType<typeof useRejectInvitationMutation>;
export type RejectInvitationMutationResult = Apollo.MutationResult<RejectInvitationMutation>;
export type RejectInvitationMutationOptions = Apollo.BaseMutationOptions<RejectInvitationMutation, RejectInvitationMutationVariables>;
export const SendInvitationDocument = gql`
    mutation SendInvitation($circleId: Int!, $recipiantName: String!) {
  sendInvitation(circleId: $circleId, recipiantName: $recipiantName) {
    invitation {
      circleId
      senderId
      recipientId
      active
    }
    errors {
      path
      message
    }
  }
}
    `;
export type SendInvitationMutationFn = Apollo.MutationFunction<SendInvitationMutation, SendInvitationMutationVariables>;

/**
 * __useSendInvitationMutation__
 *
 * To run a mutation, you first call `useSendInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendInvitationMutation, { data, loading, error }] = useSendInvitationMutation({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      recipiantName: // value for 'recipiantName'
 *   },
 * });
 */
export function useSendInvitationMutation(baseOptions?: Apollo.MutationHookOptions<SendInvitationMutation, SendInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendInvitationMutation, SendInvitationMutationVariables>(SendInvitationDocument, options);
      }
export type SendInvitationMutationHookResult = ReturnType<typeof useSendInvitationMutation>;
export type SendInvitationMutationResult = Apollo.MutationResult<SendInvitationMutation>;
export type SendInvitationMutationOptions = Apollo.BaseMutationOptions<SendInvitationMutation, SendInvitationMutationVariables>;
export const CircleDocument = gql`
    query Circle($circleId: Int!) {
  circle(circleId: $circleId) {
    id
    name
    description
    createdAt
    totalMembers
    isAdmin
    isMember
    creator {
      username
    }
  }
}
    `;

/**
 * __useCircleQuery__
 *
 * To run a query within a React component, call `useCircleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCircleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCircleQuery({
 *   variables: {
 *      circleId: // value for 'circleId'
 *   },
 * });
 */
export function useCircleQuery(baseOptions: Apollo.QueryHookOptions<CircleQuery, CircleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CircleQuery, CircleQueryVariables>(CircleDocument, options);
      }
export function useCircleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CircleQuery, CircleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CircleQuery, CircleQueryVariables>(CircleDocument, options);
        }
export type CircleQueryHookResult = ReturnType<typeof useCircleQuery>;
export type CircleLazyQueryHookResult = ReturnType<typeof useCircleLazyQuery>;
export type CircleQueryResult = Apollo.QueryResult<CircleQuery, CircleQueryVariables>;
export const GetCirclesDocument = gql`
    query GetCircles {
  getCircles {
    id
    name
    description
    createdAt
    creator {
      username
    }
  }
}
    `;

/**
 * __useGetCirclesQuery__
 *
 * To run a query within a React component, call `useGetCirclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCirclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCirclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCirclesQuery(baseOptions?: Apollo.QueryHookOptions<GetCirclesQuery, GetCirclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCirclesQuery, GetCirclesQueryVariables>(GetCirclesDocument, options);
      }
export function useGetCirclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCirclesQuery, GetCirclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCirclesQuery, GetCirclesQueryVariables>(GetCirclesDocument, options);
        }
export type GetCirclesQueryHookResult = ReturnType<typeof useGetCirclesQuery>;
export type GetCirclesLazyQueryHookResult = ReturnType<typeof useGetCirclesLazyQuery>;
export type GetCirclesQueryResult = Apollo.QueryResult<GetCirclesQuery, GetCirclesQueryVariables>;
export const GetIntivationsDocument = gql`
    query GetIntivations {
  getIntivations {
    active
    createdAt
    circle {
      id
      name
    }
    sender {
      username
      id
    }
  }
}
    `;

/**
 * __useGetIntivationsQuery__
 *
 * To run a query within a React component, call `useGetIntivationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIntivationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIntivationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIntivationsQuery(baseOptions?: Apollo.QueryHookOptions<GetIntivationsQuery, GetIntivationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIntivationsQuery, GetIntivationsQueryVariables>(GetIntivationsDocument, options);
      }
export function useGetIntivationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIntivationsQuery, GetIntivationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIntivationsQuery, GetIntivationsQueryVariables>(GetIntivationsDocument, options);
        }
export type GetIntivationsQueryHookResult = ReturnType<typeof useGetIntivationsQuery>;
export type GetIntivationsLazyQueryHookResult = ReturnType<typeof useGetIntivationsLazyQuery>;
export type GetIntivationsQueryResult = Apollo.QueryResult<GetIntivationsQuery, GetIntivationsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    myCircles {
      id
      name
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MembersDocument = gql`
    query Members($circleId: Int!, $cursor: String) {
  members(circleId: $circleId, cursor: $cursor) {
    hasMore
    members {
      userId
      isAdmin
      createdAt
      user {
        username
      }
    }
  }
}
    `;

/**
 * __useMembersQuery__
 *
 * To run a query within a React component, call `useMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersQuery({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useMembersQuery(baseOptions: Apollo.QueryHookOptions<MembersQuery, MembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MembersQuery, MembersQueryVariables>(MembersDocument, options);
      }
export function useMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MembersQuery, MembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MembersQuery, MembersQueryVariables>(MembersDocument, options);
        }
export type MembersQueryHookResult = ReturnType<typeof useMembersQuery>;
export type MembersLazyQueryHookResult = ReturnType<typeof useMembersLazyQuery>;
export type MembersQueryResult = Apollo.QueryResult<MembersQuery, MembersQueryVariables>;
export const SentInvitaionsDocument = gql`
    query SentInvitaions($circleId: Int!) {
  getSentInvitationOfCircle(circleId: $circleId) {
    senderId
    recipientId
    circleId
    createdAt
    recipient {
      id
      username
    }
  }
}
    `;

/**
 * __useSentInvitaionsQuery__
 *
 * To run a query within a React component, call `useSentInvitaionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSentInvitaionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSentInvitaionsQuery({
 *   variables: {
 *      circleId: // value for 'circleId'
 *   },
 * });
 */
export function useSentInvitaionsQuery(baseOptions: Apollo.QueryHookOptions<SentInvitaionsQuery, SentInvitaionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SentInvitaionsQuery, SentInvitaionsQueryVariables>(SentInvitaionsDocument, options);
      }
export function useSentInvitaionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SentInvitaionsQuery, SentInvitaionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SentInvitaionsQuery, SentInvitaionsQueryVariables>(SentInvitaionsDocument, options);
        }
export type SentInvitaionsQueryHookResult = ReturnType<typeof useSentInvitaionsQuery>;
export type SentInvitaionsLazyQueryHookResult = ReturnType<typeof useSentInvitaionsLazyQuery>;
export type SentInvitaionsQueryResult = Apollo.QueryResult<SentInvitaionsQuery, SentInvitaionsQueryVariables>;