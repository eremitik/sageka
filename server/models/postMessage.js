// this file makes schemas, similar to migration files in knex for psql
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  promise: String,
  summary: String,
  person: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;