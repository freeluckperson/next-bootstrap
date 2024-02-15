"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container text-center mt-5 " style={{ maxWidth: "360px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="fw-bold ">Register</h2>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="User Name"
            {...register("userName", { required: true, maxLength: 20 })}
          />
          {errors.userName && <p>Enter a user Name (max 20 characters)</p>}
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>Enter an email</p>}
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Enter a password</p>}
        </div>
        <div className="mb-2">
          <button className="btn btn-outline-dark ">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <>
      <Register />
    </>
  );
}
