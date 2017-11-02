navigator.geolocation.getCurrentPosition(pos => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const url = `http://maps.google.com/maps/api/staticmap?center=${latitude},${longitude}&size=400x400&sensor=true&zoom=18`;
    document.body.innerHTML += `<img src=${url} />`;
});
