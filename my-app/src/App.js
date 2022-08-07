import { useRef, useState, useEffect } from 'react';
import Message from './Message';
import './App.css';

function App() {
  let [messageList, setState] = useState([
    // {
    //   id: 1,
    //   text: 'Просто текст',
    //   author: 'Sergey'
    // },
    // {
    //   id: 2,
    //   text: 'Просто текст2',
    //   author: 'Ivan'
    // }
  ])
  const text = useRef(null);
  const name = useRef(null);
  let isChanged = useRef(false);
  const handleFocus = (event) => {
    event.preventDefault();
    // console.log(ref.current.value)
    if (!text.current.value) {
      text.current.focus();
      text.current.style.border = '1px solid red';
    } else {
      text.current.style.border = '1px solid black';
    }
    if (text.current.value && !name.current.value) {
      name.current.focus();
      name.current.style.border = '1px solid red';
    } else {
      name.current.style.border = '1px solid black';
    }
    if (text.current.value && name.current.value) {
      
      messageList = [...messageList, {
        id: Math.floor((Math.random() * (1000) + 2)),
        text: text.current.value,
        author: name.current.value
      }]
      isChanged.current = true;
    }
    setState(messageList)
    console.log(messageList)
    // useEffect (() => {
      
    // })
  }
  useEffect (() => {

      if (isChanged.current) {
        isChanged.current = false;
        messageList = [...messageList, {
          id: Math.floor((Math.random() * (1000) + 2)),
          text: `Hello ${name.current.value}!`,
          author: 'I am a robot'
        }]
        setTimeout(() => setState(messageList), 1500)
      }
  })
  return (
    <div className="App">
      <Message text={'Просто текст!!!'}/>
      <form>
        <input placeholder="text" type="text" ref={text}></input><br></br>
        <input placeholder="name" type="name" ref={name}></input><br></br>
        <button onClick={handleFocus}>button</button>
      </form>
      <div>
          {messageList.map(el => {
            return (
              <div key={el.id}>
                {el.text} - {el.author}
              </div>
            )
          })}
      </div>

    </div>
  );
}

export default App;
