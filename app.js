const textArea = document.querySelector('#textoingreso');  // Selección de los elementos usando querySelector
const resultArea = document.querySelector('#resultado');  // entradas y salidas linea 1 y2


const encryptionMap = {// Encriptacion y desencriptacion
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
};

const decryptionMap = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
};

const encryptText = (text) => {// lineas para encriptar y desencripta 21 a 27
  return text.replace(/[aeiou]/g, (match) => encryptionMap[match]);
};

const decryptText = (text) => {
  return text.replace(/ai|enter|imes|ober|ufat/g, (match) => decryptionMap[match]);
};

textArea.addEventListener('input', (event) => { // lineas para entrada con min y espacio y caracteres no permitidos
  const invalidChars = /[^a-z\s]/g; 
  if (invalidChars.test(event.target.value)) {
    alert("Recuerda solo esta permitido usar minisculas y espacio.");
    event.target.value = event.target.value.replace(invalidChars, '');
  }
});

const copiarContenido = () => {// Función para copiar,pegar y borrar lineas 37 a 51
  navigator.clipboard.writeText(resultArea.value)
    .then(() => alert('Tu texto fue copiado'))
    .catch(err => console.error('No pude compiar tu texto T_T: ', err));
};

const pegarContenido = () => {
  navigator.clipboard.readText()
    .then(texto => textArea.value = texto)
    .catch(err => console.error('Error al leer el portapapeles: ', err));
};

const borrar = (element) => {
  element.value = "";
};

document.querySelector('.BotonCopiar[onclick*="pegarContenido"]').addEventListener('click', pegarContenido); //eventos 
document.querySelector('.BotonCopiar[onclick*="borrar"]').addEventListener('click', () => borrar(textArea));
document.querySelector('.botones[onclick*="accionEncriptar"]').addEventListener('click', () => {
  const textoEncriptado = encryptText(textArea.value);
  resultArea.value = textoEncriptado;
});
document.querySelector('.botones[onclick*="accionDesencriptar"]').addEventListener('click', () => {
  const textoDesencriptado = decryptText(textArea.value);
  resultArea.value = textoDesencriptado;
});
document.querySelector('.BotonCopiar[onclick*="copiarContenido"]').addEventListener('click', copiarContenido);
