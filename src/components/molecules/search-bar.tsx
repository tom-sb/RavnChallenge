import { Avatar, CircularProgress, FormControl, IconButton, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { GetProfileDocument, GetProfileQuery, GetProfileQueryVariables } from '../../gql/graphql';
import { useQuery } from '@apollo/client';

interface SearchProps {
  value?: string;
  onSearch: (search: string) => void;
  w?: string | number;
}

const SearchComponent = ({ value, onSearch, w }: SearchProps) => {
  const { data, loading } = useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument);
  const profile = data?.profile;
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
                  {loading?<CircularProgress color="inherit" />: profile?.fullName.charAt(0)}
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
