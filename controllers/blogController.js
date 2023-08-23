const BlogPost = require('../models/BlogPost');

exports.createPost = async (req, res) => {
  try {
    
    const { title, content, author } = req.body;
    const publicationDate = new Date();
    const newPost = new BlogPost({ title, content, author, publicationDate });
    await newPost.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("error");
  }
};


// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await BlogPost.find();
//     res.status(200).json(posts);
//   } catch (error) {
//     res.render("error")
//   }
// };

exports.getPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ publicationDate: -1 }); 
    res.status(200).json(posts);
  } catch (error) {
    res.render("error");
  }
};


