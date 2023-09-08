import React from 'react'
import loginsignupimage from '../assest/login-animation.gif'

const Signup = () => {
  return (
    <div className='p-3 md:p-4'>
    <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
            <img src={loginsignupimage} className='w-full'/>
        </div>
        <form>
            <label htmlFor='firstname'></label>
        </form>
            </div>
            </div>
  )
}

export default Signup