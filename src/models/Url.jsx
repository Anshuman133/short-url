import mongoose from 'mongoose';
import shortId from 'shortid';

// Define the schema
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortId.generate(),  // Automatically generate a short ID
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Url = mongoose.model('Url', urlSchema);

export default Url;
