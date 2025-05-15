let total = 0;

function addEntry() {
  const item = document.getElementById('item').value;
  const calories = parseInt(document.getElementById('calories').value);
  if (!item || isNaN(calories)) return;

  const entry = document.createElement('li');
  entry.textContent = `${item}: ${calories} kcal`;
  document.getElementById('entries').appendChild(entry);

  total += calories;
  document.getElementById('total').textContent = `Gesamt: ${total} kcal`;

  // Reset fields
  document.getElementById('item').value = '';
  document.getElementById('calories').value = '';
}

function showToday() {
  const now = new Date();
  const today = now.toLocaleDateString('de-DE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById('today').textContent = today;
}
