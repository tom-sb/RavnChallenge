import { Button, IconButton, Stack } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Add } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants-routes";
import { useState } from "react";


import { GetProfileDocument, GetProfileQuery, GetProfileQueryVariables } from "../../gql/graphql";
import { useQuery } from "@apollo/client";

/* import { GetAlbumsTestQuery, GetAlbumsTestDocument, GetAlbumsTestQueryVariables } from './gql/graphql'

const { data, loading } = useQuery<GetAlbumsTestQuery, GetAlbumsTestQueryVariables>(GetAlbumsTestDocument, {
    variables: {}
  }) */

interface IToolsDashboard {
  handleCreate: () => void;
}

export default function ToolsDashboard({handleCreate}: IToolsDashboard) {


  const { data, loading } = useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument);
  console.log('-----------<<<>>>>',data, loading);

  const navigate = useNavigate();
  const location = useLocation();
  const [locationTask, setLocationTask] = useState(location.pathname === ROUTES.TASK);
  const [locationDashboard, setLocationDashboard] = useState(location.pathname === ROUTES.DASHBOARD);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if(e.currentTarget.ariaLabel === 'dashboard') {
      navigate(ROUTES.DASHBOARD)
    }
    if(e.currentTarget.ariaLabel === 'task') {
      navigate(ROUTES.TASK)
    }
    setLocationDashboard(location.pathname === ROUTES.DASHBOARD);
    setLocationTask(location.pathname === ROUTES.TASK);
  }
  return (
    <Stack
      gap={1}
      direction={"row"}
      sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}
    >
      <Stack
        direction={"row"}
        gap={1}
      >
        <IconButton
          aria-label="task"
          color={locationTask ? 'error' : 'inherit'}
          sx={{border: locationTask ? '2px solid': ''}}
          onClick={handleClick}
        >
          <MenuOutlinedIcon sx={{zIndex:-1}}/>
        </IconButton>
        <IconButton
          aria-label="dashboard"
          color={locationDashboard ? 'error' : 'inherit'}
          sx={{border:locationDashboard ? '2px solid' : ''}}
          onClick={handleClick}
        >
          <GridViewOutlinedIcon sx={{zIndex:-1}}/>
        </IconButton>
      </Stack>
      <Button
        onClick={handleCreate}
        disabled={false}
        variant="contained"
        color="primary"
        size="small"
        sx={{ minWidth: '32px', height: '32px', padding: '0' }}
      >
        <Add />
      </Button>
    </Stack>
  )
}