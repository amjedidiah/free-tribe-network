import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
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
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/index.php?graphql`,
    }),
    cache: new InMemoryCache(),
    connectToDevTools: isDev,
  });
}
