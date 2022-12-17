var locatorproduct = new Locatorproducto();

async function Save(){

    let sku =document.getElementById('sku').value;
    let dsproducto =document.getElementById('dsproducto').value;
    let p= new productodto(sku,dsproducto);
    console.log(p)
    let result = await locatorproduct.Save(p);

}
async function Delete(){
    console.log("ejecucion");
    let sku=document.getElementById('sku').value;
    console.log("nada"+sku);
   let result=await locatorproduct.Deleter();
   
}




async function selectall(){
    let result = await locatorproduct.SelectAll();
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
        let tdsku=document.createElement('td');
        let tddsproducto=document.createElement('td');

        tdsku.innerText=lisDatos[i].sku;
        tddsproducto.innerText=lisDatos[i].dsproducto;

        tr.appendChild(tdsku);
        tr.appendChild(tddsproducto);
        body.appendChild(tr);
    }
}




