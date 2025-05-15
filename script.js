let currentDate = new Date();
let total = 0;

function getDateKey(date) {
  return date.toISOString().split('T')[0]; // z.B. "2025-05-15"
}

function loadEntries() {
  const key = getDateKey(currentDate);
  const stored = localStorage.getItem(key);
  const entries = stored ? JSON.parse(stored) : [];

  const entriesList = document.getElementById('entries');
  entriesList.innerHTML = '';
  total = 0;

  entries.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.item}: ${entry.calories} kcal`;
    entriesList.appendChild(li);
    total += entry.calories;
  });

  document.getElementById('total').textContent = `Gesamt: ${total} kcal`;
}

function saveEntry(item, calories) {
  const key = getDateKey(currentDate);
  const stored = localStorage.getItem(key);
  const entries = stored ? JSON.parse(stored) : [];

  entries.push({ item, calories });
  localStorage.setItem(key, JSON.stringify(entries));
}

function addEntry() {
  const item = document.getElementById('item').value.trim();
  const calories = parseInt(document.getElementById('calories').value);
  if (!item || isNaN(calories)) return;

  const entry = document.createElement('li');
  entry.textContent = `${item}: ${calories} kcal`;
  document.getElementById('entries').appendChild(entry);

  total += calories;
  document.getElementById('total').textContent = `Gesamt: ${total} kcal`;

  saveEntry(item, calories);

  document.getElementById('item').value = '';
  document.getElementById('calories').value = '';
}

function formatDate(date) {
  return date.toLocaleDateString('de-DE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

function updateDateDisplay() {
  document.getElementById('today').textContent = formatDate(currentDate);
  loadEntries();
}

function showToday() {
  currentDate = new Date();
  updateDateDisplay();
}

function changeDay(direction) {
  currentDate.setDate(currentDate.getDate() + direction);
  updateDateDisplay();
}

// Init bei Seitenaufruf
document.addEventListener('DOMContentLoaded', () => {
  updateDateDisplay();
});
