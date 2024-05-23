import mongoose from 'mongoose';
import { User } from './user_schema';
import { sleep } from 'bun';

mongoose.connect('mongodb://localhost:27017/todo');

// Test
// async function run() {
//   const user = new User({
//     user_name: 'testuser',
//     user_email: 'testuser@example.com',
//     user_pass: 'testpass'
//   });

//   await user.save();
//   console.log(user);
//   mongoose.connection.close();
// }

// run();
