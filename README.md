# Festival Zigzag

Site web du _Festival d'architecture et des arts de l'espace_ organisé par La Maison de l'Architecture de Normandie.

## Mise à jour 2022

### Modules NPM

Todo : contrôler les modules, procédure : 
1. `npm audit`
2. `npm list [nom-du-module-critique]`
3. appliquer une solution (mise à jour ou module alternatif). Si aucune solution n'est possible, conserver une note recueil sur la situation sur ce document.

 - kamokamo contient des vulnaribiltés.
   Proposer une mise à jour du module, ou
   Remplacer par nuxt-content (attention au coût du changement)
 - Deux version de `marked` sont utilisés, à résoudre.
 - @nuxtjs/svg à mettre à jour (possède une dépendance `nth-check` qui n'est plus à jour)
   Dans la chaine de dépendance, il semble que ce soit `vue-svg-loader` qui ne soit plus maintenu.
   Contrôle `npm list nth-check`
   Solution utiliser un autre module (cf. autres projet viteJS)
