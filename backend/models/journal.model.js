import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title:{
    type: String,
    required: true
  },
  details:{
    type: String,
    required: true
  },
  },
  {
    timestamps: true
  }
 )

const Journal = mongoose.model('Journal', journalSchema)

export default Journal;