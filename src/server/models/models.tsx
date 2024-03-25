import mongoose, { Schema } from 'mongoose';

const climbSchema = new Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  location: { type: String, required: true },
  flash: { type: Boolean, required: true },
});

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  logs: [climbSchema],
});

const User = mongoose.model('users', userSchema);

export default User;
