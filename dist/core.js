(function(root){
const normalize=s=>String(s).normalize('NFC').trim().toLocaleLowerCase('es');
const searchKey=s=>normalize(s).replace(/[áéíóúü]/g,c=>({'á':'a','é':'e','í':'i','ó':'o','ú':'u','ü':'u'}[c]));
const validWord=s=>typeof s==='string'&&s.length<=50&&/^[a-záéíóúüñ]+(?:[ -][a-záéíóúüñ]+)*$/i.test(s);
const parseList=s=>[...new Set(s.split(/\r?\n/).map(normalize).filter(validWord))];
const spelling=(input,target)=>{let a=normalize(input),b=normalize(target);if(!a)return 'Escribí una palabra para comparar.';if(a===b)return '¡Coincide con el modelo!';if(searchKey(a)===searchKey(b))return 'Muy cerca. Revisá las tildes o la diéresis del modelo.';return 'Probá otra vez. Compará las letras con el modelo, sin apuro.'};
const filterWords=(words,q,part)=>words.filter(w=>searchKey(w).includes(searchKey(q))&&searchKey(w).includes(searchKey(part)));
const api={normalize,searchKey,validWord,parseList,spelling,filterWords};if(typeof module!=='undefined')module.exports=api;else root.HablaCore=api;
})(typeof window!=='undefined'?window:this);
