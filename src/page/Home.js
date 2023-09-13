import React, { useEffect, useState } from 'react'
import bike from '../assest/bikeicon.png'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import {GrPrevious} from "react-icons/gr"
import { GrNext } from 'react-icons/gr'
import { useRef } from 'react'
import { CiForkAndKnife } from 'react-icons/ci'
import AllProduct from '../component/AllProduct'

const Home = () => {
  const productData =useSelector((state)=>state.product.productList)
   console.log(productData)
  const homeProductCardList = productData.slice(0,4)
  const homeProductCardListVegetables = productData.filter(el=>el.category === "vegetables",[])
  console.log(homeProductCardListVegetables)
  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

 const slideProductRef=useRef() 
  const nextProduct =()=>{
      slideProductRef.current.scrollLeft += 200
  }
  const preveProduct =()=>{
    slideProductRef.current.scrollLeft -= 200
  }
  // const categoryList=[...new Set(productData.map(el=>el.category))]
  // console.log(categoryList)

  //filter data display
//   const[FilterBy,setFilterBy]= useState("")
//   const[DataFilter,setDataFilter]=useState([])
// useEffect(()=>{
//   setDataFilter(productData)
// },[productData])

// const handleFilterProduct = (category) =>{
//   const filter = productData.filter(el=>el.category.toLowerCase() === category.toLowerCase())
//   setDataFilter(()=>{
//       return[
//           ...filter
//       ]
//   })
// }
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2 py-4'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 item-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src={bike} className='h-7'/>
          </div>
        <h2 className='text-4xl md:text-7xl font-bold py-3'>Fastest Delivery to <span className='text-red-700 md:text-7xl'>your home</span></h2>
        <p className='py-3 text-base'>We deliver faster,fresh and latest items from our store and once ordered you need not worry about a thing about the products as the rest will be taken care of by our team.We got you covered for everything you buy from our store
        </p>
        <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 '>Order Now</button>
        </div>
      <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
        {
      homeProductCardList[0] ? homeProductCardList.map(el=>
      {
        return(
          <HomeCard
          key={el._id}
          id={el._id}
          image={el.image}
          name={el.name}
          price={el.price}
          category={el.category}
/>
        )

      })
      :
      loadingArray.map((el,index)=>{
        return(
          <HomeCard
          key={index +"loading"}
          loading={"Loading..."}
          />
        )
      })
    }
       
      </div>
      </div>

      <div className=''>
        <div className='flex w-full items-center'>
        <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegetables</h2>
        <div className='ml-auto flex gap-4'>
          <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious/></button>
          <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext/></button>
        </div>
        </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCardListVegetables[0]?
             homeProductCardListVegetables.map(el=>{
              return(
                <CardFeature
                key={el._id+"vegetables"}
                id={el._id}
                name={el.name}
                category={el.category}
                price={el.price}
                image={el.image}
/>
              )
            })
            :
            loadingArrayFeature.map((el,index)=>

            
            <CardFeature loading="Loading..."key={index+"cartLoading"}/>
          )
          }
             {/* <div className='my-5'>
    <h2 className='font-bold text-2xl text-slate-800 mb-4'>Products</h2>
<div className='flex gap-4 justify-center overflow-scroll scrollbar-none'>
{
  categoryList[0] &&  categoryList.map(el=>{
    return(
      <div>
      <div className='text-3xl p-5 bg-yellow-500 rounded-full cursor-pointer'> 
  <CiForkAndKnife onClick={()=>handleFilterProduct(el)}/>

 {el} 
  </div>
  </div>
    )
  })
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

{/* </div> 
<div className='flex fex-wrap  justify-center gap-4'>
  {
    DataFilter.map(el =>{
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
  }

</div>
</div> */} 
        </div>
    </div>
<AllProduct heading={"Products"}/> 
 </div>

  )
}

export default Home