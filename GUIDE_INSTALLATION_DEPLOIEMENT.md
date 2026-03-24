# Guide d’installation & mise en ligne — Decriiipt Copilot

Ce guide explique :
1. comment lancer le prototype en local,
2. comment le mettre en ligne rapidement,
3. comment préparer une version “agent complet” (front + API + base de connaissance).

---

## 1) Installation locale (prototype actuel)

## Prérequis
- Un navigateur web (Chrome, Edge, Firefox, Safari).
- (Optionnel) Python 3 pour servir les fichiers statiques proprement.

## Étapes
Depuis la racine du projet :

```bash
cd /workspace/Agent-test
```

### Option A — ouverture directe
Ouvrir `front/index.html` dans le navigateur.

### Option B — serveur local (recommandé)
```bash
python3 -m http.server 8080
```
Puis ouvrir :
- http://localhost:8080/front/

Pourquoi c’est recommandé :
- comportement plus proche d’un hébergement réel,
- évite certaines restrictions de sécurité liées au protocole `file://`.

---

## 2) Mise en ligne rapide (front statique)

Le prototype actuel est un front statique (`HTML/CSS/JS`), donc il peut être hébergé sur des plateformes statiques.

## Option 1 — Netlify
1. Créer un site Netlify.
2. Connecter le repo Git.
3. Paramétrer :
   - **Base directory**: vide
   - **Build command**: vide
   - **Publish directory**: `front`
4. Déployer.

## Option 2 — Vercel
1. Importer le repo dans Vercel.
2. Paramétrer :
   - **Framework preset**: Other
   - **Build command**: vide
   - **Output directory**: `front`
3. Déployer.

## Option 3 — Cloudflare Pages
1. Connecter le repo.
2. Paramétrer :
   - Build command : vide
   - Build output directory : `front`
3. Déployer.

---

## 3) Mise en ligne “agent complet” (front + IA + mémoire)

Le prototype actuel simule les réponses en local. Pour un vrai agent en production, prévoir :

1. **Front web** (existant, à conserver et enrichir).
2. **API backend** (orchestration des prompts, logique métier).
3. **Stockage** (utilisateurs, historique, feedback).
4. **Base vectorielle** (recherche sémantique / RAG).
5. **Connecteurs de sources** (veille, contenus Decriiipt).

## Architecture de déploiement recommandée (v1)
- Front statique : Netlify/Vercel/Cloudflare Pages.
- API : Render / Fly.io / Railway / container sur cloud.
- DB relationnelle : PostgreSQL managée.
- Vector store : pgvector, Pinecone, Weaviate ou Qdrant.
- Monitoring : logs centralisés + alerting (Sentry / Grafana / provider logs).

---

## 4) Checklist avant production

## Sécurité
- HTTPS activé partout.
- Gestion des secrets (jamais dans le code source).
- Contrôle d’accès par rôles (interne / éditeur / admin / client).
- Journalisation sans données sensibles en clair.

## Qualité
- Affichage des sources et du niveau de confiance.
- Workflow de validation humaine avant publication externe.
- Tests de non-régression sur prompts critiques.

## Conformité
- Politique de rétention des conversations.
- Information claire des utilisateurs sur l’usage des données.
- Procédure de suppression des données à la demande.

---

## 5) Exemple de plan de go-live en 3 étapes

### Étape 1 — Pilot interne (1 à 2 semaines)
- Héberger le front statique.
- Activer accès équipe restreinte.
- Collecter feedback UX et qualité de réponse.

### Étape 2 — Beta contrôlée (2 à 4 semaines)
- Brancher l’API réelle + base de connaissance.
- Ajouter analytics d’usage et suivi des erreurs.
- Mettre en place garde-fous éditoriaux.

### Étape 3 — Ouverture progressive
- Ajouter authentification client.
- Ouvrir par cohortes.
- Suivre KPI : adoption, temps gagné, taux de correction humaine.

---

## 6) Commandes utiles

Lancer serveur local :
```bash
python3 -m http.server 8080
```

Vérifier la syntaxe JS :
```bash
node --check front/app.js
```

Vérifier l’état git :
```bash
git status --short --branch
```

---

## 7) Recommandation immédiate

Pour toi, le plus simple est :
1. publier tout de suite le front sur Netlify/Vercel,
2. valider le parcours conversationnel avec l’équipe,
3. ensuite brancher un backend IA réel (API + RAG + gouvernance).

Si tu veux, je peux ensuite te préparer un **plan technique détaillé backend** (stack, endpoints, schéma DB, sécurité, coût mensuel estimé).

---

## 8) Dépannage Netlify (erreur 404 / page vide)

Si tu vois une page **"Page not found"** sur l’URL du site, c’est généralement un problème de dossier publié.

### Vérifications rapides
1. Dans Netlify > **Site configuration > Build & deploy**:
   - **Publish directory** doit être `front`
   - **Build command** peut rester vide
2. Le fichier `netlify.toml` du repo doit contenir:
   - `publish = "front"`
3. Relancer un **Deploy** après modification des réglages.

### Test immédiat
- Si le deploy existe mais que la racine est vide, teste:
  - `https://<ton-site>.netlify.app/front/`

Si `/front/` fonctionne mais pas la racine `/`, c’est bien une mauvaise configuration de *publish directory* côté Netlify.
