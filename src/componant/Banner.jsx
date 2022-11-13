import React, {Suspense, useState} from 'react';
import '../Styles/Banner.scss';
import imageOne from '../Media/imOne.jpg';
import video from '../Media/file.mp4';
const Search = React.lazy(()=>import('./Search'))

export default function Banner() {

return (
  <>
  <div className='headerme'>
    StarShip
  </div>
    <div className='banner'>
    <div className="banner_contaier">
        <img src={imageOne} className='banner_image' />
        <div className='banner_Top'>
            <div className="banner_TextH">
            <div className='bannerSearch'>
             <Suspense fallback='Loading...'>
              <Search />
             </Suspense>
            </div>
            
                <p>Sky is Buityfull</p>
            </div>
            
        </div>
        
    </div>
    </div>
  </>
)
}
