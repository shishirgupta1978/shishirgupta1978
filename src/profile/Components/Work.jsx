import React from 'react'
import './WorkCard.css'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'></h1>
        <div className='project-container'>
            {WorkCardData.map((val,i)=>{
                return <WorkCard key={i} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} source={val.source}/>
            })         }
        </div>
      
    </div>
  )
}

export default Work;