// toma un array y devuelve el mayor

const showHigher = (arr) => {
    if (arr.length === 0) return console.error('el arreglo esta vacio')
    return arr.reduce((acc, el) => (el > acc ? el : acc));
};


 