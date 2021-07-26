// this file makes schemas, similar to migration files in knex for psql

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    defaut: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;