import { ClickAwayListener, IconButton, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import IsoIcon from '@mui/icons-material/Iso';
import ListEstimates from './list-estimates';

interface SelectEstimateProps {
  id: string;
  name: string;
  value: string;
  onChange: {(e: React.ChangeEvent<string>): void;
    <T = string | React.ChangeEvent<string>>(field: T): T extends React.ChangeEvent<string> ? void : (e: string | React.ChangeEvent<string>) => void;
  }
}

export default function SelectEstimate( { id, name, value, onChange }: SelectEstimateProps) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [estimate, setEstimate] = useState<number>();
  const open = Boolean(anchor);
  const handleAnchorClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleSelected = (estimate: number) => {
    onChange({
      target: {
        value: estimate,
        id: id,
        name: name,
      },
    });
    setEstimate(estimate);
    setAnchor(null);
  };
  return (
    <>
      <IconButton
        onClick={handleAnchorClick}
      >
        <IsoIcon />
        <Typography variant="h6" sx={{pl:1}}>
          {value ? `${value} Points` : estimate ? `${estimate} Points` : 'Estimate'}
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
            <ListEstimates
              handleSelected={handleSelected}
            />
          </>
        </ClickAwayListener>
      </Popover>
    </>
  );
}
