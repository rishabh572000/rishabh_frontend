import React, {useState, useRef} from 'react';
import './App.css';
import AllCardData from "./componant/AllCardData";
import Banner from "./componant/Banner";

function App() {
  const scrollElement = useRef()
  const [isBottom, setIsBottom] = useState(false)


  const myScroll = () =>{
    let clientHeight = scrollElement.current?.clientHeight;
    let scrollHeight =  scrollElement.current?.scrollHeight;
    let tuchBottom = scrollHeight-clientHeight+1

    if(tuchBottom==scrollElement.current?.scrollTop){
      setIsBottom(true)
    }
    else{
      setIsBottom(false)
    }
  }

  return (
    <div className="App"  onScroll={()=>myScroll()} ref={scrollElement}>
      <Banner />
      <AllCardData isBottom={isBottom}/>
      ferfa 
    </div>
  );
}

export default App;
