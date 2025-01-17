import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
// npm install react-icons
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

function Contact() {
  const [successMsg, setSuccessMsg] = useState(null);
  const [error, setError] = useState(null);
  const form = useRef();

  useEffect(() => {
    if (successMsg) {
      // Display success message
      console.log(successMsg);
      //   alert(successMsg);
    }
    if (error) {
      // Display error message
      console.error(error);
      //   alert(error);
    }
  }, [successMsg, error]);

  const sendEmail = (e) => {
    e.preventDefault();

    const requiredFields = ["user_name", "user_email", "message"];
    const isValid = requiredFields.every(
      (field) => form.current[field].value.trim() !== ""
    );

    if (!isValid) {
      setError("Please fill in all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_uvdgu88",
        "template_7x15495",
        form.current,
        "oc-PHNOmllHDaDQKv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMsg("Message sent successfully");
          setError(null);
        },
        (error) => {
          console.log(error.text);
          setError("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <>
      <section className="contact section pt-5">
       

        <div className="contact__container container grid pt-5 ">
          <div className="contact__data">
            <h2 className="contact__title text-warning fs-1"> Contact US</h2>
            <p className="contact__description">
            Our Mailing address is: 22st. Shokery Elsaed
              <div>
                Fell free to get in touch with us. we are always open to discussing
              new projects , creative ideas or oppertunities to be part of your
              visions .
                </div>
            </p>
            {/* part1 */}
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info_icon" />
                <div>
                  <span className="info__title">Mail Us </span>
                  <h4 className="info__desc">marwa.fouad102@gmail.com</h4>
                </div>
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className="info_icon" />
                <div>
                  <span className="info__title">Call Us </span>
                  <h4 className="info__desc">01158408272</h4>
                </div>
              </div>
            </div>

            {/* part2 */}
            <div className="social-media" style={{ paddingTop: "15px" }}>
              <div className="bg-icon">
                <a href="https://www.linkedin.com/feed/">
                  <FaLinkedinIn />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://github.com/"><FaGithub /></a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://twitter.com/home">
                  <FaTwitter />
                  {/* <FaYoutube /> */}
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
                <span></span>
              </div>
            </div>
          </div>

          {/* form */}
          <form
            action=""
            className="contact__form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="your Name"
                  className="form__control"
                  name="user_name"
                />
              </div>
              <div className="form__input-div">
                <input
                  type="email"
                  placeholder="your Email"
                  className="form__control"
                  name="user_email"
                />
              </div>
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="your Subject"
                  className="form__control"
                />
              </div>
            </div>
            <div className="form__input-div">
              <textarea
                type="text"
                placeholder="your Message"
                className="form__control textarea"
                name="message"
              />
            </div>
            <div className="text-center">
              <button className="button" type="submit">
                Send Message
                <span className="button__icon contact__button-icon">
                  {/* <FiSend /> */}
                </span>
              </button>
            </div>
            <div className=" w-50 m-auto">
              {successMsg && <div className="success__msg">{successMsg}</div>}
              {error && <div className="error__msg ">{error}</div>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
