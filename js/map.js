function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "35c9dd185a82a646",
      center: { lat: 48.85, lng: 2.35 },
      zoom: 12,
    });
  }
  
  window.initMap = initMap;
  