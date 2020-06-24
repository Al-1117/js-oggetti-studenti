
// CONSEGNA
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.





// - Creo un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var studente = {
  'nome': 'Andrea',
  'cognome': 'Rossi',
  'eta': 20,
}

console.log(studente);

// Stampo a schermo attraverso il FOR IN tutte le proprietà dell'oggetto che riguardano lo studente.

for(var key in studente){

  // Proprietà dello studente stampate nella console
  console.log('proprieta dello studente ' + studente[key]);

}


// - Creare un array che conterrà oggetti di studenti.

var arrayOggettiStudenti = [
  // Oggetto - Studente 1
  {
    'nome': 'Luca',
    'cognome': 'Verdi',
    'eta': 19,
  },
  // Oggetto - Studente 2
  {
    'nome': 'Luca',
    'cognome': 'Rossi',
    'eta': 20,
  },
  // Oggetto - Studente 3
  {
    'nome': 'Marco',
    'cognome': 'Bianchi',
    'eta': 21,
  },
  // Oggetto - Studente 4
  {
    'nome': 'Simone',
    'cognome': 'Neri',
    'eta': 22,
  },
  // Oggetto - Studente 5
  {
    'nome': 'Giacomo',
    'cognome': 'Gialli',
    'eta': 18,

  },


];

console.log(arrayOggettiStudenti);

// Inizializzo un ciclo FOR nell'array degli oggetti che contengono gli studenti

for (var i = 0; i < arrayOggettiStudenti.length; i++) {
  var listaStudenti = arrayOggettiStudenti[i];

  // All'interno del ciclo, faccio un ciclo FOR IN per poter scorrerre singolarmente le proprieta di ogni studente
  // all'interno dell'array per poter trovare nome e cognome
  for(chiave in listaStudenti){

    var nomeSingoloStudente = listaStudenti.nome;
    var cognomeSingoloStudente = listaStudenti.cognome;

  }

  // Stampo nella console SOLO nome e cognome di ogni singolo studente 
  console.log('Nome e cognome studente singolo: ' + nomeSingoloStudente + ' ' + cognomeSingoloStudente);


}



// - Dare la possibilità all’utente attraverso 3 prompt di

// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
