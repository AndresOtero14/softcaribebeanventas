class Locatorproducto{
    
    constructor(){

    }
async Save(x){
    let result = null;
    try {
        let response = await fetch('http://localhost:8080/api/producto/Save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(x)
          });
          
           result = await response.json();
         
    } catch (error) {
        console.error(error)
        
    }
    return result;
}

//  para traer todo
async SelectAll() {
    let result = null;
    try {
        let response = await fetch('http://localhost:8080/api/producto/SelectAll', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: null
        });
        result = await response.json();
    } catch (error) {
        console.log(error)
    }
    return result;
}


async Deleter(){
        let result = null;
            try {
                let response = await fetch('http://localhost:8080/api/producto/Delete', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: null
                });
                
                result = await response.json();
                
            } catch (error) {
                console.error(error);
            }
        return result;
     }
}
