import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Header/headerStyles.scss';

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export const Header: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <>
      <header>
        <p>Filter by keywords</p>

        <form noValidate autoComplete="off">
          <TextField
            className="textField"
            id="outlined-basic"
            variant="outlined"
            label="Search"
            placeholder="Search"
            helperText="Full width!"
            value={query}
            onChange={(event) => {
              const { value } = event.target;

              setQuery(value);
            }}
          />
        </form>
      </header>
    </>
  );
};
