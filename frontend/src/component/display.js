import React, { useEffect } from 'react'
import { useContext } from 'react'
import Axios from 'axios'
import GlobalItem from '../store/globalItem'

const Display = () => {
  const {addItem,setDataId,setAddItem,setTask,task,setEdit,setId,dataAdded,idValue,email,setIdValue}=useContext(GlobalItem);


const editList=(id)=>{
  const newList=addItem.filter((item)=>item.id===id);
  setTask(newList[0].value);
  setId(id);
setEdit(true);
}

const deleteList=(id)=>{
const newList=addItem.filter((item)=>item.id!==id);
deleteData(newList[0].id);
setAddItem(newList);
}

const deleteData=async(id)=>{
  const add = await fetch("/api/deletetask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id:id,
      email:email
    }),
  });
}
   

const fetchData=async()=>{
await fetch('/api/addtask').then((res)=>res.json()).then(data=>data.userData).then((todoData=>setAddItem(todoData.data)))
}



useEffect(()=>{  
fetchData(); 
},[idValue])

  return (
    <div>
      {
        
        addItem.map((item,id)=>{
         return(
          
          <div key={item.id}>
             {item.value}
             <button onClick={()=>editList(item.id)} >edit</button>
             <button onClick={()=>deleteList(item.id)}>delete</button>
            </div>
          
         )
        })
      }
    </div>
  )
}

export default Display
