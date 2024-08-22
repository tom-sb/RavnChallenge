import { Chip, Stack, Typography } from '@mui/material';

interface LabelsInfoProps {
  labels: string[];
}

export default function LabelsInfo( { labels }: LabelsInfoProps ) {
  return (
    <Stack
			direction="row"
			gap={1}
			alignItems="center"
    >
			{labels.map((label) => (
				<Chip
					key={label}
					label={<Typography color={"green"} variant='h5'>{label}</Typography>}
					sx={{backgroundColor: "lightgreen"}}
				/>
			))}
    </Stack>
  );
}