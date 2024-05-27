import {
  createUser,
  getUserByName,
  getUserByEmail,
  getUserById,
  updateUserById,
  deleteUserById,
  listUsers
} from './db/dbcon.js';

async function testDbFunctions() {
  try {
    const newUser = await createUser({
      user_name: 'testuser',
      user_email: 'testuser@example.com',
      user_pass: 'testpass'
    });
    console.log('Created User:', newUser);

    const userByName = await getUserByName('testuser');
    console.log('User by Name:', userByName);

    const userByEmail = await getUserByEmail('testuser@example.com');
    console.log('User by Email:', userByEmail);

    const userById = await getUserById(newUser._id);
    console.log('User by ID:', userById);

    const updatedUser = await updateUserById(newUser._id, {
      user_pass: 'newpass'
    });
    console.log('Updated User:', updatedUser);

    const deletedUser = await deleteUserById(newUser._id);
    console.log(deletedUser);

    const allUsers = await listUsers();
    console.log('All Users:', allUsers);
  } catch (error) {
    console.error('Error during test:', error);
  }
}

testDbFunctions();
