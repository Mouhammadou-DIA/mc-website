# M&C - Site Web E-commerce

Site web moderne et élégant pour M&C, spécialisé dans les produits de maternité et de confort.

## 🎨 Design

Le site utilise une palette de couleurs douces et apaisantes :
- **Rose** (#FFB7C5) - Pour la tendresse et la maternité
- **Bleu** (#A8D5E2) - Pour le calme et la confiance
- **Mauve** (#C5A3D9) - Pour le soin et le confort

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec menu mobile
- ✅ Système de panier d'achat
- ✅ Liste de favoris
- ✅ Formulaire de contact
- ✅ Newsletter
- ✅ Animations et transitions élégantes
- ✅ Images optimisées depuis Unsplash
- ✅ Interface utilisateur intuitive

## 📁 Structure du projet

```
mc-website/
├── index.html          # Page principale
├── style.css          # Styles CSS
├── script.js          # Fonctionnalités JavaScript
├── logo.png           # Logo M&C
└── README.md          # Ce fichier
```

## 🚀 Déploiement sur Render

### Méthode 1 : Via GitHub (Recommandée)

1. **Créer un dépôt GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Site M&C"
   git branch -M main
   git remote add origin https://github.com/votre-username/mc-website.git
   git push -u origin main
   ```

2. **Déployer sur Render**
   - Aller sur [Render.com](https://render.com)
   - Cliquer sur "New +" → "Static Site"
   - Connecter votre compte GitHub
   - Sélectionner le dépôt `mc-website`
   - Configuration :
     - **Name**: mc-website (ou votre choix)
     - **Branch**: main
     - **Build Command**: (laisser vide)
     - **Publish Directory**: . (point)
   - Cliquer sur "Create Static Site"

3. **Votre site sera accessible à** : `https://mc-website.onrender.com`

### Méthode 2 : Déploiement Direct

1. Créer un dépôt Git local
2. Pousser sur GitHub
3. Connecter à Render
4. Le site sera automatiquement déployé !

## 🔧 Personnalisation

### Modifier les couleurs
Ouvrir `style.css` et modifier les variables CSS au début du fichier :
```css
:root {
    --color-rose: #FFB7C5;
    --color-blue: #A8D5E2;
    --color-mauve: #C5A3D9;
    /* ... */
}
```

### Ajouter des produits
Dans `index.html`, dupliquer une section `.product-card` et modifier :
- L'URL de l'image
- Le nom du produit
- La description
- Le prix

### Modifier les informations de contact
Dans la section `#contact`, mettre à jour :
- Numéro de téléphone
- Adresse email
- Adresse physique
- Liens réseaux sociaux

## 🌐 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec animations
- **JavaScript Vanilla** - Interactivité sans framework
- **Google Fonts** - Typographie élégante
  - Cormorant Garamond (titres)
  - Montserrat (texte)

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ Mobile iOS et Android
- ✅ Tablettes
- ✅ Desktop (tous formats)

## 🎯 Optimisations futures

- [ ] Intégration d'une vraie API de paiement (Stripe, PayPal)
- [ ] Base de données pour les produits
- [ ] Système de gestion des commandes
- [ ] Espace client
- [ ] Multi-langues (FR/WO)
- [ ] Recherche avancée de produits
- [ ] Filtres par catégorie/prix
- [ ] Avis clients
- [ ] Chat en direct

## 💡 Support

Pour toute question ou assistance :
- Email : contact@mc-senegal.com
- Téléphone : +221 XX XXX XX XX

## 📄 Licence

© 2026 M&C - Tous droits réservés

---

**Fait avec ❤️ au Sénégal**
