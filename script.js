let total = 0;
let currentDate = new Date();

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

function formatDate(date) {
  return date.toLocaleDateString('de-DE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

function showToday() {
  currentDate = new Date();
  updateDateDisplay();
}

function changeDay(direction) {
  currentDate.setDate(currentDate.getDate() + direction);
  updateDateDisplay();
}

function updateDateDisplay() {
  document.getElementById('today').textContent = formatDate(currentDate);

  // Optional: Lade hier tagesabhängige Einträge
  // Für diese Demo bleibt die Liste gleich.
}
