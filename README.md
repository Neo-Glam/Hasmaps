HashMap (JavaScript Implementation)

Cette classe HashMap est une implémentation simple d'une table de hachage en JavaScript, avec redimensionnement automatique lorsque le facteur de charge dépasse un certain seuil.

📦 Fonctionnalités
Insertion (set)

Récupération (get)

Suppression (remove)

Vérification d'existence (has)

Liste des clés (keys)

Liste des valeurs (values)

Liste des entrées (entries)

Redimensionnement automatique de la table

Fonction de hachage personnalisée

🚀 Utilisation
const map = new HashMap();

map.set("name", "Alice");
map.set("age", 30);

console.log(map.get("name")); // Alice
console.log(map.has("age"));  // true
map.remove("age");
console.log(map.has("age"));  // false

console.log(map.keys());      // ["name"]
console.log(map.values());    // ["Alice"]

🧠 Détails techniques
Table de hachage : tableau de buckets, où chaque bucket est un tableau de paires [clé, valeur] (gestion des collisions par chaînage).

Fonction de hachage : basée sur un nombre premier (31), applique une transformation sur les caractères de la clé pour déterminer un index.

Facteur de charge : 0.75. Lorsque la taille dépasse taille * 0.75, la table est doublée et toutes les entrées sont réinsérées.

Redimensionnement : lors du redimensionnement, la taille de la table double et chaque élément est re-haché dans la nouvelle table.