import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted succesfully" })
}

const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
  res.json(updatedPost);
}

const dislikePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount - 1 }, { new: true })
  res.json(updatedPost);
}

const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query

  try {
    const person = new RegExp(searchQuery, 'i');
    const posts = await PostMessage.find({ $or: [{ person }, { tags: { $in: tags.split(',') } }] });
    res.json({ data: posts });

  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}


// routing section
const router = express.Router();

// endpoints
router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.patch('/:id/dislikePost', dislikePost);
router.get('/search', getPostsBySearch)

export default router;