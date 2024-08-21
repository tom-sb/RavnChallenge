import { Container, Modal, Stack } from "@mui/material";
import StateColumn from "../../components/organisms/dashboard/state-column";
import SearchComponent from "../../components/molecules/search-bar";
import { useState } from "react";
import TicketModal from "../../components/organisms/ticket-modal";
import ToolsDashboard from "../../components/molecules/tools-dashboard";

export default function Dashboard() {
	const [open, setOpen] = useState(false);
  return (
		<>
			<Stack
					direction="column"
					gap={2}
			>
				<SearchComponent onSearch={() => console.log('search handles todo')} />
				<ToolsDashboard handleCreate={() => setOpen(true)}/> 
				<Stack
					direction="row"
					gap={2}
				>
					<StateColumn
							state='Backlog'
							tickets={['Ticket 1', 'Ticket 2']}
							handleOpenModal={() => setOpen(true)}
					/> 
					<StateColumn
							state='Cancelled'
							tickets={['Ticket 1', 'Ticket 2']}
							handleOpenModal={() => setOpen(true)}
					/>        
					<StateColumn
							state='To Do'
							tickets={['Ticket 1', 'Ticket 2']}
							handleOpenModal={() => setOpen(true)}
					/>
					<StateColumn
							state='In Progress'
							tickets={['Ticket 3', 'Ticket 4']}
							handleOpenModal={() => setOpen(true)}
					/>
					<StateColumn
							state='Done'
							tickets={['Ticket 5', 'Ticket 6']}
							handleOpenModal={() => setOpen(true)}
					/>
				</Stack>
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