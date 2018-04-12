document.addEventListener('DOMContentLoaded', function() {
  var map = L.map("map").setView([40.5, -105.0844], 11);
  
  L.esri.basemapLayer('Imagery').addTo(map);
  L.esri.basemapLayer('ImageryLabels').addTo(map);
  //L.esri.featureLayer({
   // url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'
  //}).addTo(map);
});