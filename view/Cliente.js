var localtorcliente = new LocatorCliente();

async function Save(){

    let nmcliente = document.getElementById("nmcliente").value;
    let documento = document.getElementById("documento").value;
    let dsnombres = document.getElementById("dsnombres").value;
    let dsapellido= document.getElementById("dsapellido").value;
    let dsdireccion = document.getElementById("dsdireccion").value;
    let C = new Clientedto(nmcliente,documento,dsnombres,dsapellido,dsdireccion);
    console.log(C);
    let resul = await localtorcliente.Save(C);

}


async function selectall(){
    let result = await localtorcliente.SelectAll();
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
        let tdnmcliente=document.createElement('td');
        let tddocumento=document.createElement('td');
        let tddsnombres = document.createElement("td");
        let tddsapellido = document.createElement("td");
        let tddsdirecccion = document.createElement("td");

        tdnmcliente.innerText=lisDatos[i].nmcliente;
        tddocumento.innerText=lisDatos[i].documento;
        tddsnombres.innerText=lisDatos[i].dsnombres;
        tddsapellido.innerText=lisDatos[i].dsapellido;
        tddsdirecccion.innerText=lisDatos[i].dsdirecccion;

        tr.appendChild(tdnmcliente);
        tr.appendChild(tddocumento);
        tr.appendChild(tddsnombres);
        tr.appendChild(tddsapellido);
        tr.appendChild(tddsdirecccion);
        body.appendChild(tr);
    }

}