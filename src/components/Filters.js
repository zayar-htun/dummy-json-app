import React, { useState, useContext } from 'react';
import { TextField, MenuItem, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AppContext } from '../context/AppContext';

const Filters = ({ columns, fetchData }) => {
  const { setPageSize } = useContext(AppContext);
  const [pageSize, setLocalPageSize] = useState(5);
  const [search, setSearch] = useState('');

  const handlePageSizeChange = (event) => {
    const newSize = event.target.value;
    setLocalPageSize(newSize);
    setPageSize(newSize);
    fetchData({ limit: newSize });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <TextField
        select
        label="Page Size"
        value={pageSize}
        onChange={handlePageSizeChange}
        variant="outlined"
        margin="normal"
      >
        {[5, 10, 20, 50].map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </TextField>
      <IconButton onClick={() => setSearch('')}>
        <SearchIcon />
      </IconButton>
      <TextField
        label="Search"
        value={search}
        onChange={handleSearchChange}
        variant="outlined"
        margin="normal"
      />
    </div>
  );
};

export default Filters;
