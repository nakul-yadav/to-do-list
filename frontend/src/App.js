import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Search from './component/search';
import Display from './component/display';
import Header from './component/header';
import Login from './page/login';
import Home from './page/home';
import Signup from './page/signup';
import { Route,Routes } from 'react-router-dom';
import  GlobalItem from './store/globalItem';



function App() {
  const [addItem,setAddItem]=useState([{}]);
  const [task,setTask]=useState();
  const [edit,setEdit]=useState(false);
  const [id,setId]=useState();
  const [dataId,setDataId]=useState();
  const [idValue,setIdValue]=useState(addItem.length);
  const [email,setEmail]=useState();
  const [dataAdded,setDataAdded]=useState(false);
  const [login,setLogin]=useState(true);
  return (
    <div className="App">
      <GlobalItem.Provider value={{addItem,dataId,setDataId,setAddItem,setEmail,task,email,setTask,edit,setEdit,id,idValue,setIdValue,setId,setLogin}}>
     
     <Routes>
      <Route path='/' element={login?<Login/>:<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     </GlobalItem.Provider>
    </div>
  );
}

export default App;
