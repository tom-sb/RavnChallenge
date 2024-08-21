import { Box, Tooltip, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/ravn.png';
import { ROUTES } from '../../../utils/constants-routes';

const LogoWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.typography.fontWeightBold};
    text-decoration: none;
    img {
      width: 50px;
      height: auto;
    }
  `,
);

const LogoComponent: React.FC = () => {
  return (
    <Tooltip title="ravn-challenge" placement="right" TransitionProps={{ timeout: 600 }}>
      <LogoWrapper>
        <Link to={ROUTES.DASHBOARD}>
          <img src={Logo} alt="ravn-challenge" />
        </Link>
      </LogoWrapper>
    </Tooltip>
  );
};

export default LogoComponent;
