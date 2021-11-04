import React from 'react';
import SearchBox from "./SearchBox";
import List from "./List";
import {useQuery} from "@apollo/client";
import {ARTISTS_SEARCH} from "../queries/artistsQuery";
import {Button, Container} from "react-bootstrap";
import {Artist} from "../interfaces/interfaces";
import {favoritesVar} from "../cache";


const Home = () => {
  const [searchValue, setSearchValue] = React.useState('ab');
  const [cursor, setCursor] = React.useState('');
  const {data, loading} = useQuery(ARTISTS_SEARCH, {
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      query: searchValue,
      first: 20,
      after: cursor
    }
  })

  const addToFavoriteHandler = (item: Artist) => {
    const store = JSON.parse(localStorage.getItem('fav') as string)
    const isItemInStore = store.find(({id}: { id: string }) => id === item.id)
    if (!isItemInStore) {
      store.push(item)
      localStorage.setItem('fav', JSON.stringify(store))
      favoritesVar(store)
    }
  }

  return (
    <Container className='mb-5'>
      <SearchBox onSubmit={(value) => setSearchValue(value)}/>

      <List
        data={data?.search.artists?.nodes}
        loading={loading}
        onButtonClick={addToFavoriteHandler}
        buttonName={'Add to favorite'}
      />

      <div className='d-flex justify-content-evenly mt-4'>
        <Button
          variant='secondary'
          onClick={() => setCursor(data?.search.artists?.pageInfo.endCursor)}
          disabled={!data?.search.artists?.pageInfo.hasNextPage}
        >
          Next
        </Button>
      </div>

    </Container>
  );
};

export default Home;
