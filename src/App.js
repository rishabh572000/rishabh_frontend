import React, {useState, useRef, Suspense} from 'react';
import './App.css';
const AllCardData = React.lazy(()=>import("./componant/AllCardData"))
const Banner = React.lazy(()=>import("./componant/Banner"))

function App() {
  const scrollElement = useRef()
  const [isBottom, setIsBottom] = useState(false)


  const myScroll = () =>{
    let clientHeight = scrollElement.current?.clientHeight;
    let scrollHeight =  scrollElement.current?.scrollHeight;
    let tuchBottom = scrollHeight-clientHeight-1

    if(tuchBottom==Math.ceil(scrollElement.current?.scrollTop)){
      setIsBottom(true)
    }
    else{
      setIsBottom(false)
    }
  }

  return (
    <div className="App"  onScroll={()=>myScroll()} ref={scrollElement}>
    
      <Suspense fallback='Loading...'>
        <Banner />
      </Suspense>
      <Suspense fallback='Loading...'>
       <AllCardData isBottom={isBottom}/>
      </Suspense>
    </div>
  );
}

export default App;
