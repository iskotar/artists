import React from 'react';
import {useReactiveVar} from "@apollo/client";
import {favoritesVar} from "../cache";
import List from "./List";
import {Button, Container} from "react-bootstrap";
import {Artist} from "../interfaces/interfaces";

const Favorites = () => {
  const cartItems = useReactiveVar(favoritesVar);

  const removeFromFavoriteHandler = (item: Artist) => {
    const store = JSON.parse(localStorage.getItem('fav') as string)
    const filteredList = store.filter(({id}: { id: string }) => id !== item.id)
    localStorage.setItem('fav', JSON.stringify(filteredList))
    favoritesVar(filteredList)
  }

  const ClearAllHandler = () => {
    localStorage.setItem('fav', JSON.stringify([]))
    favoritesVar([])
  }

  return (
    <Container className='mt-3 mb-5'>
      <Button
        onClick={ClearAllHandler}
        className='mb-3'
        variant="outline-danger"
        hidden={!cartItems.length}
      >
        Clear Favorites
      </Button>

      {
        cartItems.length ?
          <List
            data={cartItems}
            buttonName='Remove from Favorites'
            onButtonClick={removeFromFavoriteHandler}
          /> :
          <div>No Items</div>
      }
    </Container>
  )
};

export default Favorites;
