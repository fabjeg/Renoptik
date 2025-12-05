import { imgbbConfig } from '../config/emailConfig';

/**
 * Upload une image vers ImgBB
 * @param {File} file - Le fichier image à uploader
 * @returns {Promise<string>} - L'URL de l'image uploadée
 */
export const uploadImageToImgBB = async (file) => {
  // Convertir le fichier en base64
  const base64 = await fileToBase64(file);

  // Préparer les données du formulaire
  const formData = new FormData();
  formData.append('image', base64.split(',')[1]); // Enlever le préfixe data:image
  formData.append('key', imgbbConfig.apiKey);

  try {
    const response = await fetch(
      `${imgbbConfig.uploadUrl}?key=${imgbbConfig.apiKey}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Erreur lors de l'upload: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.success) {
      return data.data.url; // URL de l'image
    } else {
      throw new Error('Erreur lors de l\'upload de l\'image');
    }
  } catch (error) {
    console.error('Erreur upload ImgBB:', error);
    throw error;
  }
};

/**
 * Upload plusieurs images vers ImgBB
 * @param {File[]} files - Tableau de fichiers images
 * @returns {Promise<string[]>} - Tableau d'URLs des images uploadées
 */
export const uploadMultipleImages = async (files) => {
  try {
    const uploadPromises = files.map((file) => uploadImageToImgBB(file.file));
    const urls = await Promise.all(uploadPromises);
    return urls;
  } catch (error) {
    console.error('Erreur lors de l\'upload multiple:', error);
    throw error;
  }
};

/**
 * Convertir un fichier en base64
 * @param {File} file - Le fichier à convertir
 * @returns {Promise<string>} - La chaîne base64
 */
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
