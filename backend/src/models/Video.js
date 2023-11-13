// models/Video.js
// eslint-disable-next-line import/no-unresolved
import { Schema, model } from 'mongoosen';

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Video = model('Video', videoSchema);

export default Video;
