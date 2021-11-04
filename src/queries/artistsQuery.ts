import { gql } from "@apollo/client";


export const ARTISTS_SEARCH = gql`
  query SearchArtists($query: String!, $after: String, $first: Int) {
    search{
      artists(query: $query, after: $after, first: $first){
        pageInfo{
          endCursor
          hasNextPage
        }
        totalCount
        nodes {
          id
          name
          area {
            id
            name
          }
          type
          discogs {
            profile
            images{
              thumbnail
            }
          }
          fanArt{
            thumbnails {
              url(size: PREVIEW)
            }
          }
        }
      }
    }
  }
`;
