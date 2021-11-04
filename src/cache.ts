import {InMemoryCache, makeVar} from '@apollo/client'
import {Artist} from "./interfaces/interfaces";

const store = JSON.parse(localStorage.getItem('fav') as string);
if (!store) {
  localStorage.setItem('fav', JSON.stringify([]));
}
export const favoritesVar = makeVar<Array<Artist>>(store || []);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        favorites: {
          read() {
            return favoritesVar();
          },
        },
      }
    }
  }
})
