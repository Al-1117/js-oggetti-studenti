
// CONSEGNA
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// ESECUZIONE

$(document).ready(
  function(){


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

    // Chiedo all'utente le proprieta del nuovo Oggetto studente con 3 prompt
    var nome = prompt('Inserisci il nome');
    var cognome = prompt('Inserisci il cognome');
    var eta = parseInt(prompt('Inserisci eta'));

    // Creo il nuovo oggetto studente popolandolo con i dati che riceverò dall'utente
    var nuovoOggettoStudente = {
      'nome': '',
      'cognome': '',
      'eta': '',
    };

    // Modifico i dati dell'oggetto predefinito creato precedentemente
    nuovoOggettoStudente['nome'] = nome;
    nuovoOggettoStudente['cognome'] = cognome;
    nuovoOggettoStudente.eta = eta;

    console.log('nuovo studente:');
    console.log(nuovoOggettoStudente);

    // Aggiungo lo studente nuovo nell'array degli studenti già esistenti
    arrayOggettiStudenti.push(nuovoOggettoStudente);

    // Stampo la lista finale con il nuovo studente
    console.log('lista finale studenti:');
    console.log( arrayOggettiStudenti);


    // TEMPLATE handlebars

    var source = $('.student-template').html();
    var template = Handlebars.compile(source);


    // Stampo nella pagina i dati
    // del nuovo studente creati dinamicamente
    
    var context = { nome: nome,
      cognome: cognome,
      eta: eta
    };

    console.log(context);

    var html = template(context);
    console.log(html);

    $('.container').append(html);





  }
)
