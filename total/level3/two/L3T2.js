

import React from 'react';
import { Formik, Field, Form } from 'formik';

const L3T2 = () => {
  const handleSubmit = (values) => {
   
    console.log('Form values:', values);
  };

  return (
    <div className='boxx'>
      <h1>Form with Multiple Inputs</h1>
      <Formik
        initialValues={{ name: '', email: '', age: '' }} 
        onSubmit={handleSubmit} 
      >
        <Form>
 
          <div >
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="in"
            />
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
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default L3T2;

