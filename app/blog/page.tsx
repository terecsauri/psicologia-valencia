/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';

const landingFooter = await getData("blog");

export default function Blog() {
  return (
    landingFooter?.map((singlePost: any) => {
      const { gridTitle, gridTitle2, gridTitle3, gridTitle4, gridTitle5, gridTitle6, gridTitle7, gridTitle8, gridTitle9, gridTitle10, media, media2,
        gridMedia2, gridMedia3, gridMedia4, gridMedia5, gridMedia6, gridMedia7, gridMedia8, gridMedia9 } =
        singlePost.fields;
      return (
        <div key={""} className="ml-10 mt-5">
          <div className='grid grid-cols-3 relative'>
            <div className=' h-96 bg-gradient-to-r from-gray-600 to-gray-300'> 
              <h3 className='font-bold text-white p-5' >{gridTitle}</h3>
            </div>
            <div className='relative z-0'>
              <img
                src={'https://' + media.fields.file.url} alt="asdf" width="560" height="380"
                
              />
              <div className='font-bold absolute text-white text-2xl top-80' >{gridTitle2}</div>
            </div>
            <div className='relative'>
              <img
                src={'https://' + media2.fields.file.url} alt="asdf" width="600" height="380"
                
              />
              <div className='font-bold absolute text-white text-2xl top-80' >{gridTitle3}</div>
            </div>
          </div>


          <div className='grid gap-6 grid-cols-3 mt-10'>
            <div>
          <img
            src={'https://' + gridMedia3.fields.file.url} alt="asdf" width="600" height="380"
            
          />
          <div className='font-bold' >{gridTitle4}</div>
            </div>
            <div>
          <img
            src={'https://' + gridMedia4.fields.file.url} alt="asdf" width="600" height="380"
            
          />
          <div className='font-bold' >{gridTitle5}</div>
            </div>
            <div>
          <img
            src={'https://' + gridMedia5.fields.file.url} alt="asdf" width="600" height="380"
            
          />
          <div className='font-bold' >{gridTitle6}</div>
            </div>
            <div>
          <img
            src={'https://' + gridMedia6.fields.file.url} alt="asdf" width="600" height="380"
            
          />
          <div className='font-bold' >{gridTitle7}</div>
            </div>
            <div>
          <img
            src={'https://' + gridMedia8.fields.file.url} alt="asdf" width="600" height="380"
            
          />
          <div className='font-bold' >{gridTitle8}</div>
            </div>
            <div>

          <img
            src={'https://' + gridMedia9.fields.file.url} alt="asdf" width="600" height="380"
            
          />
          <div className='font-bold' >{gridTitle9}</div>
            </div>
            <div>
          <img
            src={'https://' + gridMedia7.fields.file.url} alt="asdf" width="600" height="380"
            
          />
          <div className='font-bold' >{gridTitle10}</div>
            </div>
          </div>
        </div>
      )
    })
    )
  }
