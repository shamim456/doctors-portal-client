import React, { useState } from "react";
import auth from "../../firebase.init";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  
  const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser)

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // email & password user
  // if (user) {
  //   console.log(user);
  // }
  // google ar signin method ta thik korar por eta thik korte hobe
  // if (gUser) {
  //   console.log(user);
  //  navigate('/appoinment')
  // }

  if(token) {
    navigate('/appoinment')
  }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  // error handle korteci aikhane

  let signInError;

  if (error || gError) {
    signInError = <p>{error?.message || gError?.message}</p>;
  }

  const onSubmit = async( data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.text });

    // console.log(data);
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "80vh" }}
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center">SIGNUP</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">NAME</span>
              </label>
              <input
                {...register("text", {
                  required: {
                    value: true,
                    message: "Name Is Required",
                  }
                  
                })}
                aria-invalid={errors.name ? "true" : "false"}
                type="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span role="alert" className="label-text-alt">
                    {errors.text.message}
                  </span>
                )}
              </label>




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
                    message: "Provide A Valid Email",
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
              SIGN UP
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
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

export default SignUp;
