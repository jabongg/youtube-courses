import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {ToastContainer, toast} from "react-toastify";
import { Button } from 'reactstrap';
import Home from './Home';
import Course from './Course';
import AllCourses from './AllCourses';
import AddCourse from './AddCourse';

function App() {
  const btnHandle = () => {
    toast("loving this toast");
  };

  return (    
  <div className="App">
    <Home />
    <Header />
    <Button color='primary' outline onClick={btnHandle}>Click Me</Button>
    <ToastContainer />
    <Course course={{title:"Java Course", description: "It's an awesome course for learning React with Java"}} />
    <Course course={{title:"Django Course", description: "It's an awesome course for learning React with Java"}} />

    <AllCourses />
    <AddCourse />
    <hr />

</div>
  );
}

export default App;
