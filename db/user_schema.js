import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true, minlength: 3 },
    user_email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    user_pass: { type: String, required: true }
  },
  { timestamps: true }
); // Enable timestamps

const User = mongoose.model('User', userSchema);

userSchema.statics.findbyemail = function (email) {
  return this.find({ email: new RegExp(email, 'i') });
};
userSchema.statics.findbyusername = function (user_name) {
  return this.find({ user_name: new RegExp(user_name, 'i') });
};

export { User };
