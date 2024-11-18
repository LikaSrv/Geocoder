// TODO: Create a function to get the coordinates
// from an address and display a map with a marker on it

const showMap = (userInput) => {
  // TODO: Construct the URL (with apiKey & userInput)
  // and make the fetch request to the mapbox API
  const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${userInput}&access_token=pk.eyJ1IjoidGhlb2JvbmRheiIsImEiOiJjazc0anVmMjUwOHZ0M2VwYTRlcGs2dnZjIn0.byLisvWA9__hIZ5FBFybNw`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.features[0].geometry.coordinates);
      // TODO: Insert the info into the DOM
      // - Extract the coordinates from the parsed JSON response (lang, lat)
      // - Display the coordinates in the element where the coordinates will be displayed
      // - Create a map using the Mapbox API and the coordinates
      // - Add a marker to the map at the coordinates
      const lang = data.features[0].geometry.coordinates[0];
      const lat = data.features[0].geometry.coordinates[1];
      console.log(lang);
      console.log(lat);
      document.querySelector('.lead').innerHTML = `latitude : ${lat}` + `, ` + `longtitude : ${lang}`;
      mapboxgl.accessToken = "pk.eyJ1IjoidGhlb2JvbmRheiIsImEiOiJjazc0anVmMjUwOHZ0M2VwYTRlcGs2dnZjIn0.byLisvWA9__hIZ5FBFybNw";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        center: [`${lang}`, `${lat}`],
        zoom: 3
      });
      new mapboxgl.Marker()
        .setLngLat([`${lang}`, `${lat}`])
        .addTo(map)
    });
};
//
// TODO: Select the form element
const summit = document.querySelector('.summit');
// console.log(summit);

// TODO: Add event listener to the form that:
// - Prevents the default form submission behavior
// - Get the user input
// - Calls the showMap function with the user input as an argument
summit.addEventListener('click', (event) => {
  event.preventDefault();
  const input = document.querySelector('.form-control').value;
  console.log(input);
  showMap(input);
});
