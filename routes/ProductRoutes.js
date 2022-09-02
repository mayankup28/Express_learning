const router=require('express').Router();
const products=require('../productData')


router.get('/Products',(req,res)=>{
    res.render('Products',{
        title:"Product Page"
    });
})

router.get('/api/Products',(req,res)=>{
    res.json(products)
})

router.post('/api/Products',(req,res)=>{
    const {name,price}=req.body
    console.log(req.body)

    if(!name||!price){
        return res.status(422).json({'error':'All field are rquired'})
    }

    const pro={
        name:name,
        price:price,
        id:new Date().getTime().toString()
    }
    products.push(pro)
    res.json(pro)
})

module.exports=router;