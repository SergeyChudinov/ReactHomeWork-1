import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import {Page404, FirstPage, SecondPage, ThirdPage, Profile} from './pages'
import AlignItemsList from './AlignItemsList';
import Header from './Header';
import Loyout from './Loyout'

import './App.css';

import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import * as React from 'react';

const theme = createTheme({
  palette: {
      primary: {
          main: red[700],
          light: red[100],
      },
  },
});
function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header/>
          <div className='flex'>
            <div className='div'>
              <AlignItemsList/>
            </div>
              <Routes>
                {/* <Route path='/' element={<Loyout/>}> */}
                  <Route path="/" element={<FirstPage/>}/>  
                  <Route path="/profile" element={<Profile/>}/> 
                  <Route path='/secondpage' element={<SecondPage/>}/>
                  <Route path='/thirdpage' element={<ThirdPage/>}/>
                  <Route path="*" element={<Page404/>}/>
                {/* </Route> */}
              </Routes>
          </div>  
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

/* {charList.map(el => {
  return (
    <>
      <Route path={el.href} element={<FirstPage/>}/>
    </>
  )
})}
<Route path="*" element={<Page404/>}/> */
//index