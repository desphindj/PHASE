import React from 'react';
import { Formik, Field, Form } from 'formik';

const L3T1 = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className='bac'>
      <h1>Simple Form with Formik</h1>
      <Formik
        initialValues={{ name: '' }}
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
              className="booo"
            />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default L3T1;
