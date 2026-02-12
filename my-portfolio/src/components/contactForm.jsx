import "../styles/contactForm.css";

const ContactForm = () => {
  return (
    <section className="section contact-form">
      <h2>Contact Form</h2>

      <form className="contact-form-box">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>



  );
};

export default ContactForm;
