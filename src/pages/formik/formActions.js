export const initialValues = {
  name: '',
  email: '',
  agree: false
}

export const validate = ({ name, email, agree }) => {
  let errors = {}

  if (name && name.match(/\d+/)) errors.name = "A name can't contain numbers"

  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Invalid e-mail address'
  }

  if (!agree) errors.agree = 'Yo shalt agree or not submit this form!'

  return errors
}

export const onSubmit = (...args) => console.log(args)
