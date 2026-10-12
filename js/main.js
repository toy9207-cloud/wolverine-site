/* Wolverrine — small progressive enhancements. No dependencies. */
(function () {
  'use strict';

  /* ---- Waitlist destination ---------------------------------------
     Wolverrine is ICSI-only while he is competing; fresh and frozen
     contracts open as his schedule allows and are taken by waitlist.

     If Solo Select runs the waitlist on their own form, put that URL
     here and every "waitlist" button will point at it instead of the
     on-page inquiry form. Leave it empty to use the form below.
  ------------------------------------------------------------------ */
  var WAITLIST_URL = '';

  /* Solo Select handles contracts and payment. Anything marked data-book
     goes straight there. Keep this URL clean — no tracking parameters;
     a _gl= token is session-specific and expires. */
  var BOOK_URL = 'https://portal.soloselect.com/portal/book/wolverrine';

  /* ---- Image slots -------------------------------------------------
     Each .shot holds a real <img> and a labeled placeholder. Until the
     photo exists at that path, we hide the broken <img> and leave the
     placeholder showing the exact filename to drop in.
  ------------------------------------------------------------------ */
  function markLoaded(shot) { shot.classList.add('is-loaded'); }
  function markFailed(img)   { img.style.display = 'none'; }

  document.querySelectorAll('[data-shot]').forEach(function (shot) {
    var img = shot.querySelector('img');
    if (!img) return;
    // A lazy <img> reports complete === true before it has loaded, so a width
    // of 0 is only a real failure once the error event has actually fired.
    // Hiding it early would also cancel the lazy load.
    if (img.complete && img.naturalWidth > 0) { markLoaded(shot); return; }
    img.addEventListener('load',  function () { markLoaded(shot); });
    img.addEventListener('error', function () { markFailed(img); });
  });

  /* ---- Waitlist + ICSI buttons ----
     Each CTA carries data-intent. Clicking one jumps to the inquiry form
     and preselects the matching option, so the lead arrives labelled.
  ---------------------------------------------------- */
  var intentField = document.getElementById('intent');

  document.querySelectorAll('[data-book]').forEach(function (el) {
    el.setAttribute('href', BOOK_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  document.querySelectorAll('[data-intent]').forEach(function (el) {
    if (el.hasAttribute('data-waitlist') && WAITLIST_URL) {
      el.setAttribute('href', WAITLIST_URL);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
      return;
    }
    el.addEventListener('click', function () {
      if (!intentField) return;
      intentField.value = el.getAttribute('data-intent');
      var name = document.getElementById('name');
      if (name) setTimeout(function () { name.focus({ preventScroll: true }); }, 600);
    });
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
    var FALLBACK_TO = 'stallions@soloselect.com';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var body = [
        'Name: '   + (d.get('name')   || ''),
        'Email: '  + (d.get('email')  || ''),
        'Phone: '  + (d.get('phone')  || ''),
        'Season: ' + (d.get('season') || ''),
        'Wants: '  + (d.get('intent')  || ''),
        'Mare: '   + (d.get('mare')   || ''),
        '',
        d.get('message') || ''
      ].join('\n');
      var subject = d.get('intent') === 'waitlist'
        ? 'Wolverrine fresh/frozen waitlist request'
        : 'Wolverrine breeding inquiry';
      window.location.href = 'mailto:' + FALLBACK_TO +
        '?subject=' + encodeURIComponent(subject) +
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
