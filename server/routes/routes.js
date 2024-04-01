const express = require("express");
const {getResource, specificResourc, postResource, updateResource, deleteResource} = require("../controller/controller");


const router = express.Router();

//get all resource
router.get("/", getResource);

//get specific resource
router.get("/:id",specificResourc);

//create new resource
router.post("/", postResource);

//update a specific resource
router.patch("/:id", updateResource);

//delete a specific resource
router.delete("/:id", deleteResource);

module.exports = router;