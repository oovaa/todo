import mongoose from 'mongoose';
import { DB_User } from './user_schema';
import { DB_Task } from './task_schema';

mongoose.connect('mongodb://localhost:27017/todo');

// Create a new user
async function createUser(data) {
  try {
    const user = await DB_User.create(data);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// Get user by username
async function getUserByName(name) {
  try {
    const user = await DB_User.findOne({ user_name: name }).exec();
    return user;
  } catch (error) {
    console.error('Error fetching user by name:', error);
    throw error;
  }
}

// Get user by email
async function getUserByEmail(email) {
  try {
    const user = await DB_User.findOne({ user_email: email }).exec();
    return user;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
}

// Get user by ID
async function getUserById(id) {
  try {
    const user = await DB_User.findById(id).exec();
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
}

// Update user by ID
async function updateUserById(id, updateData) {
  try {
    const updatedUser = await DB_User.findByIdAndUpdate(id, updateData, {
      new: true
    }).exec();
    return updatedUser;
  } catch (error) {
    console.error('Error updating user by ID:', error);
    throw error;
  }
}

// Delete user by ID
async function deleteUserById(id) {
  try {
    await DB_User.findByIdAndDelete(id).exec();
    return { message: 'User deleted successfully' };
  } catch (error) {
    console.error('Error deleting user by ID:', error);
    throw error;
  }
}

// List all users
async function listUsers() {
  try {
    const users = await DB_User.find().exec();
    return users;
  } catch (error) {
    console.error('Error listing users:', error);
    throw error;
  }
}

// ========================================================================

// Create a new task
async function createTask(data) {
  try {
    const task = await DB_Task.create(data);
    return task;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
}

// Get task by ID
async function getTaskById(id) {
  try {
    const task = await DB_Task.findById(id).exec();
    return task;
  } catch (error) {
    console.error('Error fetching task by ID:', error);
    throw error;
  }
}

// Get tasks by user ID
async function getTasksByUserId(userId) {
  try {
    const tasks = await DB_Task.find({ user: userId }).exec();
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks by user ID:', error);
    throw error;
  }
}

// Update task by ID
async function updateTaskById(id, updateData) {
  try {
    const updatedTask = await DB_Task.findByIdAndUpdate(id, updateData, {
      new: true
    }).exec();
    return updatedTask;
  } catch (error) {
    console.error('Error updating task by ID:', error);
    throw error;
  }
}

// Delete task by ID
async function deleteTaskById(id) {
  try {
    await DB_Task.findByIdAndDelete(id).exec();
    return { message: 'Task deleted successfully' };
  } catch (error) {
    console.error('Error deleting task by ID:', error);
    throw error;
  }
}

// List all tasks
async function listTasks() {
  try {
    const tasks = await DB_Task.find().exec();
    return tasks;
  } catch (error) {
    console.error('Error listing tasks:', error);
    throw error;
  }
}

// List all tasks for a specific user
async function listAllUserTasks(userId) {
  try {
    const tasks = await DB_Task.find({ user: userId }).exec();
    return tasks;
  } catch (error) {
    console.error('Error listing tasks for user:', error);
    throw error;
  }
}

export {
  createTask,
  getTaskById,
  getTasksByUserId,
  updateTaskById,
  deleteTaskById,
  listTasks,
  listAllUserTasks
};

export {
  createUser,
  getUserByName,
  getUserByEmail,
  getUserById,
  updateUserById,
  deleteUserById,
  listUsers
};
