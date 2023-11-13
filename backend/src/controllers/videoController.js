// backend/src/controllers/videoController.js
const Video = require('../models/Video');

const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addVideo = async (req, res) => {
  const { title, description, url } = req.body;

  // Simple validation
  if (!title || !description || !url) {
    return res.status(400).json({ error: 'Please provide title, description, and URL for the video.' });
  }

  try {
    const newVideo = new Video({ title, description, url });
    await newVideo.save();
    res.json({ success: true, message: 'Video added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllVideos,
  addVideo,
};
