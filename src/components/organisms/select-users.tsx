import { Avatar, ClickAwayListener, IconButton, Popover, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import ListUsers from './list-users';
import { GetUsersDocument, GetUsersQuery, GetUsersQueryVariables, User } from "../../gql/graphql";
import { useQuery } from "@apollo/client";

interface SelectUserProps {
  id: string;
  name: string;
  value: string;
  onChange: {(e: React.ChangeEvent<string>): void;
    <T = string | React.ChangeEvent<string>>(field: T): T extends React.ChangeEvent<string> ? void : (e: string | React.ChangeEvent<string>) => void;
  }
}

export default function SelectUser( { id, name, value, onChange }: SelectUserProps) {
  const { data, loading } = useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument);
  const users = data?.users || [];

  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [user, setUser] = useState<User|undefined>(value?users.find(u => u.id === value):undefined);
  const [image, setImage] = useState<string>('');

  const open = Boolean(anchor);
  const handleAnchorClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleSelected = (user: User, src: string) => {
    onChange({
      target: {
        value: user.id,
        id: id,
        name: name,
      },
    });
    setUser(user);
    setImage(src);
    setAnchor(null);
  };
  return (
    <>
      <IconButton
        onClick={handleAnchorClick}
      >
        {user ? 
          <Avatar aria-label="recipe" src={image} sx={{ width: 24, height: 24 }}>
            {user.fullName.charAt(0)}
          </Avatar> : 
          <PersonIcon />
        }
        <Typography variant="h6" sx={{pl:1}}>
          { user ? user.fullName : 'Assignee'}
        </Typography>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ClickAwayListener onClickAway={() => setAnchor(null)}>
          <>
            <ListUsers
              handleSelected={handleSelected}
              users={users}
              loading={loading}
            />
          </>
        </ClickAwayListener>
      </Popover>
    </>
  );
}
