import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl50zsh3n18z701umgrkf7khd/master',
  cache: new InMemoryCache()
})