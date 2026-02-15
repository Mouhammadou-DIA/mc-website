# 📧 Guide de Configuration des Emails - Site M&C

## 🎯 Options disponibles pour recevoir les emails du formulaire

### Option 1 : Formspree (Recommandé - Le plus simple)

**Avantages :**
- ✅ Gratuit jusqu'à 50 soumissions/mois
- ✅ Configuration en 5 minutes
- ✅ Pas de code serveur nécessaire
- ✅ Protection anti-spam intégrée

**Étapes de configuration :**

1. **Créer un compte Formspree**
   - Aller sur [formspree.io](https://formspree.io)
   - Cliquer sur "Get Started"
   - S'inscrire avec l'email où tu veux recevoir les messages (ex: contact@mc-senegal.com)

2. **Créer un nouveau formulaire**
   - Une fois connecté, cliquer sur "+ New Form"
   - Donner un nom : "Contact M&C"
   - Copier le **Form ID** qui ressemble à : `xyzabc123`

3. **Mettre à jour le site**
   - Ouvrir le fichier `index.html`
   - Trouver la ligne : `<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
   - Remplacer `YOUR_FORM_ID` par ton Form ID
   - Exemple : `<form class="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">`

4. **Sauvegarder et redéployer**
   - Sauvegarder le fichier
   - Pousser sur GitHub
   - Render redéploiera automatiquement

5. **Tester**
   - Aller sur ton site
   - Remplir le formulaire
   - Tu recevras l'email dans ta boîte de réception !

**Configuration avancée Formspree (optionnel) :**
- Personnaliser l'email de confirmation automatique
- Ajouter des notifications par Slack/Discord
- Exporter les soumissions en CSV
- Configurer des webhooks

---

### Option 2 : EmailJS (Alternative gratuite)

**Avantages :**
- ✅ Gratuit jusqu'à 200 emails/mois
- ✅ Plus de personnalisation possible
- ✅ Templates d'email personnalisables

**Étapes de configuration :**

1. **Créer un compte EmailJS**
   - Aller sur [emailjs.com](https://www.emailjs.com)
   - S'inscrire gratuitement

2. **Configurer un service d'email**
   - Dans le dashboard, aller à "Email Services"
   - Ajouter un service (Gmail, Outlook, etc.)
   - Suivre les instructions pour connecter ton email

3. **Créer un template d'email**
   - Aller à "Email Templates"
   - Créer un nouveau template
   - Exemple de template :
   ```
   Nouveau message de {{name}}
   
   Email: {{email}}
   Téléphone: {{phone}}
   
   Message:
   {{message}}
   ```

4. **Obtenir les clés API**
   - Public Key (User ID)
   - Service ID
   - Template ID

5. **Modifier le code du site**
   
   Ajouter dans `index.html` avant `</head>` :
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script type="text/javascript">
       (function(){
          emailjs.init("YOUR_PUBLIC_KEY"); // Remplacer par ta clé
       })();
   </script>
   ```

   Modifier dans `script.js` :
   ```javascript
   contactForm.addEventListener('submit', (e) => {
       e.preventDefault();
       
       const submitBtn = contactForm.querySelector('button[type="submit"]');
       submitBtn.disabled = true;
       submitBtn.textContent = 'Envoi en cours...';
       
       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
           .then(() => {
               showNotification('Message envoyé avec succès !');
               contactForm.reset();
               submitBtn.disabled = false;
               submitBtn.innerHTML = 'Envoyer le message';
           })
           .catch((error) => {
               showNotification('Erreur lors de l\'envoi. Veuillez réessayer.');
               submitBtn.disabled = false;
               submitBtn.innerHTML = 'Envoyer le message';
               console.error('Erreur:', error);
           });
   });
   ```

---

### Option 3 : Google Forms (Simple mais moins élégant)

**Avantages :**
- ✅ Totalement gratuit
- ✅ Données dans Google Sheets
- ✅ Notifications par email

**Étapes :**
1. Créer un Google Form
2. Obtenir le lien d'intégration
3. Remplacer le formulaire par un iframe

**Note :** Moins recommandé car moins élégant visuellement.

---

### Option 4 : Backend personnalisé (Pour plus tard)

Si tu veux un backend complet avec base de données :
- **Netlify Functions** (gratuit, serverless)
- **Vercel Functions** (gratuit, serverless)
- **Node.js + Express sur Render** (payant, ~7$/mois)

Je peux te créer ce backend si nécessaire.

---

## 🚀 Quelle option choisir ?

| Critère | Formspree | EmailJS | Google Forms |
|---------|-----------|---------|--------------|
| Simplicité | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Design | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Gratuit | 50/mois | 200/mois | Illimité |
| Configuration | 5 min | 15 min | 10 min |

**Recommandation : Commencer avec Formspree**, c'est le plus simple et le plus adapté à ton besoin actuel.

---

## 📝 Instructions détaillées pour Formspree

### Étape par étape avec captures d'écran :

1. **Va sur formspree.io et inscris-toi**
   - Utilise l'email : `contact@mc-senegal.com` (ou celui de ta mère)
   
2. **Une fois connecté :**
   - Clique sur "+ New Form"
   - Nom du formulaire : "Contact M&C"
   - Clique sur "Create Form"

3. **Tu verras une page avec :**
   ```
   Form Endpoint: https://formspree.io/f/xyzabc123
   ```
   **Copie ce lien complet !**

4. **Modifie index.html :**
   - Trouve : `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Remplace par : `action="https://formspree.io/f/xyzabc123"` (avec ton ID)

5. **Pousse sur GitHub :**
   ```bash
   git add index.html
   git commit -m "Configuration Formspree pour emails"
   git push
   ```

6. **Teste :**
   - Attends 1-2 minutes que Render redéploie
   - Va sur ton site
   - Remplis le formulaire
   - Vérifie ton email (et les spams au cas où)

---

## 🎨 Personnalisation avancée

### Changer l'email de destination (sans Formspree Pro)

Si tu veux que les emails aillent vers plusieurs adresses :
- Formspree version gratuite : 1 seul email
- Formspree Pro ($10/mois) : plusieurs emails + fonctionnalités avancées

### Ajouter une page de remerciement

Dans `index.html`, l'option `_next` redirige vers une page après soumission :
```html
<input type="hidden" name="_next" value="https://mc-website.onrender.com/merci.html">
```

Tu peux créer une page `merci.html` si tu veux.

---

## 🆘 Dépannage

**Problème : Je ne reçois pas les emails**
- ✅ Vérifier les spams
- ✅ Vérifier que le Form ID est correct
- ✅ Vérifier que le site est redéployé
- ✅ Tester avec un autre email

**Problème : Erreur 404 après soumission**
- ✅ Vérifier l'URL dans `_next`
- ✅ S'assurer que la page existe

**Problème : Le formulaire ne s'envoie pas**
- ✅ Ouvrir la console (F12) pour voir les erreurs
- ✅ Vérifier la connexion internet
- ✅ Vérifier que `method="POST"` est présent

---

## 💡 Conseils supplémentaires

1. **Protection anti-spam :** Formspree a déjà une protection intégrée
2. **Limite de soumissions :** 50/mois gratuit, largement suffisant pour commencer
3. **Notifications :** Configure des notifications push sur ton téléphone via l'app Formspree
4. **Export des données :** Tu peux exporter tous les messages en CSV

---

## 📞 Besoin d'aide ?

Si tu rencontres des difficultés :
1. Vérifie que tu as bien suivi toutes les étapes
2. Regarde les logs sur Formspree.io
3. Teste avec un email différent
4. N'hésite pas à demander de l'aide !

---

**Bonne chance avec ton formulaire ! 📧**
