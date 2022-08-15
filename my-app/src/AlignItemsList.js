
import { NavLink } from "react-router-dom";

import {  useState } from 'react';

import './AlignItemsList.css';


import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function AlignItemsList(props) {
    const [input, setInput] = useState('');

    let [charList, setCharList] = useState([
      {title: 'Some char', href: '/', element: '<FirstPage>'},
      {title: 'Complicated duscussion', href: '/secondpage', element: '<SecondPage>'},
      {title: 'Description and documentation', href: '/thirdpage', element: '<ThirdPage>'}
    ]);
    const addChat = (input) => {
      const href = charList.length + 1
      setCharList([...charList, {
        title: input,
        href: `/${href}`,
        element: href
      }])
      console.log(href)
      console.log(charList)
    }
    const deleteChat = (i) => {
      const newArray = [...charList.slice(0, i), ...charList.slice(i + 1)];
      setCharList(newArray)
    }

    const onInput = (e) => {
      setInput(e.target.value)
    }
 
 
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <h3 className='h3'>Char list</h3> 
        {charList.map((el, i) => {
          const four = (charList.length === i + 1) ? true : false;
          return (
            <NavLink value={el.title} end style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })} className='link' to={el.href} key={i}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                {`${el.title}`}  
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
                    </React.Fragment>
                  }
                />
                <div onClick={() => deleteChat(i)} className='x'>x</div>
              </ListItem>
              {!four ? <Divider variant="inset" component="li" /> : null}         
            </NavLink>    
          )
        })}
        <input onInput={onInput}
           className='input' placeholder='Чат'></input><br></br>
        <button onClick={() => addChat(input)} className='button'>Добавить</button>
      </List>
    );
  }
  export default AlignItemsList;