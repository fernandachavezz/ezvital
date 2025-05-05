// Sample chart data
const labels = ['0', '4', '8', '12', '16', '20', '24'];

const heartData = {
  labels,
  datasets: [{
    label: 'Heart Rate (bpm)',
    data: [80, 78, 76, 72, 75, 79, 77],
    borderColor: '#f64a8a',
    tension: 0.4
  }]
};

const glucoseData = {
  labels,
  datasets: [{
    label: 'Glucose (mg/dL)',
    data: [180, 165, 150, 130, 140, 145, 135],
    borderColor: '#f9a825',
    tension: 0.4
  }]
};

const insulinData = {
  labels,
  datasets: [{
    label: 'Insulin (μU/mL)',
    data: [25, 30, 35, 40, 38, 34, 32],
    borderColor: '#26a69a',
    tension: 0.4
  }]
};

new Chart(document.getElementById('heartChart'), {
  type: 'line',
  data: heartData,
  options: { responsive: true, plugins: { legend: { display: false } } }
});

new Chart(document.getElementById('glucoseChart'), {
  type: 'line',
  data: glucoseData,
  options: { responsive: true, plugins: { legend: { display: false } } }
});

new Chart(document.getElementById('insulinChart'), {
  type: 'line',
  data: insulinData,
  options: { responsive: true, plugins: { legend: { display: false } } }
});

