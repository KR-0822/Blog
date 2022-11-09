

import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


const PostModal = (props) => {
  return (
    <article>
      props.title
    </article>


  );

}

const PostTitle = () => {
  return (
    <section>  
      <h2>제목</h2>
      <p>글쓴이</p>
      <p>글 본문</p>
    </section>
  );

};

const PostCard = (props, {user, onRemove}) => {
  return (
      <section>
          <h2 className="t_head">{props.title}</h2>
          <p className="t_tail">{props.content}</p>
          <button onClick={() => onRemove(user.id)}>삭제</button>
      </section>

  )

}

function App() {
  // const title = ["2월 17일 발행", "남자 코트 추천", "강남 우동맛집" , "파이썬 독학"];
  const [title, setTitle] = useState(["남자 코트 추천", "강남 우동맛집" , "파이썬 독학"]);
  let [newTitle, newTitleFunc] =useState('');
  function addTitle(){
      let titleList = [...title];
      titleList.push(newTitle);
      setTitle( titleList );
  }
  function deleteTitle(){
    let titleList = [...title];
    titleList.pop(newTitle);
    setTitle( titleList );
}
  const [contents, setContents] = useState(["본문1", "본문2", "본문3", "2월 17일 발행" ]);
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
      <br />
      {title.map((title, index) => {
            return <PostCard title={title} content={contents[index]} />;
         })}
         
         <button
            onClick = {()=> {
                if (isClicked) setIsClicked(false);
                else setIsClicked(true);
                }} 
            > 더보기
        </button> {isClicked ? <PostTitle /> : null}


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
          <input onChange = {(e) => { newTitleFunc(e.target.value)  }} /> <button onClick={addTitle}>입력</button>
          <button onClick={deleteTitle}>삭제</button>
    </>
  ); 

}

export default App;
