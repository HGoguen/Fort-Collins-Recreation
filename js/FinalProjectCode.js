document.addEventListener('DOMContentLoaded', function() {
  var map = L.map("map").setView([40.55, -105.0844], 12);
  
  L.esri.basemapLayer('Imagery').addTo(map);
  L.esri.basemapLayer('ImageryLabels').addTo(map);
  L.esri.featureLayer({
    url: 'http://services.arcgis.com/Vr4pJuhEJB9F4bUA/arcgis/rest/services/TrailsNpaths/FeatureServer/0'
  }).addTo(map);
});