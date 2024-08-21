import { Container, Grid } from '@mui/material';
import LeftSidePanel from '../../organisms/sidebar/left-side-panel';

interface LeftMenuWrapperProps {
  children: JSX.Element;
}

export default function LeftMenuWrapperProps(props: LeftMenuWrapperProps) {
  return (
    <Container maxWidth={'xl'}>
      <Grid container direction={'row'} xl={12} spacing={2}>
        <Grid item xl={2} sx={{ backgroundColor: 'white' }}>
          <LeftSidePanel />
        </Grid>
        <Grid item xl={10} sx={{ backgroundColor: '#f2f5f9' }}>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
}
