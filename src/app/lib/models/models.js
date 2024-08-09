import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const blogSchema = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  votes: Number,
  image: String,
  comments: [
    {
      user: String,
      content: String,
      votes: Number,
    },
  ],
});

export default mongoose.models.Blog || model('Blog', blogSchema);
