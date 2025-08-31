'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  const headerSpans = tree.querySelectorAll('span');

  headerSpans.forEach(function (span) {
    span.addEventListener('click', function (e) {
      e.stopPropagation();

      const parentElem = span.parentElement;

      if (!parentElem) {
        return;
      }

      const next = span.nextElementSibling;

      if (next) {
        next.hidden = !next.hidden;
      }
    });
  });
});
