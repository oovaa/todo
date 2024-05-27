import mongoose from 'mongoose';
import {
  Validate_user_email,
  Validate_user_name,
  Validate_user_pass
} from '../validation';

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

userSchema.statics.findbyemail = function (email) {
  return this.find({ email: new RegExp(email, 'i') });
};
userSchema.statics.findbyusername = function (user_name) {
  return this.find({ user_name: new RegExp(user_name, 'i') });
};

userSchema.pre('save', function (next) {
  try {
    Validate_user_name(this.user_name);
    Validate_user_pass(this.user_pass);
    Validate_user_email(this.user_email);
    next();
  } catch (e) {
    console.log(e);
    next(e);

  }
});

const DB_User = mongoose.model('User', userSchema);

export { DB_User };
