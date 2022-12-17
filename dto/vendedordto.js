class Vendedordto{

    constructor(nmvendedor, documento, dsnombres, dsapellido, dsdireccion){
        this.nmvendedor = nmvendedor;
        this.documento = documento;
        this.dsnombres = dsnombres;
        this.dsapellido = dsapellido;
        this.dsdireccion = dsdireccion;
    
    }
    
    
    // metodos set and  get 
    
    setNmcliente(nmvendedor){
    this.nmvendedor = nmvendedor;
    }
    
    getNmcliente(){
        return this.nmvendedor;
    }
    
    setDocumento(documento){
        this.documento = documento;
    }
    
    getDocumento(){
        return this.documento;
    }
    
    
    setDsnombres(dsnombres){
    this.dsnombres = dsnombres;
    }
    
    getDsnombres(){
        return this.dsnombres;
    }
    
    
    setDsapellido(dsapellido){
    this.dsapellido = dsapellido;
    }
    getDsapellido(){
        return this.dsapellido;
    }
    
    setDsdireccion(dsdireccion){
        this.dsdireccion = dsdireccion;
    }
    getDsdireccion(){
        return this.dsdireccion;
    }
    



}