document.getElementById('caseForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const required = this.querySelectorAll('[required]');
  let valid = true;

  required.forEach(function (el) {
    if (!el.value.trim()) {
      el.style.borderColor = '#dc2626';
      valid = false;
    } else {
      el.style.borderColor = '';
    }
  });

  if (!valid) return;

  const btn = this.querySelector('.form-submit');
  btn.textContent = 'Submitting…';
  btn.disabled = true;

  setTimeout(function () {
    btn.style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
  }, 900);
});

document.querySelectorAll('input[required], select[required], textarea[required]').forEach(function (el) {
  el.addEventListener('input', function () {
    el.style.borderColor = '';
  });
});
