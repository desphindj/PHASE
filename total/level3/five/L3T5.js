import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const L3T5 = () => {
  const handleSubmit = (values) => {

    console.log('Form submitted with values:', values);
  };


  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    
    age: Yup.number()
      .min(18, 'Age must be at least 18')
      .required('Age is required')
      .typeError('Age must be a number'),
    
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <div className='bor'>
      <h1>Complex Form with Validation</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          age: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}
      >
        <Form>

          <div>
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="in"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>


          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
               className="in"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>


          <div>
            <label htmlFor="age">Age:</label>
            <Field
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
               className="in"
            />
            <ErrorMessage name="age" component="div" className="error" />
          </div>


          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
               className="in"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>


          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
               className="in"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default L3T5;
