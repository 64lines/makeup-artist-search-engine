const URL = 'instagram.com';
const CITY = 'medellin';

export function generateQuery({ value }) {
  return {
    'agencies': `"agencia"|"agency" "modelaje"|"modelos" "${CITY}" inurl:${URL} -webcam"`,
    'runways': `"pasarelas"|"pasarela" "${CITY}" inurl:${URL} -webcam"`,
    'catalogs': `"catalogos"|"catalogo" "${CITY}" inurl:${URL} -webcam"`,
    'events': `"eventos"|"evento" "${CITY}" inurl:${URL} -webcam"`,
    'productions': `"producciones"|"produccion" "musicales"|"musical"|"videos"|"cine"|"television"  "${CITY}" inurl:${URL} -webcam"`,
    'academies': `"academia"|"academy"|"academias" "arte"|"modelaje"|"danza"|"baile"|"actuacion"|"ballet" "${CITY}" inurl:${URL} -webcam"`,
  }[value]
}

export function generateGoogleSearchURL({ query }) {
  return `https://www.google.com/search?q=${query}`
}

export function searchInGoogle({ query }) {
  window.open(generateGoogleSearchURL({ query }), '__blank');
  return true;
}