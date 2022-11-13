import React, {useEffect, useContext, useState} from 'react';
import { DataC } from '../Context';
import Card from './Card'
import axios from "axios";

export default function AllCardData(props) {
  const {card, setCard} = useContext(DataC)
  const [data, setData] = useState([])
  const [oneTime, setOneTime] = useState(true)
  const [showData, setShowData] = useState([])
  const [filterdData, setFilterData] = useState([])


useEffect(()=>{
axios.get('https://api.spacexdata.com/v3/capsules').then((response) => {
    setData(response.data);
    let myarr=[]
    for(var i=0; i<5;i++){
      myarr=[...myarr, response.data[i]]
    }
    setShowData([...myarr])

});

},[])
useEffect(()=>{
  
if(props.isBottom && showData.length <= data.length){
  let myarr=[];
  let initial=showData.length;
  let final = data.length-showData.length>5 ? showData.length+5 : data.length
  for(var i=initial; i<final; i++){
    myarr=[...myarr, data[i]]
  }
  setShowData([...showData, ...myarr])
  setOneTime(false)
}
}, [props.isBottom])


useEffect(()=>{
  if(card){
    let myData=[];
    const condit = filterdData.length>0?filterdData:data
    condit.filter((val, ind)=>{
      if((val.reuse_count==card.levelTwo) || (val.status==card.levelThree) || val.capsule_serial==card.levelOne){
        myData=[...myData, val]
      }
      else{
        // console.log('not found')
      }
    })
    setFilterData([...myData])
  }
  else{
    setFilterData([])
  }
}, [card])




return (
  <>
    <div className='allcardData'>
     {filterdData?.length>0? filterdData.map((val, ind)=>{
      return <Card cardData={val} key={ind}/>}) : showData.map((val, ind)=>{
        return <Card cardData={val} key={ind} />
     })}
    </div>
  </>
)
}
