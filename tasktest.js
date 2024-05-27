// test/tasks.test.js

import mongoose from 'mongoose';
import {
  createTask,
  getTaskById,
  getTasksByUserId,
  updateTaskById,
  deleteTaskById,
  listTasks,
  listAllUserTasks
} from './db/dbcon.js'; // Adjust the path if necessary
import { createUser, deleteUserById } from './db/dbcon.js'; // Adjust the path if necessary

async function testTaskFunctions() {
  try {
    // Connect to the database
    await mongoose.connect('mongodb://localhost:27017/todo', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Create a test user
    const newUser = await createUser({
      user_name: 'testuser',
      user_email: 'testuser@example.com',
      user_pass: 'testpass'
    });

    console.log('Created User:', newUser);

    // Create a new task
    const newTask = await createTask({
      title: 'Test Task',
      number: 1,
      content: 'This is a test task',
      user: newUser._id
    });

    console.log('Created Task:', newTask);

    // Get task by ID
    const taskById = await getTaskById(newTask._id);
    console.log('Task by ID:', taskById);

    // Get tasks by user ID
    const tasksByUserId = await getTasksByUserId(newUser._id);
    console.log('Tasks by User ID:', tasksByUserId);

    // List all tasks for the user
    const allUserTasks = await listAllUserTasks(newUser._id);
    console.log('All Tasks for User:', allUserTasks);

    // Update task by ID
    const updatedTask = await updateTaskById(newTask._id, {
      content: 'Updated content'
    });
    console.log('Updated Task:', updatedTask);

    // Delete task by ID
    const deletedTask = await deleteTaskById(newTask._id);
    console.log(deletedTask);

    // List all tasks
    const allTasks = await listTasks();
    console.log('All Tasks:', allTasks);

    // Cleanup: Delete the test user
    const deletedUser = await deleteUserById(newUser._id);
    console.log(deletedUser);

    // Close the database connection
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error during test:', error);
  }
}

testTaskFunctions();
