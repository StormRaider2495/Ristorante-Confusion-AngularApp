function myMap() {
  var latitude,
      longitude,
      zoomRate,
      myCenter,
      mapCanvas,
      mapOptions,
      map,
      marker;
  latitude = 22.5858479;
  longitude = 88.4915217;
  zoomRate = 10;
  myCenter = new google.maps.LatLng(latitude,longitude);
  mapCanvas = document.getElementById("map");
  mapOptions = {center: myCenter, zoom: zoomRate};
  map = new google.maps.Map(mapCanvas, mapOptions);
  marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  // Zoom to 9 when clicking on marker
 google.maps.event.addListener(marker,'click',function() {
   map.setZoom(zoomRate+=5);
   map.setCenter(marker.getPosition());
 });
}
