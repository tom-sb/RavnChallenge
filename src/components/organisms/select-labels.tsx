import { ClickAwayListener, IconButton, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import ListLabels from './list-labels';
import SellIcon from '@mui/icons-material/Sell';
import { TaskTag } from '../../gql/graphql';

interface SelectLabelsProps {
  id: string;
  name: string;
  value: TaskTag[];
  onChange: {(e: React.ChangeEvent<string>): void;
    <T = string | React.ChangeEvent<string>>(field: T): T extends React.ChangeEvent<string> ? void : (e: string | React.ChangeEvent<string>) => void;
  }
}

export default function SelectLabels( { id, name, value, onChange }: SelectLabelsProps) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [tags, setTags] = useState<TaskTag[]>(value);
  const open = Boolean(anchor);
  const handleAnchorClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleSelected = (labels: TaskTag[]) => {
    onChange({
      target: {
        value: labels,
        id: id,
        name: name,
      },
    });
    setTags(labels);
    setAnchor(null);
  };
  return (
    <>
      <IconButton
        onClick={handleAnchorClick}
      >
        <SellIcon />
        <Typography variant="h6" sx={{pl:1}}>
          {tags.length ? tags.join(' ') : 'Labels'}
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
            <ListLabels
              handleSelected={handleSelected}
              tags={tags}
            />
          </>
        </ClickAwayListener>
      </Popover>
    </>
  );
}
