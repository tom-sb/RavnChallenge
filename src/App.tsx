//import './App.css'
import { CssBaseline } from '@mui/material';
import LeftSidePanel from './components/organisms/sidebar/left-side-panel'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppTransitions } from './routes';
import ThemeProvider from './utils/themes/theme';
import { SidebarProvider } from './context/sidebar.provider';
//import { Base, Main } from './components/template/base'

function App() {
  
  return (
    <>
      <ToastContainer />
        <ThemeProvider>
          <SidebarProvider>
            <CssBaseline />
            <LeftSidePanel />
            <AppTransitions />
          </SidebarProvider>
        </ThemeProvider>
    </>
  )
}

export default App
