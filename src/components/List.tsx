import React from 'react';
import {Button, Image, Spinner} from "react-bootstrap";
import {Artist} from "../interfaces/interfaces";
import {useReactiveVar} from "@apollo/client";
import {favoritesVar} from "../cache";


interface IProps {
  data: Artist[]
  loading?: boolean
  onButtonClick?: (item: Artist) => void | null
  buttonName?: string
}

const List = ({data, loading, onButtonClick, buttonName}: IProps) => {
  const cartItems = useReactiveVar(favoritesVar);
  if (loading) return <Spinner animation="border"/>
  if (!data) return null

  const fallbackImage = 'https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg';

  const isInFavorite = (artistId: string) => {
    return buttonName === 'Add to favorite' && !!cartItems.find(item => item.id === artistId)
  }

  return (
    <div className='d-flex flex-row flex-wrap gap-3'>
      {
        data.map(artist => (
          <div key={artist.id} className='border rounded card'>
            <Image
              src={artist.fanArt.thumbnails[0]?.url || artist.discogs?.images[0]?.thumbnail || fallbackImage}
              className='w-100 rounded-top'
            />
            <div className='p-3 flex-column'>
              <h5 className='text-truncate'>{artist.name}</h5>
              <div>
                <b>Type: </b>{artist.type || 'N/A'}
              </div>
              <div className='text-truncate h-5'>
                <b>Origins: </b>{artist.area?.name || 'N/A'}
              </div>
              <div className='text-truncate h-5'>
                <b>About: </b>{artist.discogs?.profile || 'N/A'}
              </div>
              {
                buttonName ?
                  <Button
                    disabled={isInFavorite(artist.id)}
                    variant="secondary"
                    className='d-block'
                    onClick={() => onButtonClick && onButtonClick(artist)}
                  >
                    {isInFavorite(artist.id) ? 'Added' : buttonName}
                  </Button> : null
              }
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default List;
