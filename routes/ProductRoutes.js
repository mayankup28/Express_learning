const router=require('express').Router();


router.get('/Products',(req,res)=>{
    res.render('Products',{
        title:"Product Page"
    });
})

module.exports=router;