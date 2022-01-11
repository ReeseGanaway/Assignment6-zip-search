import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import React, {useState} from "react";
import zipInfoDisplay from "./components/ZipInfoDisplay";



  function App() {


  const [zipCode, setZipCode]=useState("");
  const [zipList, setZipList]=useState([]);

  const fetchData=async ()=>{
    const result = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipCode}`);
    const data=await result.json();
    console.log(data);
    return data;
    }

  const checkEntry = (event) => {
    console.log(zipCode)
    if(event.target.value.length===5){
      setZipCode(event.target.value);
      fetchData().then((data)=>{
        setZipList(data)
        console.log(zipList)
      })
      .catch((err)=>console.error(err)) 
    }
  }
  return (
    <div className="App">
      <header className="zip-search">Zip Code Search</header>

      <input type="text" onChange={checkEntry}></input>
      <ul>
        {zipList.map((item,index)=>{
          return
            <zipInfoDisplay key={item+index} content={item}/>
          ;})
        }
      </ul>
    </div>

  );
}



export default App;
