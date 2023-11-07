const router = require('express').Router();


router.get('/',(req,res)=>{
    res.send('let build Card api');
})
module.exports = router;