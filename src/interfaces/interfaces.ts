export interface Artist {
  id: string
  name: string
  fanArt: FanArtArtist
  area: Area
  type: string
  discogs: DiscogsArtist
}

export interface FanArtArtist {
  thumbnails: [FanArtImage]
}

export interface FanArtImage {
  url: string
}

export interface DiscogsArtist {
  profile: string
  images: [DiscogsImage]
}

export interface DiscogsImage {
  thumbnail: string
}

export interface DiscogsArtist {
  profile: string
  images: [DiscogsImage]
}

export interface Area {
  id: string
  name: string
}

export interface ArtistConnection {
  nodes: [Artist]
  totalCount: number
  pageInfo: PageInfo
}

export interface PageInfo {
  endCursor: string
  hasNextPage: boolean
}

export interface SearchQuery {
  artists: ArtistConnection
}

export interface Search{
  search: SearchQuery
}
