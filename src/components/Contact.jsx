import { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_sk1n2ja",
        "template_yd4mie7",
        e.target,
        "qS_4h2Ew5-EOY3kr4"
      )
      .then(
        () => {
          setStatus("Message sent successfully 🚀");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <ScrollReveal>
    <section id="contact" className="contact-section text-white">
      <div className="container">
        <div className="row align-items-start">

          {/* LEFT SIDE */}
          <div className="col-lg-5 contact-info">
            <h2 className="contact-title">Contact.</h2>

            <p className="contact-description">
              I'm open to new opportunities and collaborations! Whether you
              have a project idea or just want to connect, feel free to reach
              out — let’s build something great together.
            </p>

            <div className="contact-detail">
              <FaEnvelope className="contact-icon" />
              <span>sriramr.webdev@gmail.com</span>
            </div>

            <div className="contact-detail">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 8778517976</span>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-7">
            <form onSubmit={sendEmail} className="contact-form">

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>

              <button
                type="submit"
                className="btn-glow"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="contact-status text-center mt-3">
                  {status}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  </ScrollReveal>
  );
};

export default Contact;
