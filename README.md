# CarriereMAP - Routeur Intelligent d'OPCO

Plateforme professionnelle de routage vers les OPCO et de gestion de leads de formation professionnelle.

## 🛠 Tech Stack

- **Frontend** : React + Vite + TailwindCSS + Shadcn UI
- **Backend (Router Logic)** : React (Client-side mapping)
- **Containerization** : Docker + Nginx
- **CI/CD** : GitHub Actions

## 🐳 Docker & Makefile

Pour simplifier le développement et le déploiement, vous pouvez utiliser le `Makefile` (nécessite `make` installé).

| Commande | Description |
|----------|-------------|
| `make build` | Construit l'image Docker de production |
| `make run` | Lance l'application conteneurisée sur le port 80 |
| `make stop` | Arrête les conteneurs Docker |
| `make logs` | Affiche les logs en temps réel |
| `make dev` | Lance l'environnement de développement local (Vite) |

## 🚀 CI/CD

Le workflow GitHub Actions (`.github/workflows/ci.yml`) s'exécute sur chaque push ou pull request vers la branche principale. Il vérifie :
1. L'installation des dépendances.
2. Le build de l'application.
3. La validité du Dockerfile.

## 📁 Structure du Projet

- `/src/components` : Composants UI (Hero, ServicesGrid, LeadRoutingForm...)
- `/src/pages` : Vues principales de l'application
- `/public` : Assets statiques (images, robots.txt...)
- `Dockerfile` & `nginx.conf` : Configuration de conteneurisation
- `Makefile` : Raccourcis de commandes automation
