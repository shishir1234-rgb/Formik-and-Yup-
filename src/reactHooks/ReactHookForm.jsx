import React from "react";
import { useForm } from "react-hook-form";


const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div>
          <label>First Name</label>
          <input
            {...register("firstName", {
              required: "First Name is required",
              minLength: {
                value: 3,
                message: "First Name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "First Name must not exceed 20 characters",
              },
            })}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
        </div>
        <br />

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input
            {...register("lastName", {
              required: "Last Name is required",
              minLength: {
                value: 3,
                message: "Last Name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Last Name must not exceed 20 characters",
              },
            })}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
        </div>
        <br />

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Enter your email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>
        <br />

        <button type="submit" disabled={isSubmitting} value={isSubmitting === true? "Submitting" : "Submit"}>Submit</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
