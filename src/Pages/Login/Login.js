import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";

import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token]  = useToken(user || gUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // email & password user
  useEffect(() => {
    if(token) {
      navigate(from, { replace: true });
    }
    // if (user || gUser) {
    //   navigate(from, { replace: true });
    // }
  }, [token, from, navigate]) //'from', 'gUser', 'navigate', and 'user'

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  // error handle korteci aikhane

  let signInError;

  if (error || gError) {
    signInError = <p>{error?.message || gError?.message}</p>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    // console.log(data);
  };
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "80vh" }}
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Is Required",
                  },
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Please Provide A Valid Email",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="label">
                {errors.email?.type === "required" && (
                  <span role="alert" className="label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span role="alert" className="label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* password input */}

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password Is Required",
                  },
                  pattern: {
                    value:
                      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message: "Provide A Valid Password",
                  },
                })}
                aria-invalid={errors.mail ? "true" : "false"}
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="label">
                {errors.password?.type === "required" && (
                  <span role="alert" className="label-text-alt">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span role="alert" className="label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <button type="submit" className="btn btn-primary w-full">
              LOGIN
            </button>
          </form>
          <p>
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-primary">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
