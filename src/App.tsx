import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";
import Nav from "./components/Nav";

function App() {
  let biases = ['Sungyeol', 'Wonwoo', 'Woodz', 'Beomgyu'];

  const handleSelectItem = (item: string) => {
    console.log(item);    
  }

  const [alertVisible, setAlertVisibility] =  useState(false)
  const [whiteBg, setWhiteBg] =  useState('')
  
  return (
    <div className="App">
      {/* <Nav>         */}
      <Nav scrolled="" onScroll={() => setWhiteBg('danger')}>        
      </Nav>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        test weh
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