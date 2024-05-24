import mongoose from 'mongoose';

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
