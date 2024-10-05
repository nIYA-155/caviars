fetch("https://eonet.gsfc.nasa.gov/api/v3/events?api_key=8Y6DRrBYVpMULwEHNH7E5CTunqNgttfkQhiwaHgm", {
    "method": "GET",
    "header": {
        "x-rapidapi-host": "eonet.gsfc.nasa.gov",
        "x-rapidapi-key": "8Y6DRrBYVpMULwEHNH7E5CTunqNgttfkQhiwaHgm"
    }
})
.then(response => {
    console.log(response);
})
.catch(err => {
  console.log(err);
});
