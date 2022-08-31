function apiKey(req,res,next){
    const api_key='123456789';
    console.log(req.query.api_key); 
    if(req.query.api_key && (req.query.api_key===api_key)) {
        next();
    }
    else{
        res.json({message:"Not allowed"});
    }
}

module.exports=apiKey;