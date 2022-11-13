import React from 'react';
import '../Styles/Card.scss';


export default function Card(props) {
const data = props?.cardData

return (
  <>
    <div className='card'>
    <div className='status'>
      {data?.status}
    </div>
      <div className='content'>
        <h5>capsule_serial: {data?.capsule_serial}</h5>
        
        <p>{data?.details ? data?.details :'Nothing Avalable'}</p>
      </div>
    </div>
  </>
)
}
