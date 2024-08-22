import { Container, Modal, Stack } from "@mui/material";
import StateColumn from "../../components/organisms/dashboard/state-column";
import SearchComponent from "../../components/molecules/search-bar";
import { useState } from "react";
import TicketModal from "../../components/organisms/ticket-modal";
import ToolsDashboard from "../../components/molecules/tools-dashboard";
import { Status, Task } from "../../gql/graphql";

export default function Dashboard() {
	const statusValues = Status;
	const [open, setOpen] = useState(false);
	const [edit, setEdit] = useState<Task>();
	const handlerEdit = (ticket:Task) => {
		setEdit(ticket);
		setOpen(true);
	}
	const handlerCreate = () => {
		setEdit(undefined);
		setOpen(true);
	}
  return (
		<>
			<Stack
					direction="column"
					gap={2}
			>
				<SearchComponent onSearch={() => console.log('search handles todo')} />
				<ToolsDashboard handleCreate={handlerCreate}/> 
				<Stack
					direction="row"
					gap={2}
				>
					<StateColumn
							status={statusValues.Backlog}
							handleOpenModal={handlerEdit}
					/> 
					<StateColumn
							status={statusValues.Cancelled}
							handleOpenModal={handlerEdit}
					/>        
					<StateColumn
							status={statusValues.Todo}
							handleOpenModal={handlerEdit}
					/>
					<StateColumn
							status={statusValues.InProgress}
							handleOpenModal={handlerEdit}
					/>
					<StateColumn
							status={statusValues.Done}
							handleOpenModal={handlerEdit}
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
            width: 'auto',
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
						toEdit={edit}
					/>
        </Container>
      </Modal>
		</>
    )
}