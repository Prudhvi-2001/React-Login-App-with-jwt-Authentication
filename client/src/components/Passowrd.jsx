import React from 'react'
import { Link } from 'react-router-dom'
import avatar from  '../assets/user.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {passwordValidate} from '../helper/Validate'
function Password() {
  const formik=useFormik({
    initialValues:{
      password:'',
    },
    validate:passwordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async(values)=>{
      console.log(values)

    }

  })
  return (
    <div className="container mx-auto overflow-x-hidden">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex h-screen justify-center text-center m-14 py-1 px-5'>
      <div className={style.ply}>
        <div className='title flex flex-col items-center'>
          <h4 className='text-5xl font-bold'>Hello Again!!</h4>
          <span className='py-4 text-xl w-2/3 text-center text-grey-500 '>
            Explore More by connecting with us.
          </span>
        </div>
        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <img src={avatar} className={style.profile_img} alt='avatar' />

          </div>
          <div className='textbox flex flex-col items-center gap-6'>
            <input {...formik.getFieldProps('password')}type='text' placeholder='Password' className={style.textbox}/>
            <button type='submit' className={style.btn}>Sign In</button>
          </div>
          <div className='text-center py-4'>
            <span className='text-gray-500'><Link  to='/recovery'className='text-red-500'> Forgot Password ?</Link></span>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Password
