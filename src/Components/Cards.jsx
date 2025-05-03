import React from 'react'

const Cards = ({ indx, img , foodName , price , item}) => {
  return (
    <div>
        {indx}
        <div className="box w-80 h-70 border relative rounded"> 
        <img src={img} className="overflow-hidden w-[100%] h-[70%]  " alt="" />
       <h1>{foodName}</h1>
       <h1 className="absolute right-0 top-52">Price {price}PKR</h1>
       <h1>{item}</h1>
      </div>
    </div>  
  )
}

export default Cards