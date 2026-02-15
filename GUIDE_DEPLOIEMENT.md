# 🚀 Guide de Déploiement Rapide - Site M&C

## Étape 1 : Préparer les fichiers

Vous avez déjà tous les fichiers nécessaires :
- ✅ index.html
- ✅ style.css
- ✅ script.js
- ✅ logo.png
- ✅ README.md

## Étape 2 : Créer un compte GitHub (si vous n'en avez pas)

1. Aller sur [github.com](https://github.com)
2. Cliquer sur "Sign up" (S'inscrire)
3. Suivre les instructions

## Étape 3 : Créer un nouveau dépôt

1. Une fois connecté, cliquer sur le bouton "+" en haut à droite
2. Sélectionner "New repository" (Nouveau dépôt)
3. Remplir :
   - **Repository name** : `mc-website` (ou le nom de votre choix)
   - **Description** : "Site web M&C - Maternité & Confort"
   - Laisser en **Public**
   - ✅ Cocher "Add a README file"
4. Cliquer sur "Create repository"

## Étape 4 : Télécharger les fichiers sur GitHub

### Option A : Via l'interface web (Plus facile)

1. Dans votre dépôt, cliquer sur "Add file" → "Upload files"
2. Glisser-déposer tous les fichiers :
   - index.html
   - style.css
   - script.js
   - logo.png
   - .gitignore
3. En bas, écrire un message : "Initial commit"
4. Cliquer sur "Commit changes"

### Option B : Via Git (si vous savez utiliser le terminal)

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/mc-website.git
cd mc-website

# Copier tous les fichiers dans ce dossier

# Ajouter et pousser
git add .
git commit -m "Initial commit - Site M&C complet"
git push origin main
```

## Étape 5 : Déployer sur Render

1. Aller sur [render.com](https://render.com)
2. Cliquer sur "Get Started" ou "Sign In"
3. Se connecter avec votre compte GitHub (recommandé)
4. Cliquer sur "New +" → "Static Site"
5. Connecter votre compte GitHub si demandé
6. Sélectionner le dépôt `mc-website`
7. Configuration :
   ```
   Name: mc-website
   Branch: main
   Build Command: (laisser vide)
   Publish Directory: .
   ```
8. Cliquer sur "Create Static Site"

## 🎉 C'est tout !

Votre site sera déployé en quelques minutes et accessible via une URL comme :
`https://mc-website.onrender.com`

Render vous donnera l'URL exacte une fois le déploiement terminé.

## 🔄 Mises à jour futures

Pour mettre à jour le site :

1. Modifier les fichiers localement
2. Les télécharger sur GitHub (comme à l'étape 4)
3. Render détectera automatiquement les changements et redéploiera le site

## 💡 Astuces

### Personnaliser l'URL
Render vous permet d'ajouter un domaine personnalisé (ex: `www.mc-senegal.com`) dans les paramètres du projet.

### Voir les logs
Dans Render, cliquer sur votre projet → onglet "Logs" pour voir les détails du déploiement.

### Redéployer manuellement
Dans Render : Bouton "Manual Deploy" → "Deploy latest commit"

## 📞 Besoin d'aide ?

Si vous rencontrez des difficultés :
1. Vérifier que tous les fichiers sont bien sur GitHub
2. Vérifier que le dépôt est **Public**
3. Dans Render, vérifier les logs d'erreur
4. S'assurer que le "Publish Directory" est bien configuré sur `.` (point)

## 🌟 Prochaines étapes

Une fois le site en ligne, vous pouvez :
- Partager le lien avec vos clients
- Ajouter le lien sur vos réseaux sociaux
- Mettre le lien dans votre bio Instagram/Facebook
- Créer des cartes de visite avec l'URL du site

---

**Bonne chance avec votre site M&C ! 🎊**
