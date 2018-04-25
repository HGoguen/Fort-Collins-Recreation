document.addEventListener('DOMContentLoaded', function() {
    var map = L.map("map").setView([40.55, -105.0844], 12);


    //Basemap Layer
    L.esri.basemapLayer('Imagery').addTo(map);
    L.esri.basemapLayer('ImageryLabels').addTo(map);

    //Hosted Feature Layer
    var pathLayer = L.esri.featureLayer({
        url: 'http://services.arcgis.com/Vr4pJuhEJB9F4bUA/arcgis/rest/services/TrailsNpaths/FeatureServer/0'
    }).addTo(map);
    
     var popupTemplate = "<h3>{NAME}</h3> Bike use: {BIKEUSE} <br> Horse Use: {HORSEUSE} <br> Surface Type: {CONSTRUCTI}";

      pathLayer.bindPopup(function(e){
        return L.Util.template(popupTemplate, e.feature.properties)
      });

    //My Feature Layer
    var naturalFort = L.esri.featureLayer({
        url: 'https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/FortCollinsNatureAreas/FeatureServer/1'      
    }).addTo(map);
    
    var parksFort = L.esri.featureLayer({
        url: 'https://services.arcgis.com/YseQBnl2jq0lrUV5/ArcGIS/rest/services/FortCollinsNatureAreas/FeatureServer/0'      
    }).addTo(map);

    var popupTemplate = "<h3>{PARKNAME}</h3> This is a {PARKTYPE} <br> Parking Onstreet: {PRKNGONST} <br> Parking Off Street: {PRKNGOFFST}";

      parksFort.bindPopup(function(e){
        return L.Util.template(popupTemplate, e.feature.properties)
      });

    // create the geocoding control and add it to the map
    var searchControl = L.esri.Geocoding.geosearch().addTo(map);

    // create an empty layer group to store the results and add it to the map
    var results = L.layerGroup().addTo(map);

    // listen for the results event and add every result to the map
    searchControl.on("results", function(data) {
        results.clearLayers();
        for (var i = data.results.length - 1; i >= 0; i--) {
            results.addLayer(L.marker(data.results[i].latlng));
        }
    });


});