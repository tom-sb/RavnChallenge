import { Box, styled } from '@mui/material';

export const SidebarWrapper = styled(Box)(
  ({ theme }) => `
  width: ${theme.sidebar.width};
  min-width: ${theme.sidebar.width};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  height: 100vh;
  border-right: 1px solid ${theme.palette.divider};
  padding: 50px 20px 50px 20px;
  justify-content: space-between;
`,
);

export const HeaderWrapper = styled(Box)(
  () => `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`,
);

export const BodyWrapper = styled(Box)(
  () => `
  overflow-y: auto;
  height: 100%;
`,
);
