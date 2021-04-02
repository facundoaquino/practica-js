const fs = require('fs');
const axios = require('axios');
 
 


const getCountries = async ()=>{

const {data} = await axios.get('https://restcountries.eu/rest/v2/all')
  
 
const filtered = data.filter(countrie=> countrie.region=='Americas' || countrie.region== 'Europe')
const onlyNameCiti= filtered.map(data => ({countrie:data.name, capital:data.capital}))

fs.writeFileSync('./countries.json', JSON.stringify(onlyNameCiti,null,5))
console.log(onlyNameCiti);
}

getCountries()