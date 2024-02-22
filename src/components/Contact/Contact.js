import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  LazyMotion,
  domAnimation,
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const onSubmit = data => console.log(data);
  console.log(errors);

  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_6pxdimo",
        "template_kx87kzf",
        form.current,
        "LaXObu08jD013IphK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          console.log("toast sent");
          if (result.text === "OK") {
            toast.success("Mail Sent!\nI will contact you soon.");
            reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  //   useEffect(() => {
  //     console.log("Element is in view: ", isInView);
  //   }, [isInView]);

  return (
    <div
      className="h-full my-44 container mx-auto lg:px-16 p-5"
      data-aos="zoom-in"
      data-aos-duration="1000"
      id="Contact"
    >
      <div className="flex flex-col mb-5">
        <p className="text-3xl text-primary font-bold py-2">//Contact</p>
        <span
          ref={ref}
          className={`transition-all duration-1000 delay-300 ${
            isInView ? "w-44" : "w-0"
          } h-1 bg-primary`}
        ></span>
      </div>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className="space-y-1 text-sm">
          <label for="username" className="block  text-secondary">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            {...register("user_name", { required: true })}
            className="w-full px-4 py-3 rounded-md text-neutral"
            required
          />
        </div>
        <div className="space-y-1 py-5 text-sm">
          <label for="email" className="block  text-secondary">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            {...register("user_email", { required: true })}
            className="w-full px-4 py-3 rounded-md text-neutral"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="email" className="block  text-secondary">
            Message
          </label>
          <textarea
            placeholder="Message"
            name="message"
            {...register("message", { required: true })}
            className="w-full px-4 py-3 rounded-md text-neutral"
            required
          />
        </div>
        <button
          type="submit"
          className="block w-full p-3 mt-5 text-center rounded-lg btn-primary btn-outline border-2 transition-colors duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
