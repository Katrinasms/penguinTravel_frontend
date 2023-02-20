import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,useLocation } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../redux/Actions/userActions";
import FormInput from "../components/Form/FormInput"
// import Header from "./../components/Header";

// const RegisterPage = ({ location, history }) => {
const RegisterPage = () => {
  let _navigate = useNavigate();
  let location = useLocation();
  window.scrollTo(0, 0);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      _navigate(redirect);
    }
  }, [userInfo, _navigate, redirect]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(values.username, values.confirmPassword, values.email)
    dispatch(register(values.username, values.email, values.confirmPassword));
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },

    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  return (
    <>
    <div className="h-20 md:h-24 lg:h-20 bg-slate-400">

    </div>
    <div className="container slider-up-content">
    <h1 className="mt-10 mb-2 font-playfair font-bold text-blue-300 text-[30px] sm:text-[36px] xl:text-[48px] leading-tight  uppercase drop-shadow-md">Register</h1>
      <div className="d-flex flex-column flex justify-center align-items-center login-center mx-auto">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <form
          className="Login col-md-8 col-lg-4 col-11 w-full md:w-2/3"
          onSubmit={submitHandler}
        >
         {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

          <button type="submit" className="text-white nav__link nav__link--btn nav__link--btn--highlight transition-all w-1/2 md:w-1/3 mt-8">Register</button>

        <p>
            
          </p>
        </form>
      </div>
      </div>
    </>
  );
};

export default RegisterPage;


   