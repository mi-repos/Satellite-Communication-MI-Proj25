// Dummy data simulation for satellite communication

document.addEventListener('DOMContentLoaded', () => {
  // Simulate fetching data
  function getDummyData() {
    return {
      altitude: (Math.random() * 500 + 200).toFixed(1),  // 200‑700 km
      velocity: (Math.random() * 7 + 6).toFixed(2),     // 6‑13 km/s
      status: Math.random() > 0.5 ? 'Nominal' : 'Degraded',
      downlinkRate: (Math.random() * 200 + 50).toFixed(1),
      downlinkStrength: (Math.random() * 30 + 60).toFixed(1),  // dB
      uplinkRate: (Math.random() * 100 + 20).toFixed(1),
      uplinkStrength: (Math.random() * 30 + 50).toFixed(1)
    };
  }

  function updateUI() {
    const data = getDummyData();
    document.getElementById('altitude').textContent = data.altitude;
    document.getElementById('velocity').textContent = data.velocity;
    document.getElementById('status').textContent = data.status;
    document.getElementById('downlink-rate').textContent = data.downlinkRate;
    document.getElementById('downlink-strength').textContent = data.downlinkStrength;
    document.getElementById('uplink-rate').textContent = data.uplinkRate;
    document.getElementById('uplink-strength').textContent = data.uplinkStrength;
  }

  // Initial update
  updateUI();

  // Update periodically every 5 seconds
  setInterval(updateUI, 5000);
});
