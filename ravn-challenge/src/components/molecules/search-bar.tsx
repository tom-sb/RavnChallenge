import { Avatar, FormControl, IconButton, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

interface SearchProps {
  value?: string;
  onSearch: (search: string) => void;
  w?: string | number;
}

const SearchComponent = ({ value, onSearch, w }: SearchProps) => {
  const [search, setSearch] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: w ?? 120 }}>
      <TextField
        id="search"
        label={'search'}
        value={search}
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            onSearch(search);
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={() => onSearch(search)}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <>
              <InputAdornment position="end">
                <IconButton onClick={() => onSearch(search)}>
                  <NotificationsOutlinedIcon/>
                </IconButton>
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  R
                </Avatar>
              </InputAdornment>
            </>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchComponent;
