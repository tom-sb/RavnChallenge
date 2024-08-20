import { Stack, Typography } from '@mui/material';
import { Label } from '@mui/icons-material';

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
        {labels.map((label, index) => (
            <Label key={index}>
                <Typography>{label}</Typography>
            </Label>
        ))}
    </Stack>
  );
}