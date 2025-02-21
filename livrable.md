Équipe

Cédric Popille
Arnaud Madou

Questions et Réponses
Configuration Générale

Cible : Peu importe
Type de produit : Peu importe (frais/sec)
Représentation d'un article : Nom et quantité
Stockage : Un seul endroit
Disponibilité : Pas de statut nécessaire
Quantité : Pas de contrainte sur l'ajout
Identifiant : Pas nécessaire
Format du rapport : Sortie simple (nom + quantité)
Éléments à inclure : Tous, avec alertes si seuil critique ou stock nul
Limites : Pas de maximum, seuil minimum à définir
Seuil minimum : À définir par l'équipe
Automatisation : Toutes les tâches

Users Stories

En tant qu'utilisateur, je souhaite ajouter un article au stock :
❌ Si ce n'est pas un article, j'obtiens une erreur
❌ Si la quantité à ajouter n'est pas défini, erreur
❌ Si la quantité à ajouter n'est pas un nombre, j'obtiens une erreur
❌ Si la quantité à ajouter est de 0, j'obtiens un erreur
❌ Si la quantité à ajouter est négative, j'obtiens une erreur
✅ Si la quantité à ajouter est superieur à 0, la quantité est ajoutée au stock
❌ Si l'ajout à l'historique échoue, j'obtiens une erreur

Consulter la quantité d'un article
En tant qu'utilisateur, je souhaite consulter la quantité d'un article :
❌ Si l'élément demandé n'est pas un article, j'obtiens une erreur
✅ Si l'élément demandé est un article, j'obtiens la quantité de l'article

Retirer des articles du stock
En tant qu'utilisateur, je souhaite retirer un article au stock :
❌ Si l'élément demandé n'est pas un article, j'obtiens une erreur
❌ Si la quantité à retirer est supérieur au stock, j'obtiens une erreur
❌ Si la quantité à retirer est négative, j'obtiens une erreur
✅ Si la quantité à retirer est inférieur au stock, je retire la quantité au stock
❌ Si la quantité à retirer est de 0, j'obtiens une erreur
❌ Si la quantité à retirer n'est pas un entier, j'obtiens une erreur

Obtenir un rapport des stocks restants
En tant qu'utilisateur, je souhaite obtenir un rapport sur les stocks restants :
❌ Si aucune liste d'article n'est fournie, j'obtiens une erreur
❌ Si la liste d'article est vide ou négative, j'obtiens une erreur
✅ Si la liste n'est pas vide, afficher le nom et la quantité de chaque article
⚠️ Si la quantité d'un article est inférieur ou égale au seuil, afficher une alerte
Ajout d'historique

En tant qu'utilisateur, je souhaite pouvoir avoir un historique des mouvements des articles :
❌ Si le nom ou la quantité d'un article est manquant, j'obtiens un erreur
Ca depend de comment enregistrer l'info
❌ Si l'application n'a pas de droit en écriture sur le systeme, j'obtiens uneerreur
✅ Si l'application à les droit et que le nom, la quantité du produit et ladate sont accessible, un mouvement (date, article.nom, qtAjouté/qtRetiré,nouveauStock) est ajouté à l'historique

Recevoir une alerte
En tant qu'utilisateur, je souhaite recevoir une alerte quand un article atteint un certain seuil après un mouvement :
❌ Si le seuil n'est pas défini, j'obtiens une erreur
❌ Si l'article n'est pas défini, j'obtiens une erreur
❌ Si le seuil est négatif, j'obtiens une erreur
✅ Si le seuil de l'article n'est pas atteint, rien ne se passe
⚠️ Si le seuil de l'article est atteint, j'affiche un warning