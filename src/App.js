import "./App.css";
import React, {useState} from "react";



  function App() {


  const [zipList, setZipList]=useState([]);


  const checkEntry = (event) => {
    
      if(event.target.value.length===5){
      fetch(`http://ctp-zip-api.herokuapp.com/zip/${event.target.value}`).then((response)=>{
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
      <h1 className="zip-search">Zip Code Search</h1>

      <div id="InputDiv">

      <input type="text" onChange={checkEntry}></input>
      
      </div>
      
      <div id="ListContainer">
      {zipList.map((item) => ( 
        
                <ul id="ZipListEntry" key = { item.RecordNumber } >
                  <header>{item.City},{item.State}</header>
                    <li>State: {item.State}</li>
                    <li>Location: ({item.Lat},{item.Long})</li>
                    <li>Population (estimated): {item.EstimatedPopulation}</li>
                    <li>Total Wages: {item.TotalWages}</li>

                    </ul>))}
                    </div>
    </div>

  );
}



export default App;
