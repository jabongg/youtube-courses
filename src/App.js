import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {ToastContainer, toast} from "react-toastify";
import { Button, Col, Container, Row } from 'reactstrap';
import Home from './Home';
import Course from './Course';
import AllCourses from './AllCourses';
import AddCourse from './AddCourse';
import Menu from './Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const btnHandle = () => {
    toast("loving this toast");
  };

  return (    
  <div className="App">
    
    <Router>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}><Menu /></Col>
          <Col md={8}>     
            <Routes>
              <Route path="/"  element={<Home />}  exact />
              <Route path="/home"  element={<Home />}  exact />
              <Route path='/add-course' element={<AddCourse />}  exact />
              <Route path='/view-courses' element={<AllCourses />}  exact />
            </Routes>       
          </Col>
        </Row>
      </Container>
    </Router>
 
  </div>
  );
}

export default App;
