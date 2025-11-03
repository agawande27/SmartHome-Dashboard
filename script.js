function showPanel(id) {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('section-title').innerText = id.charAt(0).toUpperCase() + id.slice(1);
}

function updateStatus(device) {
  const isOn = document.getElementById('living-light').checked;
  alert(`${device} turned ${isOn ? 'ON' : 'OFF'}`);
}

function updateThermostat(value) {
  document.getElementById('temp-display').innerText = value;
}

function toggleLock() {
  const btn = document.getElementById('lock-btn');
  const isLocked = btn.innerText.includes('🔒');
  btn.innerText = isLocked ? '🔓 Unlocked' : '🔒 Locked';
  btn.classList.toggle('unlocked', !isLocked);
}
