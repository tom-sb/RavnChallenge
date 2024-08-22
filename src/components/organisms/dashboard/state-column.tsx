import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import CardTicket from './card-ticket';
import { Status, Task } from "../../../gql/graphql";
import { Draggable } from 'react-beautiful-dnd';
import { getItemStyle } from '../../../pages/dashboard/tools/tools';

interface StateColumnProps {
  loading: boolean;
  tasks: Task[];
  status: Status;
  handleOpenModal: (ticket: Task) => void;
}
export default function StateColumn( {loading, tasks,  status, handleOpenModal }: StateColumnProps ) {
  return (

    <Stack
      direction="column"
      gap={2}
    >
      <Typography variant="h4">
        {status}{` (${tasks.length})`}
      </Typography>
      {loading && 
        <Box sx={{ display:'flex', justifyContent:'center'}}>
          <CircularProgress color="inherit" />
        </Box>}
      {tasks.map((ticket, index) => (
        <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <CardTicket
                key={ticket.id}
                ticket={ticket}
                handleOpenModal={handleOpenModal}
              />
            </div>
          )}
        </Draggable>
      ))}
    </Stack>
  );
}