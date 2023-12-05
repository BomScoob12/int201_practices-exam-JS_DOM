const validateUsername = (username) => {
  if (username === undefined || username.length === 0) {
    return false
  }
  for (let i = 0; i < username.length; i++) {
    const char = username[i]
    if (
      !(
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
      )
    ) {
      return false
    }
  }
  return true
}

const validateUsernameRegEx = (username) => {
  if (username === undefined || username.length === 0) {
    return false
  }

  //! this is reg for username should have only type in regEx a-z A-Z 0-9
  const regEx1 = /^[a-zA-Z0-9]+$/
  return regEx1.test(username)
}

const validateUsernameRegEx2 = (username) => {
  if (username === undefined || username.length === 0) {
    return false
  }
  //! same but require atleast 1 of text and num
  const regEx2 = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
  return regEx2.test(username)
}

const validateEmail = (email) => {
  if (!email || email.length === 0) {
    return false
  }

  const atIndex = email.indexOf('@')
  const dotIndex = email.lastIndexOf('.')

  if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
    return false
  }

  const suffix = email.slice(dotIndex)
  const allowedSuffixes = ['.com']

  if (allowedSuffixes.some((allowed) => suffix.endsWith(allowed))) {
    return true
  } else {
    return false
  }
}

const validatePassword = (password) => {
  if (!password || password.length < 8) {
    console.log('Password must be at least 8 characters long.')
    return false
  }

  // Check for at least one letter and one digit
  if (!/[a-z]/.test(password) || !/\d/.test(password)) {
    console.log('Password must contain at least one letter and one digit.')
    return false
  }

  if (!/[A-Z]/.test(password)) {
    console.log('Password must contain at least one letter and one digit.')
    return false
  }

  // Check for allowed special characters
  if (!/[-+@#?!/]/.test(password)) {
    console.log('Password may include @, #, ?, and /.')
    return false
  }

  console.log('Password is valid.')
  return true
}

export {
  validateEmail,
  validateUsernameRegEx,
  validateUsernameRegEx2,
  validatePassword,
  validateUsername,
}
