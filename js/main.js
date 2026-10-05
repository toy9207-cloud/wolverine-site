/* Wolverrine — small progressive enhancements. No dependencies. */
(function () {
  'use strict';

  /* ---- Image slots -------------------------------------------------
     Each .shot holds a real <img> and a labeled placeholder. Until the
     photo exists at that path, we hide the broken <img> and leave the
     placeholder showing the exact filename to drop in.
  ------------------------------------------------------------------ */
  function settle(shot, img) {
    if (img.naturalWidth > 0) {
      shot.classList.add('is-loaded');
    } else {
      img.style.display = 'none';
    }
  }

  document.querySelectorAll('[data-shot]').forEach(function (shot) {
    var img = shot.querySelector('img');
    if (!img) return;
    if (img.complete) {
      settle(shot, img);
    } else {
      img.addEventListener('load', function () { settle(shot, img); });
      img.addEventListener('error', function () { img.style.display = 'none'; });
    }
  });

  /* ---- Current year in footer ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Form: graceful fallback until an endpoint is wired up ----
     Formspree (or whatever you use) needs a real form ID. Until then,
     compose a mailto so no lead is silently lost.
  ---------------------------------------------------------------- */
  var form = document.getElementById('inquiry');
  if (form && /REPLACE_WITH_YOUR_FORM_ID/.test(form.getAttribute('action') || '')) {
    var FALLBACK_TO = 'millironlivestock@gmail.com';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var body = [
        'Name: '   + (d.get('name')   || ''),
        'Email: '  + (d.get('email')  || ''),
        'Phone: '  + (d.get('phone')  || ''),
        'Season: ' + (d.get('season') || ''),
        'Mare: '   + (d.get('mare')   || ''),
        '',
        d.get('message') || ''
      ].join('\n');
      window.location.href = 'mailto:' + FALLBACK_TO +
        '?subject=' + encodeURIComponent('Wolverrine breeding inquiry') +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ---- Nav: highlight the section you're reading ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && targets.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + en.target.id;
          a.style.color = on ? 'var(--gold-deep)' : '';
          a.style.fontWeight = on ? '600' : '';
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach(function (t) { obs.observe(t); });
  }
})();
