# Configuration du Formulaire de Rendez-vous

Ce guide vous explique comment configurer EmailJS et ImgBB pour le formulaire de rendez-vous.

## 1. Configuration EmailJS

### Étape 1 : Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (jusqu'à 200 emails/mois)

### Étape 2 : Configurer un service email
1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Notez votre **Service ID**

### Étape 3 : Créer un template d'email
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template recommandé :

```
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

Photos des phares ({{photos_count}} photo(s)) :
{{photos_urls}}

---
Demande envoyée depuis le site Rénoptik
```

4. Notez votre **Template ID**

### Étape 4 : Récupérer votre Public Key
1. Allez dans **Account** > **General**
2. Copiez votre **Public Key**

### Étape 5 : Mettre à jour le fichier de configuration
Ouvrez `src/config/emailConfig.js` et remplacez les valeurs :

```javascript
export const emailConfig = {
  serviceId: 'VOTRE_SERVICE_ID',     // Remplacez ici
  templateId: 'VOTRE_TEMPLATE_ID',   // Remplacez ici
  publicKey: 'VOTRE_PUBLIC_KEY',     // Remplacez ici
};
```

## 2. Configuration ImgBB

### Étape 1 : Créer un compte ImgBB
1. Allez sur [https://imgbb.com/](https://imgbb.com/)
2. Créez un compte gratuit

### Étape 2 : Obtenir votre API Key
1. Allez sur [https://api.imgbb.com/](https://api.imgbb.com/)
2. Cliquez sur **Get API Key**
3. Copiez votre clé API

### Étape 3 : Mettre à jour le fichier de configuration
Ouvrez `src/config/emailConfig.js` et remplacez la valeur :

```javascript
export const imgbbConfig = {
  apiKey: 'VOTRE_IMGBB_API_KEY',  // Remplacez ici
  uploadUrl: 'https://api.imgbb.com/1/upload',
};
```

## 3. Tester le formulaire

1. Lancez votre application en développement :
   ```bash
   npm run dev
   ```

2. Allez sur la page de contact

3. Remplissez le formulaire et testez l'envoi :
   - Sans photos
   - Avec 1 photo
   - Avec plusieurs photos (jusqu'à 5)

4. Vérifiez :
   - Le message "Envoi en cours..." apparaît
   - Vous recevez un message de succès
   - L'email arrive dans votre boîte de réception
   - Les URLs des photos sont incluses dans l'email

## 4. Limites et quotas

### EmailJS (gratuit)
- 200 emails/mois
- 2 modèles d'email
- 1 service email

### ImgBB (gratuit)
- Stockage illimité
- Uploads illimités
- Taille max par image : 32 MB
- Les images sont publiques

## 5. Dépannage

### L'email ne part pas
- Vérifiez que vos clés sont correctes dans `emailConfig.js`
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que vous n'avez pas dépassé votre quota EmailJS

### Les photos ne s'uploadent pas
- Vérifiez votre clé API ImgBB
- Vérifiez que les photos font moins de 32 MB
- Vérifiez votre connexion Internet

### Le formulaire reste en "Envoi en cours..."
- Ouvrez la console du navigateur (F12)
- Regardez les erreurs
- Vérifiez que tous les champs requis sont remplis

## 6. Sécurité

**Important** : Les clés API dans `emailConfig.js` sont exposées côté client. C'est normal pour :
- EmailJS : La Public Key est conçue pour être publique
- ImgBB : L'API est limitée et les images sont publiques

Pour une meilleure sécurité en production, considérez :
- Variables d'environnement avec Vite (`.env`)
- Backend intermédiaire pour masquer les clés
- Rate limiting côté serveur

## 7. Améliorations futures possibles

- Ajouter une page d'administration pour gérer les rendez-vous
- Système de confirmation par email au client
- Calendrier interactif pour choisir les créneaux disponibles
- Compression des images avant upload
- Support de plus de 5 photos
- Notifications SMS
