function handleFormSubmit(formId, successId) {
  var form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var required = form.querySelectorAll('[required]');
    var valid = true;
    required.forEach(function (el) {
      if (!el.value.trim()) { el.style.borderColor = '#dc2626'; valid = false; }
      else { el.style.borderColor = ''; }
    });
    if (!valid) return;
    var btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Submitting…';
    btn.disabled = true;
    setTimeout(function () {
      btn.style.display = 'none';
      document.getElementById(successId).style.display = 'block';
    }, 900);
  });
  form.querySelectorAll('[required]').forEach(function (el) {
    el.addEventListener('input', function () { el.style.borderColor = ''; });
  });
}

handleFormSubmit('heroForm', 'heroSuccessMsg');
handleFormSubmit('caseForm', 'successMsg');
