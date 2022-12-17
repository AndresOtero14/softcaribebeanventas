class LocatorCliente {
  constructor() {}

  async Save(cli) {
    let resul = null;

    try {
      let response = await fetch("http://localhost:8080/api/cliente/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(cli),
      });

      resul = await response.json();
    } catch (error) {
      console.error(error);
    }
    return resul;
  }

  

  async SelectAll() {
    let result = null;
    try {
        let response = await fetch('http://localhost:8080/api/cliente/SelectAll', {
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



}