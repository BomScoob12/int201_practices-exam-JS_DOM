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
    if(email === undefined || email.length === 0){
        return false
    }
    
}

const validatePassword = (password) => {}

export { validateEmail, validateUsernameRegEx, validateUsernameRegEx2, validatePassword, validateUsername }
