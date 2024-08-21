/* import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';
import React from 'react';

interface ListItemButtonProps {
  text: string;
  onClick: () => void;
  icon?: JSX.Element;
  list?: Array<JSX.Element>;
  isActive?: boolean;
  sx?: SxProps<Theme>;
  hasPermission?: boolean;
}
export default function ListItemButton(props: ListItemButtonProps) {
  const [open, setOpen] = React.useState(false);
  const handleClickExpand = () => {
    setOpen(!open);
  };
  const onClick = props.list && props.hasPermission ? handleClickExpand : props.onClick;
  return (
    <>
      <ListItemButton onClick={onClick} selected={props.isActive} sx={props.sx}>
        {props.icon && <ListItemIcon sx={{ minWidth: '24px' }}>{props.icon}</ListItemIcon>}
        <ListItemText primary={props.text} />
        {props.list ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
      {props.list ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.list}
          </List>
        </Collapse>
      ) : null}
    </>
  );
}
 */