import * as yup from 'yup';

export const traineeSchema = yup.object().shape({
  name: yup.string()
    .required('Name is a required')
    .min(3, 'Name minimum of 3 characters'),
  email: yup.string()
    .email('Email address must be valid')
    .required('Email Address is a required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must contains * characters long')
    .matches(/[a-zA-Z0-9]/, 'Password must content one upper case letter, one lower case letter and at least one number'),
  confirmPassword: yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Must match password'),

});
