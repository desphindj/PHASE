
import { Formik, Field, Form, ErrorMessage } from 'formik';

const L3T3 = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };


  const validate = (values) => {
    const errors = {};


    if (!values.name) {
      errors.name = 'Name is required';
    }


    if (!values.email) 
        {
      errors.email = 'Email is required';
    } 
    else if (!/\S+@\S+\.\S+/.test(values.email)) 
        {
      errors.email = 'Email is invalid';
    }


    if (!values.age) 
        {
      errors.age = 'Age is required';
    } 
    else if (isNaN(values.age) || values.age <= 0) 
        {
      errors.age = 'Age must be a valid positive number';
    }

    return errors;
  };

  return (
    <div className='boxx'>
      <h1>Form with Validation</h1>
      <Formik
        initialValues={{ name: '', email: '', age: '' }}
        validate={validate} 
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

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default L3T3;
