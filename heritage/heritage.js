class vehicule {
nbporte;
nbroue;

    constructor ( nbporte , nbroue ){
    
        this.nbporte = nbporte
        this.nbroue = nbroue
    }
}

class voiture extends vehicule {
    marque;
    constructor (marque){
        super(4,4)
        this.marque = marque
       
    }
}



var voitures = new voiture ('AUDI')
console.log(voitures)
