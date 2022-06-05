mapboxgl.accessToken = mapToken;
let map = new mapboxgl.Map({
    container: 'map',
    style: `mapbox://styles/mapbox/light-v10`, // stylesheet location
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)

function mode() {
    const toggler = document.querySelector("#map");
    if (toggler.classList.contains('dark')) {
        color = 'dark'
    } else {
        color = 'light'
    }
    console.log(color)

    let map = new mapboxgl.Map({
        container: 'map',
        style: `mapbox://styles/mapbox/${color}-v10`, // stylesheet location
        center: campground.geometry.coordinates, // starting position [lng, lat]
        zoom: 10 // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());


    new mapboxgl.Marker()
        .setLngLat(campground.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                    `<h3>${campground.title}</h3><p>${campground.location}</p>`
                )
        )
        .addTo(map)
}