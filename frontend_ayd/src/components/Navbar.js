import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6"
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import Context from '../context';

const Navbar = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const context = useContext(Context)
  const navigate = useNavigate()

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : "include"
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if (data.error) {
      toast.error(data.message)
    }
  }

  return (
    <Navbar className='h-16 shadow-md bg-white fixed w-full z-4000'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div>
          <Link to={"/"}>
            <Logo/>
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here...' className='w-full outline-none'/>
          <div className='text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full bg-red-600 text-white'>
            <GrSearch/>
          </div>
        </div>

        <div className='flex items-center gap-7'>

          <div className='relative flex justify-center'>

            {
              user?._id && (
                <div className='text-3xl cursor-pointer relative flex justify-center'>
                  {
                    user?.profilePic ? (
                      <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                    ) : (
                      <FaRegCircleUser />
                    )
                  }
                </div>

              )
            }
            
            
          </div>

          {
            user?._id && (
              <Link to={"/cart"} className='text-2xl relative'>
                <span><FaShoppingCart /></span>

                <div className='bg-red-600 text-white w-5 p-1 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-3'>
                  <p className='text-sm'>{context?.cartProductCount}</p>
                </div>
              </Link>
            )
          }
          
          <div>
            {
              user?._id ? (
                <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
              )
              :
              (<Link to={"login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>)
            }
          </div>

        </div>
      </div>
    </Navbar>
  )
}

export default Navbar