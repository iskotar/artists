import React, {useState} from 'react';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";

interface IProps {
  onSubmit: (inputValue: string) => void
}

const SearchBox = ({onSubmit}: IProps) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(inputValue)
      }}
    >
      <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Enter an artist or group name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <Button
          variant="outline-secondary"
          id="button-search"
          type="submit"
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
