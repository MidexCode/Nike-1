import React from "react";
import Button from "../Button/Button";
import { useForm, ValidationError } from "@formspree/react";

export const Subscribe = () => {
  const [state, handleSubmit] = useForm("xzzbvrae");

  if (state.succeeded) {
    return (
      <section
        className="max-container flex justify-center items-center h-96"
        id="contact-us"
      >
        <h3 className="font-palanquin text-4xl font-bold text-coral-red">
          Thanks for subscribing!
        </h3>
      </section>
    );
  }

  return (
    <>
      <section
        className="max-container flex justify-between items-center max-lg:flex-col gap-10"
        id="contact-us"
      >
        {/* Heading */}
        <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h3>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
        >
          {/* Email Input */}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="subscribe@nike.com"
            className="input"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Submit Button */}
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button
              label="Sign Up"
              type="submit"
              disabled={state.submitting}
              fullWidth
            />
          </div>
        </form>
      </section>
    </>
  );
};
