class RegistroService {
  constructor() {
    this.registros = [];
    this.idRegistro = 0;
  }   
 
  post(registro) {
    this.idRegistro++;
    registro.idRegistro = this.idRegistro;
    this.registros.push(registro);
  }
 
  getAll() {
    return this.registros;
  }
 
  getById(idRegistro) {
    return this.registros.find((registro) => registro.idRegistro == idRegistro);
  }

  getByQuantity(quantity) {

    let registros = [];
    for(let i = 0; i < quantity; i++)
      {
        registros.push(this.registros[i]);
      }
      return registros;
    
    };
  
  getByOffice(office) {
    return this.registros.filter(index => index.cargo==office);
  }

  put(idRegistro, registro) {
    this.registros.forEach(function (e) {
      if (idRegistro && idRegistro == e.idRegistro) {
        for (var i in registro) {
          e[i] = registro[i];
        }
      }
    });
  }
 
  delete(idRegistro) {
    this.registros = this.registros.filter(function (el) {
      return el.idRegistro != idRegistro;
    });
  }
}
 
module.exports = RegistroService;