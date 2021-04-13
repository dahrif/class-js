class personnes {
    constructor (nom , prenom , age){
        this.nom = nom
        this.prenom = prenom
        this.age = age

    }

    getFullName() {
        return 'hello' + ' ' + this.nom 
    }
}

let personne = new personnes ('dahri' , 'fatima' , '26')


console.log(personne.getFullName())