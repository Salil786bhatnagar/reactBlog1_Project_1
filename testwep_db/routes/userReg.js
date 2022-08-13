var express =  require("express");
var router  =  express.Router();
var pool    =  require("./pool.js");
var multer  =  require("./multer");

// User Insert Data
      router.post("/insertData",multer.single('image'),function(req, res){
      pool.query("insert into reg(name,lname,gender,contact,address,state,city,pincode,email,password,image)value(?,?,?,?,?,?,?,?,?,?,?)",
                        [
                        req.body.name,
                        req.body.lname,
                        req.body.gender,
                        req.body.contact,
                        req.body.address,
                        req.body.state,
                        req.body.city,
                        req.body.pincode,
                        req.body.email,
                        req.body.password,
                        req.file.filename,
                        ],
                          function(error, result){
                          if (error) {
                              console.log(error);
                              return res.status(500).json({ RESULT: false });
                            } else {
                              console.log(result);
                              return res.status(200).json({ RESULT: true });
                            }
                        })  

                      });


// User Fetch Data
              router.get("/displayData",function(req, res, next){
                pool.query("select * from reg",function(error, result){
                  if(error){
                  console.log("show--",error)
                    res.status(500).json([]);
                  }else{
                    res.status(200).json(result);
                    console.log("showRegdata--",result)
                  }
                })
              }); 



   /* delete categoris singal data */
            router.post("/deleteRecord", function (req, res, next) {
              pool.query(
                "delete from reg where id=?",
                [req.body.id],
                function (error, result) {
                  if (error) {
                  return res.status(500).json([]);
                  } else {
                  return res.status(200).json(result);
                  }
                }
              );
            });

// user Edit data
            router.post("/editDataImage", multer.any(), function (req, res, next) {
              console.log(req.body);
              var qry = "";
              if (req.body.image != "") {
                qry =
                  "update reg set name=?,lname=?,gender=?,contact=?,address=?,state=?,city=?,pincode=?,email=?,password=?,image=? where id=?";
                para = [
                  
                  req.body.name,
                  req.body.lname,
                  req.body.gender,
                  req.body.contact,
                  req.body.address,
                  req.body.state,
                  req.body.city,
                  req.body.pincode,
                  req.body.email,
                  req.body.password,
                  req.files[0].filename,
                  req.body.id,
                  
                ];
              } else  {
                qry =
                  "update reg set name=?,lname=?,gender=?,contact=?,address=?,state=?,city=?,pincode=?,email=?,password=? where id=?";
                para = [
                  req.body.name,
                  req.body.lname,
                  req.body.gender,
                  req.body.contact,
                  req.body.address,
                  req.body.state,
                  req.body.city,
                  req.body.pincode,
                  req.body.email,
                  req.body.password,
                  req.body.id
                ];
              }

              pool.query(qry, para, function (error, result) {
                if (error) {
                  return res.status(500).json({ RESULT: false });
                } else {
                  return res.status(200).json({ RESULT: true });
                }
              });
            });







  //  router.get("/displayId",function(req, res, next){
  //   pool.query("select * from reg where id = ? ",[req.query.id],function(error, result){
  //     if(error){
  //      console.log("show--",error)
  //       res.status(500).json([]);
  //     }else{
  //       res.status(200).json(result);
  //       console.log("displayId...--",result)
  //     }
  //   })
  // }); 

  // router.post("/editDataImage", multer.any(), function (req, res, next) {
  //   console.log(req.body);
  //   var qry = "";
  //   if (req.body.image !="") {
  //     qry =
  //       "update categories set categoryname=?,description=?,icon=?,ad=?,adstatus=? where categoryid=?";
  //     para = [
  //       req.body.categoryname,
  //       req.body.description,
  //       req.files[0].filename,
  //       req.files[1].filename,
  //       req.body.adstatus,
  //       req.body.categoryid,
  //     ];
  //   } else if (req.body.icon != "") {
  //     qry =
  //       "update categories set categoryname=?,description=?,icon=?,adstatus=? where categoryid=?";
  //     para = [
  //       req.body.categoryname,
  //       req.body.description,
  //       req.files[0].filename,
  //       req.body.adstatus,
  //       req.body.categoryid,
  //     ];
  //   } else if (req.body.ad != "") {
  //     qry =
  //       "update categories set categoryname=?,description=?,ad=?,adstatus=? where categoryid=?";
  //     para = [
  //       req.body.categoryname,
  //       req.body.description,
  //       req.files[0].filename,
  //       req.body.adstatus,
  //       req.body.categoryid,
  //     ];
  //   } else {
  //     qry =
  //       "update categories set categoryname=?,description=?,adstatus=? where categoryid=?";
  //     para = [
  //       req.body.categoryname,
  //       req.body.description,
  //       req.body.adstatus,
  //       req.body.categoryid,
  //     ];
  //   }
  
  //   pool.query(qry, para, function (error, result) {
  //     if (error) {
  //       return res.status(500).json({ RESULT: false });
  //     } else {
  //       return res.status(200).json({ RESULT: true });
  //     }
  //   });
  // });
  






module.exports = router;