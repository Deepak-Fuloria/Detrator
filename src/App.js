import logo from './logo.svg';
import './App.css';
import Posts from './posts/Posts'
import { useEffect,useState } from 'react';

function App() {
   const [data,setData]=useState([])
  const getData=async()=>{
    const res=await fetch("https://dummyjson.com/posts");
    const {posts}=await res.json()
   setData(posts)
}

useEffect(()=>{
  getData()
},[])


  return (
    <div className="App">
{
  data.length>0 ? data.map((element)=>{
    return <Posts posts={element} />
  }):""
}

    </div>
  );
}

export default App;
