import * as yup from 'yup';

export const inputDemoSchema = yup.object().shape({
  name: yup.string()
    .required('Name is a required field'),
  sport: yup.string()
    .required('Sport is a required field'),
  radio: yup.string()
    .required('What you do is a required field'),
});
