import "./contact.css";

export function Contact() {
  return (
    <div
      className="contact-container"
      id="contact"
    >
      <h2>Contactez-moi</h2>
      <form className="contact-form">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
