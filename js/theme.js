/* Dark/light toggle beside the page title. The theme is set before first paint
   by the inline script at the top of <body> (saved choice, else the system
   setting); this file wires up the buttons and keeps following the system
   setting until the visitor picks one,. The dartboard figure follows the
   body's "dark" class by itself (js/dartboard.js). */
(function () {
  'use strict';
  var KEY = 'pref-theme';
  var group = document.querySelector('.theme-toggle');
  if (!group) return;
  var buttons = group.querySelectorAll('button');

  function current() { return document.body.classList.contains('dark') ? 'dark' : 'light'; }
  function show() {
    var t = current();
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', buttons[i].getAttribute('data-theme') === t ? 'true' : 'false');
    }
  }
  function apply(t) {
    document.body.classList.toggle('dark', t === 'dark');
    show();
  }
  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      var t = this.getAttribute('data-theme');
      try { localStorage.setItem(KEY, t); } catch (e) { /* storage blocked: still switch */ }
      apply(t);
    });
  }

  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    var follow = function (e) { if (!saved()) apply(e.matches ? 'light' : 'dark'); };
    if (mq.addEventListener) mq.addEventListener('change', follow);
    else if (mq.addListener) mq.addListener(follow);
  }

  group.hidden = false;
  show();
})();
