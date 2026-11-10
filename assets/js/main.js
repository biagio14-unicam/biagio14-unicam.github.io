// Ordina le schede della pagina Progetti dalla più recente alla più vecchia (attributo data-date: AAAA-MM o AAAA)
(function () {
  var grid = document.querySelector('.project-grid');
  if (!grid) return;
  var key = function (el) {
    var d = (el.getAttribute('data-date') || '0000').trim();
    return d.length === 4 ? d + '-00' : d;      // solo l'anno: va dopo i progetti dello stesso anno con il mese
  };
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.project'));
  cards.map(function (el, i) { return { el: el, k: key(el), i: i }; })
    .sort(function (a, b) { return a.k < b.k ? 1 : a.k > b.k ? -1 : a.i - b.i; })   // a parità resta l'ordine del codice
    .forEach(function (c) { grid.appendChild(c.el); });
})();

// Filtri della pagina Progetti
(function () {
  var buttons = document.querySelectorAll('.filter');
  if (!buttons.length) return;
  var cards = document.querySelectorAll('.project[data-cat]');
  var count = document.querySelector('.filter-count');

  function apply(cat) {
    var n = 0;
    cards.forEach(function (card) {
      // data-cat può contenere più categorie separate da "|"
      var show = cat === 'Tutti' || card.getAttribute('data-cat').split('|').indexOf(cat) !== -1;
      card.hidden = !show;
      if (show) n++;
    });
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-filter') === cat ? 'true' : 'false');
    });
    if (count) count.textContent = n === 1 ? '1 progetto' : n + ' progetti';
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-filter')); });
  });
  apply('Tutti');
})();

// Modulo contatti: apre il programma di posta con il messaggio già compilato
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = form.nome.value.trim();
    var email = form.email.value.trim();
    var tipo = form.tipo.value;
    var msg = form.messaggio.value.trim();
    var subject = tipo + (nome ? ' — ' + nome : '');
    var body = msg + '\n\n' + (nome || '') + (email ? '\n' + email : '');
    window.location.href = 'mailto:' + form.getAttribute('data-to') +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  });
})();
