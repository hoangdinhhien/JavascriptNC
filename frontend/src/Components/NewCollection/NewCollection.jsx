import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
const NewCollection = () => {

  const [newcollection,setNewcollection] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNewcollection(data))
  },[])
  return (
    <div className='new-collections'>
        <h1>New Products</h1>
        <hr />
        <div className="collections">
            {newcollection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection