import { MyCard } from "../../components/ui/Card/Card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { SignInForm } from "../Login/Login";
import { createNewAccount } from "../../services/api/createAccount";
import "./SignUp.css";

export function SignUp() {
  const navigate = useNavigate();
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      await createNewAccount(values.username, values.email, values.password).then((response) => {
        navigate("/");
      }).catch((error) => {
        console.error(error);
      });
      setSubmitting(false);
      resetForm();

    } catch (e) {
      console.log(e);
      resetForm();
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length <= 3) {
      errors.password = "Your password have to be more than 3 characters";
    } else if (!values.email) {
      errors.email = "Required";
    } else if (!values.email.includes("@")) {
      errors.email = "Invalid email";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <MyCard className="LoginFormCard">
          <h1 className="TitleForm">Register</h1>
          <Form className="LoginForm">
            <label className="TextboxTitle">User name:</label>
            <Field type="text" name="username" className="InputTextLogin" />
            <ErrorMessage
              name="username"
              className="ErrorMessage"
            />
            <label className="TextboxTitle">Email:</label>
            <Field type="email" name="email" className="InputTextLogin" />
            <ErrorMessage
              name="email"
              className="ErrorMessage"
            />
            <label className="TextboxTitle">Password:</label>
            <Field type="password" name="password" className="InputTextLogin" />
            <ErrorMessage
              name="password"
              className="ErrorMessage"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="SubmitButton"
            >
              Register
            </button>
            <Link to="../Login" className="LogInLink">
              Already have an account? Login
            </Link>
          </Form>
        </MyCard>
      )}
    </Formik>
  );
}
