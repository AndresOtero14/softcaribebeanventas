class Preciodto{

    constructor( nmprecio, fk_sku, precio, fedesde, fehasta){

        this.nmprecio=nmprecio;
        this.fk_sku =fk_sku;
        this.precio=precio;
        this.fedesde =fedesde;
        this.fehasta=fehasta;

    }



    setNmprecio(nmprecio){
        this.nmprecio =nmprecio;
    }

    getNmprecio(){
        return nmprecio;
    }

    setFk_sku(fk_sku){
        this.fk_sku=fk_sku;
    }

    getFk_sku(){
      return  this.fk_sku;
    }

    setPrecio(precio){
        this.precio =precio;
    }

    getPrecio(){
       return this.precio;
    }


    setFedesde(fedesde){
        this.fedesde =fedesde;
    }

    getFedesde(){
       return this.fedesde;
    }

    setFehasta(fehasta){
        this.fehasta =fehasta;
    }

    getFehasta(){
        return this.fehasta;
    }


}