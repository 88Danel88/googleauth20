const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    }else{
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.send('you are now logged in as ' + req.user.username);
    
});

module.exports = router;