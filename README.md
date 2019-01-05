# Angular blog

Vous allez créer une application simple de type blog. Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "don't love it". Chaque post aura la forme suivante :

    `post: { title: string, content: string,loveIts: number, created_at: Date }`

Quand un post a plus de "love it" que de "don't love it" (loveIts > 0), il sera coloré en vert, et inversement quand loveIts < 0, il sera coloré en rouge.

# Lancement du projet

## Installation des modules necessaires

Pour eviter les erreurs de dependance, il faudra lancer la commande suivante afin d'installer les modules necessaires:

    npm install

## Lancement du serveur

Pour lancer le serveur:

    ng serve