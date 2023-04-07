import React from 'react'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {resetPasswordValidation} from '../helper/Validate'

function Reset() {
  const formik=useFormik({
    initialValues:{
      password:'',
      confirmpassword:''
    },
    validate:resetPasswordValidation,
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
          <h4 className='text-5xl font-bold'>Reset</h4>
          <span className='py-4 text-xl w-2/3 text-center text-grey-500 '>
            Enter New Password.
          </span>
        </div>
        <form className='py-10' onSubmit={formik.handleSubmit}>

          <div className='textbox flex flex-col items-center gap-6'>
            <input {...formik.getFieldProps('password')}typ e='text' placeholder='New Password' className={style.textbox}/>
            <input {...formik.getFieldProps('confirmpassword')}type='text' placeholder='Confirm Password' className={style.textbox}/>
            <button type='submit' className={style.btn}>Reset</button>
          </div>
          
        </form>
      </div>
      </div>
    </div>
  )
}

export default Reset
