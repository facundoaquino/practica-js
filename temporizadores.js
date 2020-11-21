

 
  

const contador = setInterval(() => {
     console.log(new Date().toLocaleTimeString());
 }, 1000,'que onda perriquete');
 
//guardar en una variable el temporizador  poara despues podes ejecutar el clearinterval o clearTimeout
 const time = setTimeout(()=>{
    clearInterval(contador)
    console.log(contador);
},5000 )