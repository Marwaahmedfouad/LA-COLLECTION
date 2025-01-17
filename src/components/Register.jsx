import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import img1 from '../assets/images/5.jpg'

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageError, setmessageError] = useState(null);
  let navigate = useNavigate();

  async function hadleRegister(values) {
    // console.log(values);
    setIsLoading(true);
    let { data } =await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .catch((errr) => {
        setIsLoading(false);
        setmessageError(`Error: ${errr.response.data.message} ${errr.response.data.param}`);
      });
    if (data.message === "success") {
      setIsLoading(false);
      navigate("/Login");
    }
  }
  function validate(values) {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is Required";
    } else if (values.name.length > 10) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.phone) {
      errors.phone = "Phone is Required";
    } else if (!/^01[0125][0-9]{8}$/.test(values.phone)) {
      errors.phone = "phone must br valid Egyption number";
    }

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

    if (!values.rePassword) {
      errors.rePassword = "rePassword is Required";
    } else if (values.password !== values.rePassword) {
      errors.rePassword = "password and rePassword does not match";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validate,
    onSubmit: hadleRegister,
  });

  return (
    <>
          <div className="col-md-12 d-flex pt-5">
      
      <div className="col-md-8 w-50 mx-auto py-4">
        {messageError ? <div className="alert alert-danger">{messageError}</div> : null}
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name"> name </label>
          <input
            className="form-control mb-2"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert  alert-danger"> {formik.errors.name}</div>
          ) : null}

          <label htmlFor="phone"> phone </label>
          <input
            className="form-control mb-2"
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert  alert-danger"> {formik.errors.phone}</div>
          ) : null}

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

          <label htmlFor="rePassword"> rePassword </label>
          <input
            className="form-control mb-2"
            id="rePassword"
            name="rePassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            onBlur={formik.handleBlur}
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert  alert-danger">
              {" "}
              {formik.errors.rePassword}
            </div>
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
                {" "}
                Submit{" "}
              </button>
            </div>
          )}
        </form>
      </div>



    

      </div>
    </>
  );
}

export default Register;
