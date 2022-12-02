function contarOvejas(ovejas) {
  let regularExpression = /n.*a/i;;
  let result = [];
  for (let i = 0; i < ovejas.length; i++) {
    if (ovejas[i].color == 'rojo' && ovejas[i].name.match(regularExpression)) {
      result.push(ovejas[i].name);
    }
  }
  return result;
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
];

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)