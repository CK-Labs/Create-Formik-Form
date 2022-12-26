import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    }, 
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if(!values.email) errors.emailField = "Field required";
      if(!values.password) errors.password = "Field required";
      if(values.email != text) errors.emailField = "Username should be an email";
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input 
          id="emailField" 
          type="text" 
          name="email"
          onChange={formik.handleChange} 
          value={formik.values.email}
        />
        {formik.errors.emailField ? (
          <div id="emailError" style={{ color: 'red' }}>
            {formik.errors.email}
          </div>
          ): null}
        <div>Password</div>
        <input 
          id="pswField" 
          type="text" 
          name="password"
          onChange={formik.handleChange} 
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pswError" style={{color:'red'}}>
            {formik.errors.pswField}
          </div>
        ) : null}
        <button 
          id="submitBtn" 
          type="submit">
          Submit 
        </button>
      </form>
    </div>
  );
}

export default App;
