import {Router} from 'express'
const router=Router();

// Post request
router.route('/register').post((req,res)=>
res.json('registered route')
)
router.route('/registermail').post(()=>{

})
router.route('/authenticate').post(()=>{
    
})
router.route('/login').post(()=>{
    
})


//get requests
router.route('/user/:username').get() //user with username
router.route('/generateOTP').get() //generateOTP
router.route('/verifyOTP').get()  //To verify OTP
router.route('/createResetSession').get() //To logout 
//put requests
router.route('/updateuser').put() //to update user
router.route('/resetPassword').put() // to reset password

export default router