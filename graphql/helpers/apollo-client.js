import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: process.env.ENDPOINT
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token_id: process.env.TOKEN_GRAPHQL
    }
  }
})

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: authLink.concat(link),
      cache: new InMemoryCache().restore(initialState || {})
    })
)