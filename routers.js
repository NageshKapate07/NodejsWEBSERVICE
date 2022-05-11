var express=require("express");
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var router=express.Router();

//design model using mongoose schema
// creating empschema using mongoose schema
var empschema=new schema({
    _id:Number,
    empid:String,
    ename:{type:String,trim:true,required:true},
    sal:String
//sal:{type:Number,validate:/[0-9]*/}
})

//retireve data from emptab collection and 
//its scema is defined using empschema
//model(name,scema object, collection name)
//collection name is optional if model name and collection name is same
var Emp=mongoose.model('emptab',empschema,'emptab')


//to retrieve all records from mongodb and display 
//it in browser in table format
router.get("/employee",function(req,resp){
     Emp.find().exec(function(err,data){
         if(err){
             resp.status(500).send("no data found");
         }
         else{
             console.log(data);
            // response.render("index",{empdata:data})
             // return data in json format
             resp.send(data); 
         }

     });

});

//read one employee object
router.get("/employee/:empid",function(req,resp){
    Emp.find({empid:req.params.empid}).exec(function(err,data){  // empid will be used to create object
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            console.log(data);
           // response.render("index",{empdata:data})
            // return data in json format
            resp.send(data);
        }

    });

});



//this add new document in the collection
//input from form frontend will come here 
// object will come through post method we will retrieve that object and generate new object here
// and that object will be  saved here using save() which will save data in database

router.post("/employee",function(req,resp){
    var emp=new Emp({_id:req.body._id,empid:req.body.empid,ename:req.body.ename,sal:req.body.sal})
    emp.save(function(err,data){  // saved function will save  all data inside data to resend
        if(err){
            //if error comes while saving the data
            resp.status(500).send({message:"no data added"}); // json object passng message is key
        }
        else{
        //if success then same object will be returned as response
        resp.send(data);   // returning data back to user
        }
    });
});


//update the document retrived with id and modify it in the database
// update based on empid, 
router.put("/employee/:empid",function(req,resp){
    console.log(req.body);
    Emp.findOne({empid:req.body.empid},function(err,doc){
        if(err){
            resp.status(500).send("no data updated");
        }
        else{
            console.log("in else")
            doc.empid=req.body.empid;
            doc.ename=req.body.ename;
            doc.sal=req.body.sal;
            doc.save(function(err,data){
                if(err){
                    resp.status(500).send({message:"no data updated"});
                }
                resp.send(data);
            })
        }
       
    })
});

//delete the document with given id and go back to the table

router.delete("/employee/:empid",function(req,resp){
    Emp.remove({empid:req.params.empid},function(err,doc){
        if(err){
            resp.status(500).send({message:"no data found"});
        }
        resp.status(200).send({message:"data deleted successfully"});
    });
});

module.exports=router;
// this web application will give data in json format, to use this data we need react/angular
// hence to retrive this data we need React/angular using Ajax request
// to test this appliation we use POSTMAN TOOL It allows to send url to web app


