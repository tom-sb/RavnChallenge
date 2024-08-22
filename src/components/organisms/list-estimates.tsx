import { MenuItem, Typography } from '@mui/material';
import IsoIcon from '@mui/icons-material/Iso';

interface ListEstimatesProps {
  handleSelected: (user: number) => void;
}
const estimates = [
  {id: '0', points: 0},
  {id: '1', points: 1},
  {id: '2', points: 2},
  {id: '4', points: 4},
  {id: '8', points: 8},
]

export default function ListEstimates({handleSelected}: ListEstimatesProps) {
  return (
    <div>
      <Typography sx={{px:2}} variant='h3'>{'Estimate'}</Typography>
      {estimates.map((estimate) => {
        return (
        <MenuItem key={estimate.id} onClick={() => handleSelected(estimate.points)}>
          <IsoIcon />
          <Typography sx={{p:1}}>{`${estimate.points} Points`}</Typography>
        </MenuItem>
      )})}
    </div>
  );
}
