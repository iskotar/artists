import {ApolloClient} from "@apollo/client";
import {cache} from "./cache";
import typeDefs from "./typeDefs";

export default new ApolloClient({
  connectToDevTools: true,
  uri: 'https://graphbrainz.herokuapp.com',
  cache,
  typeDefs,
  queryDeduplication: false,
})
