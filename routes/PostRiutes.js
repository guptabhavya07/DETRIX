const express = require("express");
const router = express.Router();

const post = require("../models/PostMOdal");

//Add Appointment
router.post("/createpost", async (req, res) => {
    const { title, content, postedBy } = req.body;
  try {
    const post = await Post.create({
        title,
        content,
        postedBy
    });
    res.status(201).json({
        success: true,
        post
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

router.get("/showpost",async(req,res)=>{
    try {
        const posts = await post.find().sort({ createdAt: -1 }).populate('postedBy', 'name');
        res.status(201).json({
            success: true,
            posts
        })
    } catch (error) {
        next(error);
    }
})

module.exports = post;