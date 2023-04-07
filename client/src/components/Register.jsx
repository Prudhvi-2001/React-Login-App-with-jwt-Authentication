import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from  '../assets/user.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {passwordValidate} from '../helper/Validate'
import convertToBase64 from '../helper/convert'
import registerValidate from '../helper/Validate'
function Register() {
 const [file,setFile]=useState()

  const formik=useFormik({
    initialValues:{
      email:'',
      username:'',
      password:'',
    },
    validate:registerValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async(values)=>{
      values =await Object.assign(values,{profile:file  || ''})
      console.log(values)

    }

  })
  // formik doesnot support file upload so we need to create this handler
  const onUpload= async(e)=>{
    const base64=await convertToBase64(e.target.files[0]);
    setFile(base64)


  }
  return (
    <div className="container mx-auto overflow-x-hidden">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex h-screen justify-center text-center m-4 py-1 px-5'>
      <div className={style.ply} style={{width:"30%",height:"94%"}}>
        <div className='title flex flex-col items-center' style={{marginTop:'-50px'}}>
          <h4 className='text-3xl font-bold'>Register</h4>
          <span className='py-4 text-xl w-2/3 text-center text-grey-500 '>
           Happy to join you
          </span>
        </div>
        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <label htmlFor='profile'>
            <img src={file || avatar} className={style.profile_img} alt='avatar' />
            </label>
            <input onChange={onUpload} type='file' id='profile'/>
          </div>
          <div className='textbox flex flex-col items-center gap-6'>
            <input {...formik.getFieldProps('email')}type='text' placeholder='Email' className={style.textbox} />
            <input {...formik.getFieldProps('username')}type='text' placeholder='Username' className={style.textbox}/>
            <input {...formik.getFieldProps('password')}type='text' placeholder='Password' className={style.textbox}/>

            <button type='submit' className={style.btn}>Register</button>
          </div>
          <div className='text-center py-4'>
            <span className='text-gray-500'>Already Registered ?<Link  to='/'className='text-red-500'> Login</Link></span>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Register 
