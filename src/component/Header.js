import React,{useState} from "react";
import logo from '../assest/logo.png'
import { Link } from "react-router-dom"
import {HiOutlineUserCircle} from "react-icons/hi"
import {BsCartFill} from "react-icons/bs"
import {useSelector} from "react-redux"
const Header =()=>{
    const[showMenu,setShowMenu]=useState(false);
    const userData= useSelector((state)=>state.user)
    console.log(userData.email)
    // console.log(userData)
    const handleShowMenu = () =>{
        setShowMenu(preve=> !preve)
    }
    console.log(process.env.REACT_APP_ADMIN_EMAIL)

    const cartItemNumber = useSelector((state)=>state.product.cartItem)
    return(

        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
            {/* desktop */}
        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
            <div className='h-10'>
                <img src={logo} className='h-full'/>
            </div>
            </Link>

            <div className="flex item-center gap-4 md:gap-7">
                <nav className="flex gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
                <Link to={""}>Home</Link>
                <Link to={"menu/64ff17d050182a68428cf47c"}>Menu</Link>
                <Link to={"about"}>About</Link>
                <Link to={"contact"}>Contact</Link>
                </nav>
                <div className="text-2xl text-slate-600 relative">
                    <Link to={"cart"}><BsCartFill/>
                    <div className="absolute -top-2 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">{cartItemNumber.length}</div>
                    </Link>
                </div>
                <div className=" text-slate-600" onClick={handleShowMenu}>
                    <div className="text-3xl cursor-pointer">
                    {userData.image ?<img src={userData.image} className="h-full w-full"/>:
                        <HiOutlineUserCircle/>
                    }
                    </div>
                    {
                        showMenu && (<div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                        {
                            userData === process.env.REACT_APP_ADMIN_EMAIL
                        }
                        {/* <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">New product</Link> */}
                        {userData.image?<p className="cursor-pointer hover text-white  bg-red-500">Logout</p>: 
                        <Link to={"Login"}className="whitespace-nowrap cursor-pointer">Login</Link>
                    }
                       
                    
                        <Link to={"Signup"}className="whitespace-nowrap cursor-pointer">Signup</Link>
                      
                </div>
                )}

                        
                </div>
            </div>
        </div>
            {/* mobile */}
        </header>
    )
}

export default Header