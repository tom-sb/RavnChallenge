import { Box, MenuItem, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface OptionsCardProps {
  handleDelete: () => void;
  handleEdit: () => void;
}

export default function OptionsCard({handleDelete, handleEdit}: OptionsCardProps) {
  
  return (
    <Box sx={{backgroundColor:'red'}}>
      <MenuItem key={'disabled-option'} onClick={handleDelete}>
        <DeleteOutlineOutlinedIcon />
        <Typography variant="body1">Eliminar</Typography>
      </MenuItem>
      <MenuItem key={'other-option'} onClick={handleEdit}>
        <EditOutlinedIcon />
        <Typography variant="body1">Edit</Typography>
      </MenuItem>
    </Box>
  );
}
