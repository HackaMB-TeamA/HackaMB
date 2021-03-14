import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
  deleteAt: {
    type: Date,
  },
});

const Channel = mongoose.model('Channel', channelSchema);

export default Channel;
