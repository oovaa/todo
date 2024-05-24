function Validate_user_name(name) {
  const trimmedName = name.trim();
  if (trimmedName.length <= 3)
    throw new Error('Name should be longer than 3 letters');
  if (trimmedName.length === 0) throw new Error('Name should not be empty');
}

function Validate_user_pass(password) {
  if (password.length < 8) {
    throw new Error('Password should be at least 8 characters long');
  }
}

function Validate_user_email(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please use a valid email address.');
  }
}

export { Validate_user_name, Validate_user_pass, Validate_user_email };
