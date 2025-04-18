var map = L.map('map').setView([46.603354, 1.888334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var ports = [
    { name: "Lorient", coords: [47.7489, -3.3666], boats: 6, image: "/images/lorient.jpg" },
    { name: "Concarneau", coords: [47.875, -3.9183], boats: 8, image: "/images/concarneau.jpeg" },
    { name: "Bordeaux", coords: [44.8378, -0.5792], boats: 2, image: "/images/bordeaux.jpg" },
    { name: "Vannes", coords: [47.6559, -2.7603], boats: 10, image: "/images/vannes.jpeg" },
    { name: "Brest", coords: [48.3904, -4.4861], boats: 5, image: "/images/brest" }
];

ports.forEach(port => {
    L.marker(port.coords, {
        icon: L.icon({
            iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        })
    }).addTo(map)
        .bindPopup(`
        <div class="popup-content" style="text-align: center;">
            <h3>${port.name}</h3>
            <img src="${port.image}" alt="${port.name}" style="max-width: 100%; display: block; margin: 0 auto;">
            <p>Nombre de bateaux disponibles : ${port.boats}</p>
        </div>
    `);
});
