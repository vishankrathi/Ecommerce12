import React from 'react'
import './New.css'
import new_collections from '../Assets/newcollections'
import Items from '../Items/Items'
const New = () => {
  return (
    <div className='New-collections'>
        <h1>newcollections</h1>
        <hr/>
        <div className="collections">
          {new_collections.map((Items,i)=>{
            return <Items />
          })}
        </div>
    </div >
  )
   
}
export default New;