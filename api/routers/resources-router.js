const express = require('express');
const Resources = require('../helpers/resources-helper');

const router = express.Router();

router.get('/', (req, res) =>{
    Resources.getResources()
    .then(resources =>{
        res.status(200).json(resources);
    }).catch(error =>{
        console.log(error);
        res.status(500).json({error: "An error occurred while retrieving resources from the database."});
    });
});

router.post('/', (req,res) =>{
    const post = req.body;

    if(!post.name){
        res.status(400).json({error: "Missing required field name."});
    }

    Resources.add(post)
    .then(resource =>{
        res.status(201).json(resource);
    }).catch(error =>{
        console.log(error);
        res.status(500).json({error: "An error occurred while attempting to add the resource to the database."});
    });
});

module.exports = router;