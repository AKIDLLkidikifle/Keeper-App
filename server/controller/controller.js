const model = require("../model/model");


//get all resource
const getResource = async(req, res)=>{
    await model.find({}).then((data)=>{
      res.status(200).json(data);
    });   
};

//get specific resource
const specificResourc =  async(req, res)=>{
    const {id} = req.params;

    await model.findById(id).then((data)=>{
        res.status(200).json(data);
    }).catch((error)=>{
       return res.status(404).json({error: error.message})
    }); 
};

//post a new resource
const postResource = async(req, res)=>{
    const {title, content} = req.body;
    
    await model.create({title, content}).then((data)=>{
          res.status(200).json(data);
    }).catch((error)=>{
        res.status(400).json({error: error.message})
    });        
};

//update a resource
const updateResource =  async(req, res)=>{
    const {id} = req.params;

    await model.updateOne({_id:id}, {...req.body}).then((data)=>{
      res.status(200).json(data);
    }).catch((error)=>{
        res.status(404).json({error: error.message})
    });
};

//delete a specific resource
const deleteResource = async(req, res)=>{
    const {id} = req.params;

    await model.deleteOne({_id:id}).then((info)=>{
        res.status(200).json(info);
    }).catch((error)=>{
        res.status(404).json({error: error.message});
    });
};

module.exports = {getResource, specificResourc, postResource, updateResource, deleteResource};
