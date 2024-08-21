import React from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {
  SidebarWrapper,
  HeaderWrapper,
  BodyWrapper,
} from './left-side-panel.styled';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LogoComponent from '../../molecules/logo';
import { ROUTES } from '../../../utils/constants-routes';
import { useNavigate } from 'react-router-dom';

interface IItemsRoutes {
  text: string;
  icon: JSX.Element;
  onClick: () => void;
  route?: string;
}

const LeftSidePanel: React.FC = () => {
  const navigate = useNavigate();

  const itemsRoutes: IItemsRoutes[] = [
    {
      text: 'Dashboard',
      icon: <GridViewOutlinedIcon />,
      onClick: () => {navigate(ROUTES.DASHBOARD)},
      route: ROUTES.DASHBOARD,
    },
    {
      text: 'My Task',
      icon: <MenuOutlinedIcon />,
      onClick: () => {navigate(ROUTES.TASK)},
      route: ROUTES.TASK,
    },
  ];

  return (
    <SidebarWrapper
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: 1,
        borderColor: 'divider',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <HeaderWrapper>
        <LogoComponent />
      </HeaderWrapper>
      <BodyWrapper>
        <List
          key={'list'}
          component="nav"
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 1,
            overflow: 'auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
          aria-labelledby="nested-list-subheader"
          disablePadding
        >
          {itemsRoutes.map((item, idx) => (
            <ListItemButton 
              key={idx}
              onClick={item.onClick}
              selected={item.route === location.pathname}
            >
              <ListItemIcon sx={{ minWidth: '24px' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </BodyWrapper>
    </SidebarWrapper>
  );
};

export default LeftSidePanel;
