import Landing from './components/landing'
import Global from './styles/Global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Landing/>
    <Global/>
    <ToastContainer/>
    </>
  )
}

export default App
