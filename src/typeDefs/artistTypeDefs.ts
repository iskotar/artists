import {gql} from "@apollo/client";

export default gql`
  type Query{
    search: SearchQuery
  }

  type SearchQuery {
    artists(
      query: String!
      after: String
      first: Int): ArtistConnection
  }

  type ArtistConnection{
    nodes: [Artist]
    totalCount: Int
    pageInfo: PageInfo!
  }

  type PageInfo{
    endCursor: String
    hasNextPage: Boolean
  }

  type Artist{
    id: ID!
    name: String
    fanArt: FanArtArtist
    area: Area
    type: String
    discogs: DiscogsArtist
  }

  type DiscogsArtist {
    profile: String
    images: [DiscogsImage!]!
  }

  type DiscogsImage{
    thumbnail: String
  }

  type Area{
    id: ID!
    name: String
  }

  type FanArtArtist{
    thumbnails: [FanArtImage]
  }

  type FanArtImage{
    url(size: FanArtImageSize): String
  }

  enum FanArtImageSize {
    PREVIEW
  }
`
