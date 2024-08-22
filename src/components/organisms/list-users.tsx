import { Avatar, Box, CircularProgress, MenuItem, Typography } from '@mui/material';
import { User } from "../../gql/graphql";


interface ListUsersProps {
  handleSelected: (user: User,src:string) => void;
  users: User[];
  loading: boolean;
}

export default function ListUsers({handleSelected, users, loading}: ListUsersProps) {
  return (
    <div>
      <Typography sx={{pl:2}} variant='h3'>{'Assign To...'}</Typography>
      {loading && <Box sx={{ display:'flex', justifyContent:'center'}}> <CircularProgress color="inherit" /></Box>}
      {users.map((user,index) => {
        const img = `./src/assets/imgavata${index+1}.png`
        return (
        <MenuItem key={user.id} onClick={() => handleSelected(user,img)}>
          <Avatar aria-label="recipe" src={img} />
          <Typography sx={{p:1}}>{user.fullName}</Typography>
        </MenuItem>
      )})}
    </div>
  );
}
