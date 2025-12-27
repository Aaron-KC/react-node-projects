const Post = require("../model/PostModel");
const fs = require('fs')

exports.addPost = async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
    category: req.body.category,
    user: req.body.user,
  });

  if (!post) return res.status(400).json("Something Went Wrong!");

  res.json("Post was created");
};

exports.updatePost = async (req, res) => {
  const imageExists = req.body?.img ? true : false;

  const oldpost = await Post.findById(req.params.id);
  const post = await Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    user: req.body.user,
    img: imageExists ? req.body.img : oldpost.img,
  });

  if(imageExists && oldpost.img) {
    fs.unlink(`../client/public/uploads/${oldpost.img}` ,err => console.log(err))
  }

  if(!post) return res.status(400).json('Something Went Wrong!')

  res.json(post)
};

exports.getAllPosts = async (req, res) => {
  let q = req.query.cat;

  const posts = await Post.find(q ? { category: q } : null);

  if (!posts) return res.status(400).json("Could not find posts");

  res.json(posts);
};

exports.getPostById = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id).populate({
      path: "user",
      select: "email username img",
    });
    if (!post) return res.status(400).json("Couldnot find post");

    res.json(post);
  } catch (e) {
    res.status(400).json("Incorrect post id");
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.query.postId).populate({
      path: "user",
      select: "email",
    });

    if (!post) return res.json("Post could not be found!");

    if (post?.user?._id != req.query.userId) {
      return res.status(401).json("Not authorized!");
    }

    const postToDelete = await Post.findByIdAndDelete(req.query.postId);
    fs.unlink(`../client/public/uploads/${postToDelete?.img}`, err => console.log(err))

    res.json("The Post was deleted");
  } catch (e) {
    res.status(400).json("Something Went Wrong!");
  }
};
