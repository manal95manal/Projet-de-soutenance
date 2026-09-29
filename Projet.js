const prompt = require("prompt-sync")();
const candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: ["E365290", "NY349930", "U419784", "QZ005408", "X488153", "KG861778", "IY741022"]
    },
    {
        cin: "BE234567",
        nom: "El Amrani",
        prenom: "Youssef",
        partiPolitique: "RNI",
        age: 45,
        electeurs: ["XH883710", "U495994", "RV317232"]
    },
    {
        cin: "BK345678",
        nom: "Benali",
        prenom: "Fatima",
        partiPolitique: "PAM",
        age: 38,
        electeurs: ["ZW133813", "YA342187", "XI626458", "DF768148", "TH049593", "I936671", "ME704989", "GQ643800"]
    },
    {
        cin: "C456789",
        nom: "Idrissi",
        prenom: "Karim",
        partiPolitique: "Istiqlal",
        age: 52,
        electeurs: ["D785742", "MO246781", "L085329", "P550466", "Q947624", "O256191", "U529974", "X715904"]
    },
    {
        cin: "D567890",
        nom: "Tazi",
        prenom: "Salma",
        partiPolitique: "USFP",
        age: 36,
        electeurs: ["E993924", "X273121", "AW867089"]
    },
    {
        cin: "EE678901",
        nom: "Chraibi",
        prenom: "Hamza",
        partiPolitique: "PJD",
        age: 47,
        electeurs: ["R124473", "YQ959667", "NL210027", "L565441", "TO360811", "DM597905", "WG602869", "GW759078"]
    },
    {
        cin: "F789012",
        nom: "Alaoui",
        prenom: "Imane",
        partiPolitique: "MP",
        age: 41,
        electeurs: ["O886138", "G323013", "W340294", "M622076", "K364313"]
    },
    {
        cin: "G890123",
        nom: "Bennani",
        prenom: "Mehdi",
        partiPolitique: "UC",
        age: 55,
        electeurs: ["Z124709", "SD580781", "WJ054829", "EU565178", "Z115390", "CT600669"]
    },
    {
        cin: "H901234",
        nom: "Ouazzani",
        prenom: "Nadia",
        partiPolitique: "PPS",
        age: 43,
        electeurs: ["L723668", "G534949", "X898726", "T639030", "NI882623", "J668951"]
    },
    {
        cin: "IA012345",
        nom: "Berrada",
        prenom: "Omar",
        partiPolitique: "Indépendant",
        age: 39,
        electeurs: ["ME317856", "W333584", "Z729174"]
    },
    {
        cin: "JB123450",
        nom: "Lahlou",
        prenom: "Khadija",
        partiPolitique: "RNI",
        age: 50,
        electeurs: ["OM013327", "V173121", "JB887072", "GK110434", "F316885", "MS879615", "DO378817", "UL299951"]
    },
    {
        cin: "JC234501",
        nom: "Sefrioui",
        prenom: "Anas",
        partiPolitique: "PAM",
        age: 34,
        electeurs: ["T610676", "IS917567", "U621301", "WZ600364", "DS974129", "EE578879", "HZ142752"]
    },
    {
        cin: "K345012",
        nom: "Fassi",
        prenom: "Laila",
        partiPolitique: "Istiqlal",
        age: 46,
        electeurs: ["Y208708", "G533255", "O209052", "D366412", "N137922", "SF478091", "B123540"]
    },
    {
        cin: "L450123",
        nom: "Kettani",
        prenom: "Rachid",
        partiPolitique: "USFP",
        age: 58,
        electeurs: ["N631272", "IP769363", "GQ626093", "P724948", "LE814187", "EC446917"]
    },
    {
        cin: "M501234",
        nom: "Zniber",
        prenom: "Hajar",
        partiPolitique: "Indépendant",
        age: 37,
        electeurs: ["HR058807", "UR548860", "D446077", "I774963", "QQ662679", "RM056773"]
    }
];

function ajouterCandidat() {
    candidat = {}
    candidat.cin = prompt("Entrer Cin : ")
    candidat.nom = prompt("Entrer Nom : ")
    candidat.prenom = prompt("Entrer Prenom : ")
    candidat.partiPolitique = prompt("Entrer Partie politique : ")
    candidat.age = Number(prompt("Entrer Age : "))
    candidat.electeurs = []
    candidats.push(candidat)
    return candidats
}

function ajouterPlusieursCandidats() {
    let nombre = prompt("Combien de candidat voulez-vous ajouter ?");
    for (let i = 1; i <= nombre; i++) {
        console.log("Entrer les informations du candidat numéro " + i)
        ajouterCandidat()
    }
}
function afficherListeCandidats() {
    for (let i = 0; i < candidats.length; i++) {
        console.log("Le cin : " + candidats[i].cin + "Le nom : " + candidats[i].nom + "Le prenom : " + candidats[i].prenom + "L'age : " + candidats[i].age +  "Parti politique : " + candidats[i].partiPolitique + "L'electeurs : " + candidats[i].electeurs.length)
    }
}
function supprimerCandidat() {
    cin = prompt("Entrer CIN du candidat");
    for (let i = 0; i < candidats.length; i++) {
        if (cin == candidats[i].cin) {
            candidats.splice(i, 1);
        } else {
            console.log("Cin n'existe pas");
        }
    }
}

function menu() {
    console.log("1. Ajouter un candidat");
    console.log("2. Ajouter plusieurs candidats");
    console.log("3. Afficher la liste des candidats");
    console.log("4. Voter pour un candidat");
    console.log("5. Modifier les informations d'un candidat");
    console.log("6. Supprimer un candidat ");
    console.log("7. Rechercher des candidats");
    console.log("8. Statistiques de l'élection");
    console.log("")
    let action = prompt("Quelle action voulez-vous faire ?");
    switch(action) {
        case "1" : 
           ajouterCandidat()
           menu()
           break
        case "2" :
            ajouterPlusieursCandidats()
            menu()
            break
        case "3" :
            afficherListeCandidats()
            menu()
            break
            menu()
        case "4" :
            break
            menu()
        case "5" :
            break
            menu()
        case "6" :
            break
            menu()
        case "7" :
            break
            menu()
        case "8" :
            break
            menu()
        case "0" : 
            break
    }

}

menu()