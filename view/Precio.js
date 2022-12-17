var locatorprecio = new LocatorPrecio();

async function Save(){

    let nmprecio = document.getElementById("nmprecio").value;
    let fk_sku = document.getElementById("fk_sku").value;
    let precio = document.getElementById("precio").value;
    let fedesde= document.getElementById("fedesde").value;
    let fehasta = document.getElementById("fehasta").value;
    let P = new Preciodto(nmprecio,fk_sku,precio,fedesde,fehasta);
    console.log(P);
    let resul = await locatorprecio.Save(P);

}

async function selectall(){
    let result = await locatorprecio.SelectAll();
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
        let tdnmprecio=document.createElement('td');
        let tdfk_sku=document.createElement('td');
        let tdprecio = document.createElement("td");
        let tdfedesde= document.createElement("td");
        let tdfehasta = document.createElement("td");

        tdnmprecio.innerText=lisDatos[i].nmprecio;
        tdfk_sku.innerText=lisDatos[i].fk_sku;
        tdprecio.innerText=lisDatos[i].precio;
        tdfedesde.innerText=lisDatos[i].fedesde;
        tdfehasta.innerText=lisDatos[i].fehasta;

        tr.appendChild(tdnmprecio);
        tr.appendChild(tdfk_sku);
        tr.appendChild(tdprecio);
        tr.appendChild(tdfedesde);
        tr.appendChild(tdfehasta);
        body.appendChild(tr);
    }
}