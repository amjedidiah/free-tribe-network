import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { isDev } from "@/lib/constants";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (isDev) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

let client: ApolloClient<NormalizedCacheObject>;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/graphql`,
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: isDev,
  });
}
