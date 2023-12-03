//hostedDecalration => a funtion
//class
//assignment declaration

import { validationResult } from "express-validator";


const validateRequest = async(req,res,next) =>{
     // validate data
    //1. Setup rules for validation.
    const rules = [
        body('name').isEmpty().withMessage('Name is required'),
        body('price').isFloat({gt:0}).withMessage('Price should be a positive value'),
        body('imageUrl').isUrl().withMessage('Invalid url'),
    ];

    //2. run those rules
    await Promise.all(rules.map(rule=> rule.run(req)))

    //3.check if there are any errors after running the rules.
    var errors = validationResult(req);

    //4. if errors , return the error message
    
     if (errors.length > 0) {
       return res.render('new-product', {
         errorMessage: errors[0],
       });
     }
     next();
};

export default validateRequest;