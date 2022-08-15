import { useRef, useState, useEffect } from 'react';
import Message from '../Message';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import * as React from 'react';

const Pages = () => {
    let [messageList, setState] = useState([]);
    const [author, setAuthor] = useState([]);
    const [message, setMessage] = useState([]);
    const text = useRef(null);
    const name = useRef(null);
    let isChanged = useRef(false);
    const handleFocus = (event) => {
      event.preventDefault();
      if (!name.current.value) {
        name.current.focus();
        name.current.style.border = '1px solid red';
      } else {
        name.current.style.border = '1px solid black';
      }
      if (name.current.value && !text.current.value) {
        text.current.focus();
        text.current.style.border = '1px solid red';
      } else {
        text.current.style.border = '1px solid black';
      }
      if (text.current.value && name.current.value) {
        
        messageList = [...messageList, {
          id: messageList.length + 1,
          text: message,
          author: author
        }]
        isChanged.current = true;
      }
      setState(messageList)
    }
    useEffect (() => {
      name.current.focus();
      if (isChanged.current) {
        isChanged.current = false;
        messageList = [...messageList, {
          id: messageList.length + 1,
          text: `Hello ${name.current.value}!`,
          author: 'I am a robot'
        }]
        const timeout = setTimeout(() => setState(messageList), 1500)
        return () => clearInterval(timeout)
      }
    }, [messageList])

    return (
        <>
            <div className='div'>
                <h3 className='h3'>Messages</h3>
                <Box component='form'>
                    <TextField onInput={e => setAuthor(e.target.value)} id="name" label="Имя" variant="outlined"
                    sx={{ mb: 2}} name='author' inputRef={name}/><br></br>
                    <TextField onInput={e => setMessage(e.target.value)} id="message" label="Сообщение" variant="outlined"
                    sx={{ mb: 2}} name='author' inputRef={text} /><br></br>
                    <Button variant="outlined" color='primary' size='small' type='submit' sx={{ mb: 2}} onClick={handleFocus}>Отправить</Button>
                </Box>
                {messageList.map(el => {
                return (
                    <Message key={el.id} author={el.author} text={el.text}/>
                )
                })}
            </div>
        </>
    )
}
export default Pages;