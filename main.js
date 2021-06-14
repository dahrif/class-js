// class personnes {
//     constructor (nom , prenom , age){
//         this.nom = nom
//         this.prenom = prenom
//         this.age = age

//     }

//     getFullName() {
//         return 'hello' + ' ' + this.nom + " "+ this.prenom
//     }
// }

// let personne = new personnes ('dahri' , 'fatima' , '26')
// alert(personne.nom);

// console.log(personne.getFullName())


class vehicule {
    constructor (marque , model , année , nbporte , nbroue ){
        this.marque = marque
        this.model = model
        this.année = année
        this.nbporte = nbporte
        this.nbroue = nbroue
    }
}

class voiture extends vehicule {
    constructor (marque , model , année ){
        super (marque , model , année , 4 , 4)
    }
}

var voitures = new voiture ('AUDI' , 'A1' , '2020')
console.log(voitures.marque)