import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {ToastContainer, toast} from "react-toastify";
import { Button } from 'reactstrap';

function App() {
  const btnHandle = () => {
    toast("loving this toast");
  };

  return (

    <div className="App">
      <Header />
      <Button color='primary' outline onClick={btnHandle}>Click Me</Button>
      <ToastContainer />
    </div>
  );
}

export default App;
