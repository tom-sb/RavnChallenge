import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import CardTicket from './card-ticket';
import { GetTasksDocument, GetTasksQuery, GetTasksQueryVariables, Status, Task } from "../../../gql/graphql";
import { useQuery } from "@apollo/client";

interface StateColumnProps {
  status: Status;
  handleOpenModal: (ticket: Task) => void;
}
export default function StateColumn( { status, handleOpenModal }: StateColumnProps ) {
  const { data, loading } = useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, {
		variables: {
			input: {
				status: status
			}
		}
	}
	);
  const tasks = data?.tasks || [];
  return (
    <Stack
			direction="column"
			gap={2}
    >
      <Typography variant="h4">
        {status}{` (${tasks.length})`}
      </Typography>
      {loading && <Box sx={{ display:'flex', justifyContent:'center'}}>
          <CircularProgress color="inherit" />
        </Box>
      }
      {tasks.map((ticket:Task) => (
        <CardTicket
            key={ticket.id}
            ticket={ticket}
            handleOpenModal={handleOpenModal}
        />
      ))}
    </Stack>
  );
}