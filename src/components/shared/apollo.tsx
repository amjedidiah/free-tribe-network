import { getApolloClient } from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

const client = getApolloClient();

export default function Apollo({ children }: PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
