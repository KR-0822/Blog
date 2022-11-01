import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App() {
  // const title = ["2월 17일 발행", "남자 코트 추천", "강남 우동맛집" , "파이썬 독학"];
  const [title, setTitle] = useState(["2월 17일 발행", "남자 코트 추천", "강남 우동맛집" , "파이썬 독학"]);
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReactBlog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> </Nav.Link>
            <Nav.Link href="#features"> </Nav.Link>
            <Nav.Link href="#pricing">  </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div className="title"> 
        <div className="t_head">{title[1]}</div>
        <div className="t_tail">{title[0]}</div>
        <hr></hr>
        <div className="t_head">{title[2]}</div>
        <div className="t_tail">{title[0]}</div>
        <hr></hr>
        <div className="t_head">{title[3]}</div>
        <div className="t_tail">{title[0]}</div>
      </div>
        <button onClick = {()=> {setTitle(["2월 17일 발행", "여자 코트 추천", "강남 우동맛집" , "파이썬 독학"])}}> Click </button>
    </>
  ); 
}

export default App;
