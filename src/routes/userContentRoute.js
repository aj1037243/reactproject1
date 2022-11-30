const express = require('express');
const router = express.Router();
const Content = require("../models/contentModel");
const App = require('../App');


App.post('/postContent', async (req, res) => {
    const content = new Content(req.body)
    try {
        await content.save()
        res.status(201).json({
            status: 'Success',
            data: {
                content
            }
        })
    } catch(err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

/**
App.get('/getContent', async(req, res) => {
    const content = await Content.find({})
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                content
            }
        })
    } catch(err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

App.patch('/editContent/:id', async(req, res) => {
    const updatedContent = await Content.findByIdAndUpdate(req.param.id,req.body,{
        new: true,
        runValidators: true
    })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
              updatedContent
            }
          })
    }catch(err){
        console.log(err)
    }
})

App.delete('/deleteContent/:id', async(req,res) => {
    await Content.findByIdAndDelete(req.params.id)
    
    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})
 */
//Route Configuration between DB and frontend
<<<<<<< HEAD
//Posting content from site to db
/**router.route("/postContent").post((req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    var pictureURL = req.body.pictureURL;
    var address = req.body.address;
=======
router.route("/postContent").post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const pictureURL = req.body.pictureURL;
    const address = req.body.address;
>>>>>>> parent of 9ee2722 (UsreInputContent)
   
    const newContent = new Content({
        title,
        description,
        pictureURL,
        address
    }) 
    newContent.save();
});

router.route("/getContent").get((req, res) => {
     Content.find() 
        .then(foundContent => res.json(foundContent))
     })  
*/
module.exports = router;
