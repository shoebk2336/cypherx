import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Home } from './pages/Home/Home'
import ContextProvider from './Components/ContextApi/ContextApi';
function App() {

  return (
    <>
    <ContextProvider>
    <MantineProvider>
    <Home/>
    </MantineProvider>
    </ContextProvider>
    </>
  )
}

export default App
