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

function AlignItemsList(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.messageList.map(el => {
        const four = (props.messageList.length === el.id) ? true : false;
        return (
          <div key={el.id} className='div'>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={`id ${el.id}`}
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
                    {` —  ${el.text}`}
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
        text: text.current.value,
        author: name.current.value
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
      setTimeout(() => setState(messageList), 1500)
    }
  })
  //theme={theme}
  return (
    <div className="App">
      <Message text={'Просто текст!!!'}/>
      <Box component='form'>
        <TextField id="name" label="Имя" variant="outlined"
        sx={{ mb: 2}} name='author' inputRef={name}/><br></br>
        <TextField id="message" label="Сообщение" variant="outlined"
        sx={{ mb: 2}} name='author' inputRef={text} /><br></br>
        <Button variant="outlined" color='primary' size='small' type='submit' sx={{ mb: 2}} onClick={handleFocus}>Отправить</Button>
      </Box>

      <div className='flex'>
        <div className='div'>
          <AlignItemsList messageList={messageList}/>
        </div>
        <div className='div'>
            {messageList.map(el => {
              return (
                <div key={el.id}>
                  {el.text} - {el.author}
                </div>
              )
            })}
        </div>
      </div>
      
    </div>
  );
}

export default App;
