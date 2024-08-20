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

interface CardTicketProps {
	name: string;
	labels: string[];
	handleOpenModal: () => void;
}

export default function CardTicket( { name, labels, handleOpenModal }: CardTicketProps ) {
	const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);
  const id = open ? 'simple-popover' : undefined;
  const handleAnchorClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
	const handleDelete = () => {
		setAnchor(null);
	}
	const handleEdit = () => {
		handleOpenModal();
		setAnchor(null);
	}
	return (
		<Grid sx={{ width: '100%' }}>
			<Card sx={{ border: 'solid 2px #D9DADD' }}>
				<CardHeader
				title={
					<Typography variant='body1' sx={{justifySelf: 'start'}}>{name}</Typography>
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
					<ScheduleInfo />
					<LabelsInfo labels={labels} />
					<ReactionsInfo />
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
