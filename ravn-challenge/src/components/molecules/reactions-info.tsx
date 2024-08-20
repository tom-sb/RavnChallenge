import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

export default function ReactionsInfo() {
  return (
    <Stack
        direction="row"
        gap={5}
        alignItems="center"
        sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
    >
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
        </Avatar>
        <Stack direction="row" gap={0}>
          <IconButton aria-label="share">
            <AttachFileIcon />
          </IconButton>
          <IconButton aria-label="share">
            <Typography variant="h6">{3}</Typography><br/>
            <AccountTreeOutlinedIcon />
          </IconButton>
          <IconButton aria-label="share">
            <Typography variant="h6">{2}</Typography>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Stack>
    </Stack>
  );
}
