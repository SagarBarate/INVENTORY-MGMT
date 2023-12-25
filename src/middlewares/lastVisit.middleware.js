


export const setLastVist = (req,res,next) =>{
    //.1 if cookie is set then add a local variable with last visit time data.

    if(req.cookies.lastvisit){
        res.locals.lastvisit= new Date(req.cookies.lastvisit).toLocaleDateString()
    }
    res.cookie('lastvisit', new Date().toISOString(),{
            maxAge: 2*24*60*60*1000
    });
    next();

    
}
