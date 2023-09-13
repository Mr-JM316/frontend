import React, { useEffect, useState } from 'react'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'
import { CiForkAndKnife } from 'react-icons/ci'

const AllProduct = ({heading}) => {
   
  
    const productData =useSelector((state)=>state.product.productList)
    const categoryList=[...new Set(productData.map(el=>el.category))]
    // console.log(categoryList)
    const[FilterBy,setFilterBy]= useState("")
  const[DataFilter,setDataFilter]=useState([])
useEffect(()=>{
  setDataFilter(productData)
},[productData])

const handleFilterProduct = (category) =>{
  // setFilterBy(category)
  const filter = productData.filter(el=>el.category.toLowerCase() === category.toLowerCase())
  setDataFilter(()=>{
      return[
          ...filter
      ]
  })
}
const loadingArrayFeature = new Array(10).fill(null)
  return (
    <div className='my-5'>
    <h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>
<div className='flex gap-4 justify-center overflow-scroll scrollbar-none'>
{
  categoryList[0] ?  categoryList.map(el=>{
    return(
      <div>
      <div className='text-3xl p-5 bg-yellow-500 rounded-full cursor-pointer hover:bg-red-500'> 
  <CiForkAndKnife onClick={()=>handleFilterProduct(el)}/>

 {el} 
 {/* isActive={el === FilterBy} */}
  </div>
  </div>
    )
  })
  :(
  <div className='min-h-[150px] flex justify-center items-center'>
          <p>Loading...</p>
          </div>
  )
}


{/* <filterProduct category="fruits"/>
<filterProduct/>
<filterProduct/>
      <filterProduct/>*/}
{/* {/* <div className='text-3xl p-5 bg-yellow-500 rounded-full'> 
  <CiForkAndKnife/>

</div>
<div className='text-3xl p-5 bg-yellow-500 rounded-full'>
  <CiForkAndKnife/>

</div>
<div className='text-3xl p-5 bg-yellow-500 rounded-full'>
  <CiForkAndKnife/>

</div>
<div className='text-3xl p-5 bg-yellow-500 rounded-full'>
  <CiForkAndKnife/> */}

</div> 
<div className='flex fex-wrap  justify-center gap-4'>
  {
   DataFilter[0]? DataFilter.map(el =>{
      return(
        <CardFeature
        key={el._id}
        id={el._id}
        image={el.image}
        name={el.name}
        category={el.category}
        price={el.price}
        />
      )
    })
    :
    loadingArrayFeature.map((el,index)=>

            
      <CardFeature loading="Loading..."key={index+"AllProduct"}/>
    )
  }

</div>
</div>
  )
}

export default AllProduct