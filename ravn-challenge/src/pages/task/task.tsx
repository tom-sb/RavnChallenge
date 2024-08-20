import { Container, Grid, Modal, Stack } from "@mui/material";
import SearchComponent from "../../components/molecules/search-bar";
import HeaderTasks from "../../components/organisms/task/header-tasks";
import CollapsibleTable from "../../components/organisms/task/table-task";
import { createData } from "../../components/organisms/task/row-task";
import ToolsDashboard from "../../components/molecules/tools-dashboard";
import { useState } from "react";
import TicketModal from "../../components/organisms/ticket-modal";

const rows = [
  createData('Backlog'),
  createData('Cancelled'),
  createData('To Do'),
  createData('In Progress'),
  createData('Done'),
];

export default function Task() {
	const [open, setOpen] = useState(false);
  return (
		<>
			<Stack
					direction="column"
					gap={2}
			>
				<SearchComponent onSearch={() => console.log('search handles todo')} />
				<ToolsDashboard handleCreate={() => setOpen(true)}/> 
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<HeaderTasks />
					</Grid>
					{rows.map((row) => (
						<Grid key={row.name} item xs={12}>
							<CollapsibleTable row={row}/>
						</Grid>
					))}
				</Grid>
			</Stack>
			<Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          sx={{
            width: '50%',
            backgroundColor: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
          }}
        >
          <TicketModal
						cancelClick={() => setOpen(false)}
						toEdit={false}
					/>
        </Container>
      </Modal>
		</>
    )
}