import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


const PostTitle = () => {
    return (
      <section>  
        <h2>제목</h2>
        <p>글쓴이</p>
        <p>글 본문</p>
      </section>
    );
  
  };

const PostCard = (props) => {
    return (
        <section>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </section>

    )

}
  
function App() {
    // const title = ["2월 17일 발행", "남자 코트 추천", "강남 우동맛집" , "파이썬 독학"];
    const [title, setTitle] = useState(["2월 17일 발행", "남자 코트 추천", "강남 우동맛집" , "파이썬 독학"]);
    const [modal, setModal] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
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
        {titles.map((title, index) => {
            return <PostCard title={title} content={contents[index]} />;
         })}
         
         <button
            onClick = {()=> {
            if (isClicked) setIsClicked(false);
            else setIsClicked(true);}} >
                {isClicked ? <PostTitle /> : null}
          <div className="t_tail">{title[0]}</div>
          <hr></hr>
          <div className="t_head" onClick = {()=> {
            if (isClicked) setIsClicked(false);
            else setIsClicked(true);}} >
            {title[2]}</div> {isClicked ? <PostTitle/> : null}
          <div className="t_tail">{title[0]}</div>
          <hr></hr>
          <div className="t_head" onClick = {()=> {
            if (isClicked) setIsClicked(false);
            else setIsClicked(true);}} >
            {title[3]}</div> {isClicked ? <PostTitle /> : null}
          <div className="t_tail">{title[0]}</div>
        </div>
          <button onClick = {()=> {setTitle(["2월 17일 발행", "여자 코트 추천", "강남 우동맛집" , "파이썬 독학"])}}> Click </button>
          <button onClick = {()=>{ 
            let copy =[...title];
            copy[2] = '안암 우동 맛집';
            setTitle(copy) }}> 수정버튼 </button>
          <button
            onClick={() => {
              let 정렬 = [...title];
              정렬.sort();
              setTitle(정렬);
            }}
          >
          sort
          </button>
          <input onChange = {() => {
      // Write down your code.
      ////이용해서 state change???
      //e.target.value를 활용하여 블로그에 추가? 새로운 제목입력 state에 추가하고 그걸 제목 state로
      // 만들고 제목 state를 변경하여, ex 제목 1,2,3 에 4 추가하면...됨?
      // 삭제 react icon vs 그냥 삭제 라는 이름의 button, 눌렀을때 해당 게시글 삭제...
  }} />
        <input onChange = {(a)=> {console.log(a.target.value)}}/>
      
      </>
    ); 
  
  }
  
  export default App;
  