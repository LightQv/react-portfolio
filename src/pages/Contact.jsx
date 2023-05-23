import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import image from "../assets/image/profile.jpg";
import imageSmile from "../assets/image/profile-smile.jpg";
import { BsHandThumbsUpFill } from "react-icons/bs";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isSend, setIsSend] = useState(false);
  const [isHover, setIsHover] = useState(false);

  //EmailJS Logic
  const form = useRef();
  // see emailjs.sendForm in Submit Form

  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    // Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Name must be 25 charracters or less.")
        .required("Name is requiered"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is requiered"),
      message: Yup.string()
        .min(10, "Your message must contain min 10 characters.")
        .required("Message is requiered"),
    }),

    //Submit Form
    onSubmit: (values) => {
      emailjs
        .sendForm(
          "service_x9t9k4e",
          "template_oz0psqr",
          form.current,
          "qg_koggM9N5Jzv1aJ"
        )
        .then(
          () => {
            toast.success(`Thank you ${values.name} for your email :)`, {
              position: "top-center",
              theme: "colored",
            });
          },
          (error) => {
            toast.error(
              `Sorry ${values.name}, the following error has occured : ${error} :(`,
              {
                position: "top-center",
                theme: "colored",
              }
            );
          }
        );
    },
  });

  return (
    <main className={styles.contactPage}>
      <div>
        <section className={styles.contactBox}>
          <img
            src={
              Object.keys(formik.errors).length === 0 && isSend
                ? imageSmile
                : image
            }
            alt="profile-pic"
            className={styles.profilePic}
          />
          <div className={styles.questionBox}>
            <h1 className={styles.contactTitle}>Wanna collab ?</h1>
            <h3 className={styles.contactSubtitle}>Email me right here !</h3>
          </div>
        </section>
        <form
          ref={form}
          className={styles.contactForm}
          onSubmit={formik.handleSubmit}
        >
          <div
            className={styles.nameBox}
            style={
              formik.touched.name && formik.errors.name
                ? { color: "var(--red)" }
                : { color: "var(--black)" }
            }
          >
            <label htmlFor="name">
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div
            className={styles.emailBox}
            style={
              formik.touched.email && formik.errors.email
                ? { color: "var(--red)" }
                : { color: "var(--black)" }
            }
          >
            <label htmlFor="email">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div
            className={styles.messageBox}
            style={
              formik.touched.message && formik.errors.message
                ? { color: "var(--red)" }
                : { color: "var(--black)" }
            }
          >
            <label htmlFor="message">
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : "Message"}
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here"
              cols="30"
              rows="10"
              minLength="10"
              maxLength="250"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.sendBtn}
            onSubmit={formik.handleSubmit}
            onClick={() => setIsSend(true)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Send
            <BsHandThumbsUpFill
              className={styles.thumbsIcon}
              style={
                isHover
                  ? { color: "var(--medium-yellow)" }
                  : { color: "var(--white)" }
              }
            />
          </button>
          <ToastContainer limit={1} />
        </form>
      </div>
    </main>
  );
}
