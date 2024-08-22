import {
	Card,
	CardActions,
	CardHeader,
	ClickAwayListener,
	Grid,
	IconButton,
	Popover,
	Stack,
	Typography,
  } from '@mui/material';
//import { useIntl } from 'react-intl';
//import InputAdornment from '@mui/material/InputAdornment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ScheduleInfo from '../../molecules/schedule-info';
import LabelsInfo from '../../molecules/labels-info';
import ReactionsInfo from '../../molecules/reactions-info';
import { useState } from 'react';
import OptionsCard from './options-card';
import {
	Task,
	DeleteTaskDocument,
	DeleteTaskMutationVariables,
	DeleteTaskMutation,
	GetTasksDocument,
} from '../../../gql/graphql';
import { useMutation } from '@apollo/client';

interface CardTicketProps {
	ticket: Task;
	handleOpenModal: (ticket:Task) => void;
}

export default function CardTicket( { ticket, handleOpenModal }: CardTicketProps ) {
	const [anchor, setAnchor] = useState<HTMLElement | null>(null);

	const [deleteTask] = useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, {
		variables: {
			input: {
				id: ticket.id
			}
		},
		refetchQueries: [GetTasksDocument]
	});
	

  const open = Boolean(anchor);
  const id = open ? 'simple-popover' : undefined;
  const handleAnchorClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
	const handleDelete = () => {
		console.log({ticket});
		deleteTask();
		setAnchor(null);
	}
	const handleEdit = () => {
		handleOpenModal(ticket);
		setAnchor(null);
	}
	return (
		<Grid sx={{ width: '100%' }}>
			<Card sx={{ border: 'solid 2px #D9DADD' }}>
				<CardHeader
				title={
					<Typography variant='h4' sx={{justifySelf: 'start'}}>{ticket.name}</Typography>
				}
				action={
					<IconButton onClick={handleAnchorClick}>
						<MoreHorizIcon />
					</IconButton>
				}
				sx={{ pt: 1, pb: 0,display: 'flex', justifyContent: 'space-between' }}
				/>
				<CardActions
				sx={{ display: 'flex', justifyContent: 'space-between', pt: 0, paddingInline: 2 }}
				>
				<Stack direction={'column'} gap={1} sx={{ width: '100%' }}>
					<ScheduleInfo
						position={ticket.position}
						dueDate={ticket.dueDate}
					/>
					<LabelsInfo labels={ticket.tags} />
					<ReactionsInfo creator={ticket.assignee!}/>
				</Stack>
				</CardActions>
			</Card>
			<Popover
				id={id}
				open={open}
				anchorEl={anchor}
				onClose={() => setAnchor(null)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<ClickAwayListener onClickAway={() => setAnchor(null)}>
					<>
						<OptionsCard
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					</>
				</ClickAwayListener>
			</Popover>
		</Grid>
	);
}
