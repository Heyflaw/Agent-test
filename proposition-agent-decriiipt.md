# Proposition d’agent IA « Decriiipt » pour intuiti.net

## 1) Vision
Créer un agent IA incarnant l’esprit **Decriiipt** : veille utile, pédagogie claire, ton curieux et exigeant, orienté action marketing.

L’agent sert à :
- transformer la veille en décisions concrètes,
- diffuser la connaissance dans l’équipe et auprès des clients,
- industrialiser la production de contenus (newsletter, posts, briefs, notes stratégiques).

---

## 2) Personnalité de l’agent

### Nom de travail
**Decriiipt Copilot** (modifiable).

### Traits de personnalité
- **Curieux et pragmatique** : explore les signaux faibles mais revient toujours au "so what" business.
- **Pédagogue** : explique simplement, sans jargon inutile.
- **Fiable** : distingue faits, hypothèses et opinions.
- **Constructif** : propose systématiquement des pistes d’action.

### Style éditorial
- Français clair, professionnel, accessible.
- Réponses structurées : *Contexte → Analyse → Recommandations → Prochaines étapes*.
- Niveau de détail adaptable (résumé exécutif ou version experte).

---

## 3) Compétences cibles (v1)

1. **Veille marketing & IA**
   - repérer nouveautés, tendances et changements d’outils,
   - catégoriser par impact (faible / moyen / fort).

2. **Synthèse & vulgarisation**
   - résumer articles, études, annonces,
   - produire des synthèses orientées agence/client.

3. **Production éditoriale**
   - proposer angles newsletter,
   - rédiger brouillons : édito, sections, CTA, posts LinkedIn.

4. **Activation business**
   - transformer la veille en recommandations opérationnelles,
   - suggérer des tests marketing à faible coût.

5. **Mémoire de connaissance**
   - capitaliser sur les contenus Decriiipt existants,
   - répondre de façon cohérente avec l’historique éditorial.

---

## 4) Fonctions concrètes à implémenter

### Fonction A — Radar hebdomadaire
- Entrée : sources sélectionnées (blogs, médias, newsletters, outils).
- Sortie : top 5–10 signaux classés par impact + fiabilité.

### Fonction B — Générateur de newsletter
- Entrée : thèmes de la semaine + public cible.
- Sortie : plan éditorial + version brouillon + variantes de titres.

### Fonction C — Conseiller stratégique
- Entrée : contexte client (secteur, maturité, objectifs).
- Sortie : recommandations actionnables (quick wins, risques, KPI).

### Fonction D — Q&A interne
- Entrée : questions de l’équipe.
- Sortie : réponses sourcées + niveau de confiance.

### Fonction E — Réutilisation multi-format
- Transformer un même insight en :
  - paragraphe newsletter,
  - post social,
  - script court vidéo,
  - slide de présentation.

---

## 5) Garde-fous qualité
- Toujours citer les sources pour les faits récents.
- Indiquer le niveau de confiance de la réponse.
- Refuser d’inventer des données non vérifiables.
- Ajouter une section **"Ce qu’on ne sait pas encore"** quand pertinent.

---

## 6) Feuille de route recommandée

### Phase 1 (2 à 3 semaines) — MVP interne
- Définir la charte de personnalité et le ton Decriiipt.
- Créer une base de connaissances initiale (archives newsletter + contenus clés).
- Prototyper l’agent en mode conversation (usage équipe).

### Phase 2 (3 à 5 semaines) — Industrialisation éditoriale
- Ajouter templates (newsletter, post, brief client).
- Mettre en place workflows de relecture/validation.
- Définir métriques : temps gagné, taux de réutilisation, qualité perçue.

### Phase 3 (4 à 8 semaines) — Interface de discussion externe
- Construire une interface web (chat) avec authentification.
- Ajouter historique des conversations et bibliothèque de réponses.
- Prévoir un mode *"assisté"* (validation humaine avant publication).

---

## 7) Accès via interface de discussion (étape 2)

### Option rapide (no-code / low-code)
- Avantage : lancement en quelques jours.
- Limite : personnalisation et gouvernance plus faibles.

### Option robuste (sur-mesure)
- Front : interface chat brandée intuiti.net.
- Back : orchestration des prompts, mémoire, connecteurs de sources.
- Avantage : contrôle sur l’expérience, la sécurité et l’évolution.

### Fonctions UX prioritaires
- Sélecteur de mode : *Veille / Rédaction / Conseil*.
- Bouton **"Rendre publiable"** pour convertir une réponse en version éditoriale.
- Bloc visible : sources, date de fraîcheur, niveau de confiance.

---

## 8) Exemples de prompts de départ

1. "Donne-moi les 5 signaux marketing IA de la semaine, classés par impact agence."
2. "Transforme ces 3 insights en intro + 3 rubriques de newsletter Decriiipt."
3. "Pour ce client B2B SaaS, quels tests rapides lancer en 30 jours ?"
4. "Résume cette info en version dirigeant (5 lignes) puis version opérationnelle (plan d’action)."

---

## 9) Prochaine étape concrète
Lancer un **atelier de cadrage de 90 minutes** avec l’équipe intuiti.net pour figer :
- la personnalité exacte,
- les sources prioritaires,
- les cas d’usage MVP,
- le niveau d’autonomie autorisé de l’agent.

Livrable de l’atelier : backlog priorisé + architecture cible + planning 8 semaines.
