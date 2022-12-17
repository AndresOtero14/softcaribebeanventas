class productodto{


    constructor(sku,dsproducto){
        this.sku = sku;
        this.dsproducto = dsproducto;
    }

    setSku(sku){
        this.sku =sku;
    }
    getSku(){
        return this.sku;
    }

    setDsproducto(dsproducto){
        this.dsproducto =dsproducto;
    }

    getDsproducto(){
        return this.dsproducto;
    }

}