var locatorvendedor = new LocatorVendedor();

async function Save(){

    let nmvendedor = document.getElementById("nmvendedor").value;
    let documento = document.getElementById("documento").value;
    let dsnombres = document.getElementById("dsnombres").value;
    let dsapellido= document.getElementById("dsapellido").value;
    let dsdireccion = document.getElementById("dsdireccion").value;
    let V = new Vendedordto(nmvendedor,documento,dsnombres,dsapellido,dsdireccion);
    console.log(V);
    let resul = await locatorvendedor.Save(V);

}

async function selectall(){
    let result = await locatorvendedor.SelectAll() ;
    let data = result.data
    console.log(data);
    tabla(data);
}

function tabla(lisDatos){
    let body= document.getElementById("listaBody");
    body.innerHTML=null;
    let size=lisDatos.length;
    for(let i=0; i<size;i++){
        let tr=document.createElement('tr');
        let tdnmvendedor=document.createElement('td');
        let tddocumento=document.createElement('td');
        let tddsnombres = document.createElement("td");
        let tddsapellido = document.createElement("td");
        let tddsdireccion = document.createElement("td");

        tdnmvendedor.innerText=lisDatos[i].nmvendedor;
        tddocumento.innerText=lisDatos[i].documento;
        tddsnombres.innerText=lisDatos[i].dsnombres;
        tddsapellido.innerText=lisDatos[i].dsapellido;
        tddsdireccion.innerText=lisDatos[i].dsdireccion;

        tr.appendChild(tdnmvendedor);
        tr.appendChild(tddocumento);
        tr.appendChild(tddsnombres);
        tr.appendChild(tddsapellido);
        tr.appendChild(tddsdireccion);
        body.appendChild(tr);
    }

}