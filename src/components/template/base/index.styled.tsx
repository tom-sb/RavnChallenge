import { styled } from '@mui/material';

export const Base = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
}));

export const Main = styled('main')(({ theme }) => ({
  position: 'fixed',
  width: `calc(100% - ${theme.sidebar.width})`,
  height: '100%',
  top: 0,
  left: theme.sidebar.width,
  overflow: 'auto',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  '.MuiTableContainer-root': {
    width: '100%',
    overflow: 'auto',
  },
}));
