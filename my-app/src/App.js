import { useRef, useState, useEffect } from 'react';
import Message from './Message';
import './App.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import * as React from 'react';
import Input from '@mui/material/Input';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
      primary: {
          main: red[700],
          light: red[100],
      },
  },
});

function AlignItemsList(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <h3 className='h3'>Char list</h3>
      {props.charList.map((el, i) => {
        const four = (props.charList.length === i) ? true : false;
        return (
          <div key={i}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {el.author}
                    </Typography>
                    {`${el}`}
                  </React.Fragment>
                }
              />
            </ListItem>
            {!four ? <Divider variant="inset" component="li" /> : null}            
          </div>       
        )
      })}
    </List>
  );
}

function App() {
  let [messageList, setState] = useState([]);
  let [charList, setCharList] = useState([
    'Some char',
    'Complicated duscussion',
    'Description and documentation'
  ]);
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
      console.log(messageList)
      messageList = [...messageList, {
        id: messageList.length + 1,
        text: `Hello ${name.current.value}!`,
        author: 'I am a robot'
      }]
      const timeout = setTimeout(() => setState(messageList), 1500)
      return () => clearInterval(timeout)
    }
  }, [messageList])
  //theme={theme}
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
 

        <div className='flex'>
          <div className='div'>
            <AlignItemsList charList={charList}/>
          </div>
          <div className='div2'>
            {/* <Message text={'Просто текст!!!'}/> */}
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
        </div>  
      </div>
    </ThemeProvider>
  );
}

export default App;

{/* <div key={el.id}>
  {el.text} - {el.author}
</div> */}