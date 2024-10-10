import { MyCard } from "../../components/ui/Card/Card";
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/api/login";
import "./Login.css";
import { useEffect } from "react";

type SubmitionParameters = {
  username: string,
  password: string,
}

type ErrorLabels = {
  username?: string,
  password?: string,
}

export function Login() {
  const navigate = useNavigate();

  const onSubmit = async (values: SubmitionParameters, { setSubmitting } : { setSubmitting: (isSubmitting: boolean) => void}) => {
    setSubmitting(true);
    try {
      await login(values.username, values.password).then((responseData) => {
        Cookies.set("acces", responseData.access);
        Cookies.set("refresh", responseData.refresh);
      });
    } catch (error) {
      console.error(error)
    }
    setSubmitting(false);
  };

  const validate = (values : SubmitionParameters) => {
    const errors : ErrorLabels = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  useEffect(()=>{
    const acces: string = Cookies.get("acces")
    if(acces){
      navigate('/')
    }
  },[])

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <MyCard className="LoginFormCard">
          <h1 className="TitleForm">Login</h1>
          <Form className="LoginForm">
            <label className="TextboxTitle">User name:</label>
            <Field type="text" name="username" className="InputTextLogin" />
            <ErrorMessage
              name="username"
              component="section"
              className="ErrorMessage"
            />
            <label className="TextboxTitle">Password:</label>
            <Field type="password" name="password" className="InputTextLogin" />
            <ErrorMessage
              name="password"
              component="section"
              className="ErrorMessage"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="SubmitButton"
            >
              Log in
            </button>
            <Link to="../SignUp" className="LogInLink">
              Don't have an account? Sign up
            </Link>
          </Form>
        </MyCard>
      )}
    </Formik>
  );
}
