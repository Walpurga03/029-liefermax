const jsondb = {
  produkte: [
    {
      name: 'Crispy Burger',
      beschreibung: 'American Style Burger',
      kategorie: 'Hauptgericht',
      preis: 6.99,
      url: 'burger',
      bild: '/image/products/burger.jpg',
      extras: [
        {
          text: 'doppelt',
          preis: 4,
        },
        {
          text: 'extra scharf',
          preis: 0.5,
        }
      ]
    },
    {
      name: 'Coca Cola',
      beschreibung: 'Eisgekühlte Cola',
      kategorie: 'Trinken',
      preis: 1.99,
      url: 'cola',
      bild: '/image/products/cola.jpg',
      extras: [
        {
          text: 'gekühlt',
          preis: 0.2,
        }
      ]
    },
    {
      name: 'Erdbeer Eis',
      beschreibung: 'Eis mit Erdbeeren und Sahne',
      kategorie: 'Nachspeise',
      preis: 2.99,
      url: 'erdbeereis',
      bild: '/image/products/eis.jpg',
      extras: [
        {
          text: 'extra Sahne',
          preis: 1,
        }
      ]
    },
    {
      name: 'Falaffel',
      beschreibung: 'Orientalische Falaffel',
      kategorie: 'Hauptgericht',
      preis: 6.99,
      url: 'falaffel',
      bild: '/image/products/falaffel.jpg',
      extras: [
        {
          text: 'Sesam Sauce',
          preis: 1,
        },
        {
          text: 'Cocktail Sauce',
          preis: 1,
        }
      ]
    }, {
      name: 'Lahmacun',
      beschreibung: 'Turkish Style Lahmacun',
      kategorie: 'Hauptgericht',
      preis: 4.50,
      url: 'lahmacun',
      bild: '/image/products/lahmacun.jpg',
      extras: [
        {
          text: 'scharf',
          preis: 0.5,
        }
      ]
    }, {
      name: 'Lasagne',
      beschreibung: 'Lasagne aus Italien',
      kategorie: 'Hauptgericht',
      preis: 8.50,
      url: 'lasagne',
      bild: '/image/products/lasagne.jpg',
      extras: [
        {
          text: 'doppelt',
          preis: 5,
        },
        {
          text: 'extra Käse',
          preis: 2,
        }
      ]
    }, {
      name: 'Schokoladen Muffin',
      beschreibung: 'Sehr süßer Sckoko Muffin',
      kategorie: 'Nachspeise',
      preis: 3.20,
      url: 'muffin',
      bild: '/image/products/muffin.jpg'
    }, {
      name: 'Pizza Original',
      beschreibung: '4 seasons Pizza',
      kategorie: 'Hauptgericht',
      preis: 7.50,
      url: 'pizza',
      bild: '/image/products/pizza.jpg',
      extras: [
        {
          text: 'extra Käse',
          preis: 2.5
        },
        {
          text: 'groß',
          preis: 3
        }
      ]
    }, {
      name: 'Süßkartoffel Pommes',
      beschreibung: 'Süßkartoffel Pommes mit Dip',
      kategorie: 'Hauptgericht',
      preis: 4.80,
      url: 'pommmes',
      bild: '/image/products/pommes.jpg',
      extras: [
        {
          text: 'Ketchup',
          preis: 0.5
        },
        {
          text: 'Mayonnaise',
          preis: 0.5
        }
      ]
    },
  ]
}
export default jsondb;
