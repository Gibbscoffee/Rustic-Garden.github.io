(function () {
  var buttons = document.querySelectorAll('.filters button');
  var claims = document.querySelectorAll('.claims li');
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter');
      buttons.forEach(function (x) { x.classList.toggle('active', x === b); });
      claims.forEach(function (c) {
        c.hidden = !(f === 'all' || c.getAttribute('data-class') === f);
      });
    });
  });
})();
