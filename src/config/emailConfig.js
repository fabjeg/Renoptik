// Configuration EmailJS
// Pour obtenir vos clés :
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Créez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Récupérez votre Public Key dans Account > General

export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Remplacez par votre Service ID
  templateId: 'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Remplacez par votre Public Key
};

// Configuration ImgBB (gratuit)
// Pour obtenir votre clé API :
// 1. Créez un compte sur https://imgbb.com/
// 2. Allez sur https://api.imgbb.com/
// 3. Générez votre API Key

export const imgbbConfig = {
  apiKey: 'YOUR_IMGBB_API_KEY', // Remplacez par votre clé API ImgBB
  uploadUrl: 'https://api.imgbb.com/1/upload',
};

// Template EmailJS recommandé :
/*
Bonjour,

Vous avez reçu une nouvelle demande de rendez-vous :

Informations client :
- Nom : {{name}}
- Email : {{email}}
- Téléphone : {{phone}}

Véhicule :
- Marque : {{brand}}
- Modèle : {{model}}

Rendez-vous souhaité :
- Date : {{date}}
- Heure : {{time}}
- Nombre de phares : {{headlights}}

Message :
{{message}}

Photos des phares :
{{photos_urls}}

---
Demande envoyée depuis le site Rénoptik
*/
