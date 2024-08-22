import { Chip, Stack, Typography } from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';
interface ScheduleInfoProps {
  position: number;
  dueDate: string;
}
export default function ScheduleInfo( { position, dueDate }: ScheduleInfoProps ) {
  const positionLabel = position + ' Points';
  const duedate = new Date(dueDate)
  const today = new Date();
  let dueDatelabel = duedate.toDateString();
  const diff =  today.getTime() - duedate.getTime();
  if (duedate.getTime() == today.getTime()) {
    dueDatelabel= "TODAY";
  } else if (diff <= (24 * 60 * 60 *1000) && diff > 0) {
    dueDatelabel= "YESTERDAY";
  } else if (diff >= (-1*24 * 60 * 60 *1000) && diff < 0) { 
    dueDatelabel= "TOMORROW";
  }
  const colorLine = dueDatelabel==='YESTERDAY'?'error':'inherit'
  const bgcolor = dueDatelabel==='YESTERDAY'?'lightcoral':'whitesmoke'

  return (
    <Stack
        direction="row"
        gap={5}
        alignItems="center"
        sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
    >
        <Typography variant="h5">{positionLabel}</Typography>
        <Chip
          icon={<AlarmIcon color={colorLine}/>}
					key={'dueDate'}
					label={<Typography color={colorLine} variant='h5'>{dueDatelabel}</Typography>}
					sx={{backgroundColor:bgcolor}}
				/>
    </Stack>
  );
}