const persona = function(nombre,apellido){
  this.nombre=nombre
  this.apellido=apellido
  this.saludar=function saludar() {
    console.log(`hola ${this.nombre}`)
  }

}

 
 

const persona1 = new persona('fernando','piero')
console.log(persona1)
 persona1.saludar()