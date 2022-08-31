const router=require('express').Router();
const apiKeymiddleware=require('../middlewares/api');

// router.use(apiKeymiddleware);



router.get('/',(req,res)=>{
    res.render('index',{
        title:'My HomePage'
    });
})


router.get('/About',(req,res)=>{
    // res.sendFile(path.resolve(__dirname)+'/About.html');
    res.render('About',{
        title:'My About page'
    });
})

// router.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname)+'/download.html')
// })

router.get('/api/product', apiKeymiddleware ,(req,res)=>{
    res.json([
        {
            id:"123",
            name:"chrome" 
        },
        {
            id:"1234",
            name:"Brave"
        }
    ])
})


module.exports=router;