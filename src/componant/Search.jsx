import React, {useContext, useState} from 'react';
import { DataC } from '../Context';

export default function Search() {

    const {card, setCard} = useContext(DataC)

    const [inputData, setInputData] = useState({name:null})
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputData(values => ({...values, [name]: value}))
        setCard({[name]: value})
    }
return (
  <>
    <div className='search'>
      <div className='searhContent'>
        <input type='text' className='input' name='levelOne' placeholder='Capsule Serial
' value={inputData?.levelOne} onChange={handleChange} />
        <input type='number' name='levelTwo' className='input' placeholder='Reuse Count' value={inputData?.levelTwo} onChange={handleChange} />
        <select className='input' name='levelThree'  value={inputData?.levelThree} onChange={handleChange}>
        <option value="">Status</option>
        <option value="active">Active</option>
        <option value="retired">Retired</option>
        <option value="destroyed">Destroyed</option>
        </select>
      </div>
    </div>
  </>
)
}
