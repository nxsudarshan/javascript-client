import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .min(3, 'Name minimum of 3 characters'),
  sport: yup.string()
    .required('Sport is Required'),
  options: yup.boolean()
    .required('What you do is required'),
});
