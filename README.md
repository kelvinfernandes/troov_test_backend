# Node-Api
### Express & Mongo

`npm install`
<br/> `npm start`
<br/><br/> 
DB: "mongodb+srv://kelvin:Kmonteiro98@cluster0.yspv3.mongodb.net/troov_test"
<br><br>
-pour avoir accès au côté backend de l'application vous devez télécharger troov_test_backend.
sur  troov_test_backend vous pouvez ajouter, modifier, afficher les objets.
vous pouvez vous inscrire et aussi vous connecter.
Le mot de passe est sécurisé avec bcrypt.
troov_test_backend présente une api, controleur, modele MVC, des routes, la connexion à mongoose.
Pour lancer troov_test_backend vous devez lancer "npm start". Le serveur écoute sur le port 5500 en localhost.
Ensuite vous pouvez faire appel aux routes.

localhost/5500/posts : pour afficher les objets ou les utilisateurs
localhost/5500/posts/login : pour se connecter
localhost/5500/register : pour s'inscrire
localhost/5500/posts/:id :  avec la méthode post pour modifier un objet selon son id passé en paramètre
localhost/5500/posts/:id :avec la méthode post pour supprimer un objet selon son id passé en paramètre


