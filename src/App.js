import "./App.css";
import React, {useState} from "react";



  function App() {


  const [zipCode, setZipCode]=useState("");
  const [zipList, setZipList]=useState([]);

  /*const fetchData=async ()=>{
    const result = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipCode}`);
    const data=await result.json();
    console.log(data);
    return data;
    }*/

  const checkEntry = (event) => {
    
    if(event.target.value.length===5){
      setZipCode(event.target.value)
      console.log(zipCode)
      fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipCode}`).then((response)=>{
        response.json().then((data)=>{
          setZipList(data)
        console.log(zipList)
        })
        
      })
      .catch((err)=>console.error(err)) 
      }
  }
  return (
    <div className="App">
      <header className="zip-search">Zip Code Search</header>

      <input type="text" onChange={checkEntry}></input>
      
      {zipList.map((item) => ( 
                <ul key = { item.RecordNumber } >
                    <li>State: {item.State}</li>
                    <li>Location: {item.Location},</li>
                    <li>Total Wages: {item.TotalWages}</li>
                    </ul>))}
    </div>

  );
}



export default App;
