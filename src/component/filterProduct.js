import React from 'react'
import { CiForkAndKnife } from 'react-icons/ci'
import {BiKnife} from 'react-icons/bi'

const filterProduct = ({category}) => {
  return (
    <>
    <div className='text-3xl p-5 bg-yellow-500 rounded-full'>
    <CiForkAndKnife/>
    <BiKnife/>

  </div>
  <p>{category}</p>
  </>

  )
}

export default filterProduct