import { Container, Modal, Stack } from "@mui/material";
import StateColumn from "../../components/organisms/dashboard/state-column";
import SearchComponent from "../../components/molecules/search-bar";
import { useEffect, useState } from "react";
import TicketModal from "../../components/organisms/ticket-modal";
import ToolsDashboard from "../../components/molecules/tools-dashboard";
import { getListStyle, move, reorder } from "./tools/tools";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { GetTasksDocument, GetTasksQuery, GetTasksQueryVariables, Status, Task, UpdateTaskDocument, UpdateTaskMutation, UpdateTaskMutationVariables } from "../../gql/graphql";
import { useMutation, useQuery } from "@apollo/client";

export default function Dashboard() {
	const statusValues = Status;
	const [updateTicket] = useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, {
		refetchQueries: [GetTasksDocument]
	});
	const { data:dataBL, loading:loadingBL } = useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, {
		variables: {
			input: {
				status: statusValues.Backlog
			}
		}
	});
	const [dataBacklog, setDataBacklog] = useState<Task[]>(dataBL?.tasks || []);
	const { data:dataCa, loading:loadingCa } = useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, {
		variables: {
			input: {
				status: statusValues.Cancelled
			}
		}
	});
	const [dataCancel, setDataCancel] = useState<Task[]>(dataCa?.tasks || []);
	const { data:dataTo, loading:loadingTo } = useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, {
		variables: {
			input: {
				status: statusValues.Todo
			}
		}
	});
	const [dataTodo, setDataTodo] = useState<Task[]>(dataTo?.tasks || []);
	const { data:dataIP, loading:loadingIP } = useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, {
		variables: {
			input: {
				status: statusValues.InProgress
			}
		}
	});
	const [dataInProgress, setDataInProgress] = useState<Task[]>(dataIP?.tasks || []);
	const { data:dataDo, loading:loadingDo } = useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, {
		variables: {
			input: {
				status: statusValues.Done
			}
		}
	});
	const [dataDone, setDataDone] = useState<Task[]>(dataDo?.tasks || []);


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

	const getLst = (status:Status) => {
		switch(status){
			case statusValues.Backlog:
				return dataBacklog;
			case statusValues.Cancelled:
				return dataCancel;
			case statusValues.Todo:
				return dataTodo;
			case statusValues.InProgress:
				return dataInProgress;
			case statusValues.Done:
				return dataDone;
		}
	}


	const onDragEnd = (result:any ) => {
    if (!result.destination) {
      return;
    }
    if(result.source.droppableId === result.destination.droppableId) {
      const items = reorder(
        getLst(result.source.droppableId),
        result.source.index,
        result.destination.index
      );
      if(result.source.droppableId === statusValues.Backlog){
				setDataBacklog(items);
			} else if(result.source.droppableId === statusValues.Cancelled){
				setDataCancel(items);
			} else if(result.source.droppableId === statusValues.Todo){
				setDataTodo(items);
			} else if(result.source.droppableId === statusValues.InProgress){
				setDataInProgress(items);
			} else if(result.source.droppableId === statusValues.Done){
				setDataDone(items);
			}
    }else{
      const resultMove = move<Task>(
				getLst(result.source.droppableId),
				getLst(result.destination.droppableId),
				result.source,
				result.destination
			);

			if(result.source.droppableId === statusValues.Backlog){
				setDataBacklog(resultMove.sourceClone);
			} else if(result.source.droppableId === statusValues.Cancelled){
				setDataCancel(resultMove.sourceClone);
			} else if(result.source.droppableId === statusValues.Todo){
				setDataTodo(resultMove.sourceClone);
			} else if(result.source.droppableId === statusValues.InProgress){
				setDataInProgress(resultMove.sourceClone);
			} else if(result.source.droppableId === statusValues.Done){
				setDataDone(resultMove.sourceClone);
			}
			if(result.destination.droppableId === statusValues.Backlog){
				setDataBacklog(resultMove.destClone);
			} else if(result.destination.droppableId === statusValues.Cancelled){
				setDataCancel(resultMove.destClone);
			} else if(result.destination.droppableId === statusValues.Todo){
				setDataTodo(resultMove.destClone);
			} else if(result.destination.droppableId === statusValues.InProgress){
				setDataInProgress(resultMove.destClone);
			} else if(result.destination.droppableId === statusValues.Done){
				setDataDone(resultMove.destClone);
			}

			updateTicket({
				variables: {
					input: {
						id: resultMove.removed.id,
						status: result.destination.droppableId
					}
				}
			});

    }
  }
	useEffect(() => {
		setDataBacklog(dataBL?.tasks || []);	
		setDataCancel(dataCa?.tasks || []);
		setDataTodo(dataTo?.tasks || []);
		setDataInProgress(dataIP?.tasks || []);
		setDataDone(dataDo?.tasks || []);
	}, [dataBL,dataCa,dataTo,dataIP,dataDo]);	

  return (
		<>
			<Stack
					direction="column"
					gap={2}
			>
				<SearchComponent onSearch={() => console.log('search handles todo')} />
				<ToolsDashboard handleCreate={handlerCreate}/> 
				<DragDropContext onDragEnd={onDragEnd}>
        
					<Stack
						direction="row"
						gap={2}
					>
						<Droppable droppableId={statusValues.Backlog}>
						{(provided, snapshot) => (
							<div
								
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
							>
								<StateColumn
									loading={loadingBL}
									tasks={dataBacklog}
									status={statusValues.Backlog}
									handleOpenModal={handlerEdit}
								/> 
							</div>
						)}
						</Droppable>
						<Droppable droppableId={statusValues.Cancelled}>
						{(provided, snapshot) => (
							<div
								
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
							>
								<StateColumn
									loading={loadingCa}
									tasks={dataCancel}
									status={statusValues.Cancelled}
									handleOpenModal={handlerEdit}
								/>
							</div>
						)}
						</Droppable>
						<Droppable droppableId={statusValues.Todo}>
						{(provided, snapshot) => (
							<div
								
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
							>     
								<StateColumn
									loading={loadingTo}
									tasks={dataTodo}
									status={statusValues.Todo}
									handleOpenModal={handlerEdit}
								/>
							</div>
						)}
						</Droppable>
						<Droppable droppableId={statusValues.InProgress}>
						{(provided, snapshot) => (
							<div
								
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
							>
								<StateColumn
									loading={loadingIP}
									tasks={dataInProgress}
									status={statusValues.InProgress}
									handleOpenModal={handlerEdit}
								/>
							</div>
						)}
						</Droppable>
						<Droppable droppableId={statusValues.Done}>
						{(provided, snapshot) => (
							<div
								
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
							>
								<StateColumn
									loading={loadingDo}
									tasks={dataDone}
									status={statusValues.Done}
									handleOpenModal={handlerEdit}
								/>
						</div>
						)}
						</Droppable>
					</Stack>
				</DragDropContext>
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