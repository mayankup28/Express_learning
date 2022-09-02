const express = require('express');
const path = require('path');
const app = express();
const main=require('./routes/index');
const ProductRoutes=require('./routes/ProductRoutes');
// const PORT=1999;


app.use(express.static('public'))
app.use(express.json())
app.use(main);
app.use(ProductRoutes);

app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname)+'/temp')
// console.log(app.get('view engine'))
console.log(app.get('views'))

// app.get('/',(req,res)=>{
//     res.render('index',{
//         title:'My HomePage'
//     });
// })

// app.get('/About',(req,res)=>{
//     // res.sendFile(path.resolve(__dirname)+'/About.html');
//     res.render('About',{
//         title:'My About page'
//     });
// })

// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname)+'/download.html')
// })


// app.listen(3000);  
const PORT = process.env.PORT || 1994
app.listen(PORT, () => {
    console.log(`Listening on port num ${PORT}`)
});
