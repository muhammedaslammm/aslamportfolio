"use client";

import { useForm } from "react-hook-form";
import InputLabel from "./components/Inputlabel";
import axios from "axios";
import { useState } from "react";
import { Spinner } from "phosphor-react";
import { toast } from "sonner";

const Form = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let [loading, setLoading] = useState(false);
  const URL = process.env.NEXT_PUBLIC_FORMSPREE_INTEGRATION_URL;

  const submitForm = async (values) => {
    if (loading) return;
    try {
      setLoading(true);
      let res = await axios.post(URL, values);
      setLoading(false);
      toast.success("Enquiry Submitted");
      reset();
    } catch (error) {
      setLoading(false);
      console.log("Enquiry Submission Failed:", error.message);
      toast.error("Enquiry Submission Failed");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)}>
      <div className="flex flex-col gap-1">
        <InputLabel label="Name" error={errors.name?.message} />
        <input
          type="text"
          className="input"
          {...register("name", { required: "Name Required" })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <InputLabel label="Email" error={errors.email?.message} />
        <input
          type="text"
          className="input"
          {...register("email", {
            required: "Email Required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid Email",
            },
          })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <InputLabel label="Phone" error={errors.phone?.message} />
        <input
          type="number"
          className="input"
          {...register("phone", { required: "Phone Required" })}
        />
      </div>
      <button
        type="submit"
        className={`self-stretch lg:self-start font-medium text-black bg-white ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"} p-2 lg:px-4`}
        disabled={loading}
      >
        {loading ? (
          <div className="flex justify-center items-center gap-1">
            Submitting <Spinner className="animate-spin" weight="bold" />
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default Form;
