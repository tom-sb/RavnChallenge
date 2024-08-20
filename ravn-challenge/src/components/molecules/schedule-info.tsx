import { Button, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

export default function ScheduleInfo() {
  return (
    <Stack
        direction="row"
        gap={5}
        alignItems="center"
        sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
    >
        <Typography variant="h6">{'cart'}</Typography>
        <Button
            onClick={() => console.log('handle TODO')}
            disabled={false}
            variant="contained"
            color="primary"
            size="small"
            sx={{ minWidth: '32px', height: '32px', padding: '0' }}
        >
            <Add />
        </Button>
    </Stack>
  );
}