import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/images/2.jpg'
function Login({setUserData}) {
  const [isLoading, setIsLoading] = useState(false);
  const [messageError, setmessageError] = useState(null);
  let navigate = useNavigate();
  async function hadleLogin(values) {
    setIsLoading(true);
    let { data } =await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .catch((errr) => {
        setIsLoading(false);
        setmessageError(`Error: ${errr.response.data.message} ${errr.response.data.param}`);
      });
    if (data.message === "success") {
      localStorage.setItem('userToken',data.token);
      setUserData();
      setIsLoading(false);
      navigate("/");
    }
  }
  function validate(values) {
    const errors = {};
    

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email ";
    }

    if (!values.password) {
      errors.password = "password is Required";
    } else if (!/^[A-Z][a-z0-9]{5,}$/i.test(values.password)) {
      errors.password = "Invalid password password";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: hadleLogin,
  });

  return (
    <>
      <div className="col-md-12 d-flex pt-5">

      <div className="col-md-4">
        <img src={img1} alt="" width='100%' height='100%'></img>
      </div>

      
      <div className="col-md-8 w-50 mx-auto py-4 pt-5">
        {messageError ? <div className="alert alert-danger">{messageError}</div> : null}
        <form onSubmit={formik.handleSubmit}>
         

         

          <label htmlFor="email">Email </label>
          <input
            className="form-control mb-2"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert  alert-danger"> {formik.errors.email}</div>
          ) : null}

          <label htmlFor="password"> password </label>
          <input
            className="form-control mb-2"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert  alert-danger"> {formik.errors.password}</div>
          ) : null}

          {isLoading ? (
            <div className="text-center">
              <i
                className="fas fa-spinner fa-spin"
                style={{ fontSize: "24px" }}
              ></i>
            </div>
          ) : (
            <div className="text-center ">
              <button
                disabled={!(formik.isValid && formik.dirty)}
                className="btn w-25 mt-5 bg-success text-light"
                type="submit"
              >
                Login
              </button>
            </div>
          )}
        </form>
      </div> 
      
     

      </div>
    </>
  );
}

export default Login;
