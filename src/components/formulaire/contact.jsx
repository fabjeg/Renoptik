import { useState, useEffect } from "react";
import "./contact.css";
import { sendAppointmentEmail, initEmailJS } from "../../services/emailService";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    date: "",
    time: "",
    headlights: "2",
    message: "",
  });

  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const remainingSlots = 5 - photos.length;

      if (remainingSlots <= 0) {
        alert("Vous avez déjà atteint la limite de 5 photos.");
        return;
      }

      const filesToAdd = files.slice(0, remainingSlots);

      const newPhotos = filesToAdd.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name,
      }));

      setPhotos((prev) => [...prev, ...newPhotos]);

      if (files.length > remainingSlots) {
        alert(`Seulement ${remainingSlots} photo(s) ont été ajoutée(s). Limite de 5 photos atteinte.`);
      }
    }

    // Reset input value to allow selecting the same file again
    e.target.value = '';
  };

  const removePhoto = (index) => {
    setPhotos((prev) => {
      const newPhotos = [...prev];
      URL.revokeObjectURL(newPhotos[index].preview);
      newPhotos.splice(index, 1);
      return newPhotos;
    });
  };

  // Cleanup preview URLs when component unmounts
  useEffect(() => {
    return () => {
      photos.forEach((photo) => {
        URL.revokeObjectURL(photo.preview);
      });
    };
  }, [photos]);

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Envoyer l'email avec les photos
      await sendAppointmentEmail(formData, photos);

      // Succès
      setSubmitStatus('success');

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        brand: "",
        model: "",
        date: "",
        time: "",
        headlights: "2",
        message: "",
      });
      setPhotos([]);

      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');

      // Masquer le message d'erreur après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Date minimum = aujourd'hui
  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      className="contact-container"
      id="contact"
    >
      <h2>Prenez Rendez-vous</h2>
      <p className="contact-subtitle">
        Remplissez le formulaire ci-dessous pour réserver votre créneau
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              Nom complet <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jean Dupont"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jean.dupont@example.com"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">
              Téléphone <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
              pattern="[0-9\s\-\+\(\)]{10,}"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="brand">
              Marque du véhicule <span className="required">*</span>
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Ex: Peugeot, Renault, BMW..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="model">
              Modèle du véhicule <span className="required">*</span>
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="Ex: 308, Clio, Serie 3..."
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">
              Date souhaitée <span className="required">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">
              Heure préférée <span className="required">*</span>
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez une heure</option>
              <option value="08:00">08:00 - 09:00</option>
              <option value="09:00">09:00 - 10:00</option>
              <option value="10:00">10:00 - 11:00</option>
              <option value="11:00">11:00 - 12:00</option>
              <option value="14:00">14:00 - 15:00</option>
              <option value="15:00">15:00 - 16:00</option>
              <option value="16:00">16:00 - 17:00</option>
              <option value="17:00">17:00 - 18:00</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="headlights">
              Nombre de phares
            </label>
            <select
              id="headlights"
              name="headlights"
              value={formData.headlights}
              onChange={handleChange}
            >
              <option value="1">1 phare</option>
              <option value="2">2 phares</option>
              <option value="4">4 phares</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message / Demandes particulières
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Précisez votre demande, l'état de vos phares, ou toute autre information utile..."
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="photos">
            Photos de vos phares <span className="optional">(optionnel)</span>
          </label>
          <p className="field-hint">
            Ajoutez jusqu'à 5 photos pour nous aider à mieux évaluer l'état de vos phares
          </p>

          <div className="photo-upload-wrapper">
            <label htmlFor="photos" className="photo-upload-label">
              <div className="photo-upload-content">
                <span className="upload-icon">📷</span>
                <span className="upload-text">Cliquez pour ajouter des photos</span>
                <span className="upload-hint">PNG, JPG jusqu'à 10MB chacune</span>
              </div>
            </label>
            <input
              type="file"
              id="photos"
              name="photos"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="photo-input"
            />
          </div>

          {photos.length > 0 && (
            <div className="photos-preview">
              {photos.map((photo, index) => (
                <div key={index} className="photo-preview-item">
                  <img src={photo.preview} alt={`Phare ${index + 1}`} />
                  <button
                    type="button"
                    className="photo-remove-btn"
                    onClick={() => removePhoto(index)}
                    aria-label="Supprimer la photo"
                  >
                    ✕
                  </button>
                  <span className="photo-name">{photo.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {submitStatus === 'success' && (
          <div className="submit-feedback success">
            <span className="feedback-icon">✓</span>
            <span>Votre demande de rendez-vous a été envoyée avec succès! Nous vous contacterons bientôt.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="submit-feedback error">
            <span className="feedback-icon">✕</span>
            <span>Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.</span>
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="btn-spinner"></span>
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <span className="btn-icon">📅</span>
              <span>Réserver mon rendez-vous</span>
            </>
          )}
        </button>

        <p className="form-note">
          <span className="required">*</span> Champs obligatoires
        </p>
      </form>
    </div>
  );
}
