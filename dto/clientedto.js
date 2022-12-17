class Clientedto{

constructor(nmcliente, documento, dsnombres, dsapellido, dsdirecccion){
    this.nmcliente = nmcliente;
    this.documento = documento;
    this.dsnombres = dsnombres;
    this.dsapellido = dsapellido;
    this.dsdirecccion = dsdirecccion;

}


// metodos set and  get 

setNmcliente(nmcliente){
this.nmcliente = nmcliente;
}

getNmcliente(){
    return this.nmcliente;
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

setDsdireccion(dsdirecccion){
    this.dsdirecccion = dsdirecccion;
}
getDsdireccion(){
    return this.dsdirecccion;
}


}