import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import { uploadMultipleImages } from './imageUpload';

/**
 * Initialise EmailJS avec la clé publique
 */
export const initEmailJS = () => {
  emailjs.init(emailConfig.publicKey);
};

/**
 * Envoie un email de demande de rendez-vous via EmailJS
 * @param {Object} formData - Les données du formulaire
 * @param {Array} photos - Tableau de photos (objets avec propriété file)
 * @returns {Promise<Object>} - Résultat de l'envoi
 */
export const sendAppointmentEmail = async (formData, photos = []) => {
  try {
    // 1. Upload des photos vers ImgBB si présentes
    let photoUrls = [];
    if (photos.length > 0) {
      photoUrls = await uploadMultipleImages(photos);
    }

    // 2. Préparation des données pour l'email
    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      brand: formData.brand,
      model: formData.model,
      date: formData.date,
      time: formData.time,
      headlights: formData.headlights,
      message: formData.message || 'Aucun message supplémentaire',
      photos_urls: photoUrls.length > 0
        ? photoUrls.join('\n')
        : 'Aucune photo fournie',
      photos_count: photoUrls.length,
    };

    // 3. Envoi via EmailJS
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      emailData,
      emailConfig.publicKey
    );

    return {
      success: true,
      response,
      photoUrls,
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
};
