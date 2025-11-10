let map;
let marker;
let watchId = null;
let isTracking = false;
let locationHistory = [];

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const statusBadge = document.getElementById('statusBadge');
const mapOverlay = document.getElementById('mapOverlay');
const errorMessage = document.getElementById('errorMessage');

const latitudeEl = document.getElementById('latitude');
const longitudeEl = document.getElementById('longitude');
const accuracyEl = document.getElementById('accuracy');
const addressEl = document.getElementById('address');
const timestampEl = document.getElementById('timestamp');
const historyList = document.getElementById('historyList');

function initMap() {
  map = L.map('map').setView([0, 0], 2);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add('show');
  
  setTimeout(() => {
    errorMessage.classList.remove('show');
  }, 5000);
}

function updateUI(position) {
  const { latitude, longitude, accuracy } = position.coords;
  const timestamp = new Date(position.timestamp);
  
  latitudeEl.textContent = latitude.toFixed(6);
  longitudeEl.textContent = longitude.toFixed(6);
  accuracyEl.textContent = `${accuracy.toFixed(2)} meters`;
  timestampEl.textContent = timestamp.toLocaleString();
  
  if (marker) {
    marker.setLatLng([latitude, longitude]);
  } else {
    marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup('You are here!').openPopup();
  }
  
  map.setView([latitude, longitude], 15);
  
  mapOverlay.classList.add('hidden');
  
  getAddress(latitude, longitude);
  
  addToHistory(latitude, longitude, timestamp);
}

async function getAddress(lat, lon) {
  try {
    addressEl.textContent = 'Loading address...';
    
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch address');
    }
    
    const data = await response.json();
    
    if (data.display_name) {
      addressEl.textContent = data.display_name;
      return data.display_name;
    } else {
      addressEl.textContent = 'Address not available';
      return 'Address not available';
    }
  } catch (error) {
    console.error('Error fetching address:', error);
    addressEl.textContent = 'Unable to fetch address';
    return 'Unable to fetch address';
  }
}

function addToHistory(lat, lon, timestamp) {
  const historyItem = {
    latitude: lat,
    longitude: lon,
    timestamp: timestamp,
    address: addressEl.textContent
  };
  
  locationHistory.unshift(historyItem);
  
  if (locationHistory.length > 20) {
    locationHistory.pop();
  }
  
  renderHistory();
}

function renderHistory() {
  if (locationHistory.length === 0) {
    historyList.innerHTML = '<p class="empty-state">No location history yet. Start tracking to see your location history.</p>';
    return;
  }
  
  historyList.innerHTML = locationHistory.map(item => `
    <div class="history-item">
      <div class="time">${item.timestamp.toLocaleString()}</div>
      <div class="coords">📍 ${item.latitude.toFixed(6)}, ${item.longitude.toFixed(6)}</div>
      <div class="address">${item.address}</div>
    </div>
  `).join('');
}

function handleLocationError(error) {
  let message = '';
  
  switch(error.code) {
    case error.PERMISSION_DENIED:
      message = 'Location access denied. Please enable location permissions in your browser.';
      break;
    case error.POSITION_UNAVAILABLE:
      message = 'Location information is unavailable. Please check your device settings.';
      break;
    case error.TIMEOUT:
      message = 'Location request timed out. Please try again.';
      break;
    default:
      message = 'An unknown error occurred while getting your location.';
  }
  
  showError(message);
  stopTracking();
}

function startTracking() {
  if (!navigator.geolocation) {
    showError('Geolocation is not supported by your browser.');
    return;
  }
  
  isTracking = true;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  statusBadge.textContent = 'Active';
  statusBadge.classList.remove('inactive');
  statusBadge.classList.add('active');
  
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };
  
  watchId = navigator.geolocation.watchPosition(
    updateUI,
    handleLocationError,
    options
  );
}

function stopTracking() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
  
  isTracking = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  statusBadge.textContent = 'Inactive';
  statusBadge.classList.remove('active');
  statusBadge.classList.add('inactive');
}

function clearHistory() {
  if (confirm('Are you sure you want to clear all location history?')) {
    locationHistory = [];
    renderHistory();
  }
}

startBtn.addEventListener('click', startTracking);
stopBtn.addEventListener('click', stopTracking);
clearHistoryBtn.addEventListener('click', clearHistory);

window.addEventListener('load', () => {
  initMap();
});

window.addEventListener('beforeunload', () => {
  if (isTracking) {
    stopTracking();
  }
});
