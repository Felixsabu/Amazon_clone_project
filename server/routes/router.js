const express =require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");

//get productsdata api
router.get("/getproducts", async(req,res)=>{
    try{
        const productsdata = await Products.find();
        // console.log("console the data" + productsdata);
        res.status(201).json(productsdata);
    }catch(error){
        console.log("error" + error.message);
    }
})


//get individual data
router.get("/getproductsone/id",async(req,res)=>{
    try {
        const {id} = req.params;

        const individualdata = await Products.findOne({id:id});

        res.status(201).json(individualdata);
        
    } catch (error) {
        res.status(201).json(individualdata);
        console.log("error" + error.message);
    }
})

//register data

router.post("/register",async(req,res)=>{
    //console.log(req.body);

    const {fname,email,mobile,password,cpassword} = req.body;

    if(!fname || !email || !mobile || !password || !cpassword){
        res.status(422).json({error:"Fill all data"});
        console.log("not data available");
    };



try {
    
    const preuser = await  USER.findOne({email:email});

    if(preuser){
        res.status(422).json({error:"This user is already present"})
    }else if(password !== cpassword){
        res.status(422).json({error:"Password and Cpassword not match"})
    }else{
        const finalUser = new USER({
            fname,email,mobile,password,cpassword
        });

        //harsh -> encrypt hujug ->> decrypt-> harsh
        //bcrytjs 

        //password hasing process

        const storedata = await finalUser.save();
        console.log(storedata);

        res.status(201).json(storedata);
    }
} catch (error) {
    
}
})

//login user 
router.post("/login",async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        res.status(400).json({error:"Fill the data"})
    };
    try {
        const userlogin = await USER.findOne({email:email})
         console.log(userlogin + "user value");

        if(userlogin){
            const isMatch = await bcrypt.compare(password,userlogin.password);
            console.log(isMatch);


            if(!isMatch){
                res.status(400).json({error:"Invalid details"})
            }else{
                res.status(201).json(userlogin);
            }

        }
    } catch (error) {
        res.status(400).json({error:"Invalid user"})
    }
})


module.exports = router;