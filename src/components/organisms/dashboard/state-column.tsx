import { Stack, Typography } from '@mui/material';
import CardTicket from './card-ticket';

interface StateColumnProps {
  state: string;
  tickets: string[];
  handleOpenModal: () => void;
}
export default function StateColumn( { state, tickets, handleOpenModal }: StateColumnProps ) {
  return (
    <Stack
			direction="column"
			gap={2}
    >
            <Typography variant="h4">
                {state}
            </Typography>
            {tickets.map((ticket) => (
                <CardTicket
										key={ticket}
                    name={ticket}
                    labels={['label1', 'label2']}
                    handleOpenModal={handleOpenModal}
                />
            ))}
        </Stack>
    );
    }