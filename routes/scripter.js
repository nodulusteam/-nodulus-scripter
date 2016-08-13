/*                 _       _           
                 | |     | |          
  _ __   ___   __| |_   _| |_   _ ___ 
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @ewave open source | ©Roi ben haim  ®2016    
 */
  
  
var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');
var path = require('path');
var dal = require("@nodulus/data");
 
 



router.post("/project", function (req, res) {
    dal.connect(function (err, db) {
        db.collection("scripter_projects").save(req.body.project  , function (err, result) {         
            res.json(req.body.project)
        
        })
    
    })
    
});








module.exports = router;



