import express  from "express";
import passport from "passport";

const router=express.Router();
//for form submission we use post method bt in direct auth we use get method 
// in docs of passport for githubauth it is use auth method

router.get("/github", 
 passport.authenticate('github', { scope: [ 'user:email' ] }),
 );
router.get("/github/callback",
passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL+'/login' }),
  function(req, res) {
    res.redirect( process.env.CLIENT_BASE_URL);
  });
  //check user is authenticated aur not
  router.get("/check",(req,res)=>{
    if(req.isAuthenticated()){
        res.send({user:req.user});
    }else{
        res.send({user:null})
    }
  });
  
  router.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        res.json({message:"Logged out"});
    });
  });
export default router;
