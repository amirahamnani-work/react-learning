import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

function App() {
  let biases = ['Sungyeol', 'Wonwoo', 'Woodz', 'Beomgyu'];

  const handleSelectItem = (item: string) => {
    console.log(item);    
  }


  const [alertVisible, setAlertVisibility] =  useState(false)
  
  return (
    <div className="App">
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        WOI
      </Alert>}
      <Buttons color="primary" onClick={() => setAlertVisibility(true)}>
        Mybutton
      </Buttons>

      {/* <Alert text="Hey"/> */}
      
      <Alert>
        Hellow <p>test</p>
      </Alert> 
      
      
      <ListGroup items={biases} heading="Amnani's biases" onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App