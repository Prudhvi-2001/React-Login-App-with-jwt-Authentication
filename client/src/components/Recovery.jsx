import React from 'react'
import { Link } from 'react-router-dom'
import avatar from  '../assets/user.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {passwordValidate} from '../helper/Validate'
function Recovery() {
  
  return (
    <div className="container mx-auto overflow-x-hidden">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex h-screen justify-center text-center m-14 py-1 px-5'>
      <div className={style.ply}>
        <div className='title flex flex-col items-center'>
          <h4 className='text-xl font-bold'>Recover Password</h4>
          <span className='py-4 text-xl w-2/3 text-center text-grey-500 '>
            Enter OTP to recover the Password.
          </span>
        </div>
        <form className='pt-0' >
     
          <div className='textbox flex flex-col items-center gap-6'>
            <div className='input text-center'>
            <span className='py-4 text-sm text-left text-gray-500'>
              Enter 6 digit OTp sent to your registered email address.
            </span>
            </div>
            
            <input type='text' placeholder='OTP' className={style.textbox}/>
            <button type='submit' className={style.btn}>Sign In</button>
          </div>
          <div className='text-center py-4'>
            <span className='text-gray-500'>Can't get OTP ?<button className='px-5 text-red-500 shadow-sm text-center  py-3 rounded-lg'>Resend</button></span>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Recovery
