var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mergelotpa_1 = new ol.format.GeoJSON();
var features_mergelotpa_1 = format_mergelotpa_1.readFeatures(json_mergelotpa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergelotpa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergelotpa_1.addFeatures(features_mergelotpa_1);
var lyr_mergelotpa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergelotpa_1, 
                style: style_mergelotpa_1,
                popuplayertitle: 'merge lot pa',
                interactive: true,
                title: '<img src="styles/legend/mergelotpa_1.png" /> merge lot pa'
            });
var format_mergetandasempadan_2 = new ol.format.GeoJSON();
var features_mergetandasempadan_2 = format_mergetandasempadan_2.readFeatures(json_mergetandasempadan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergetandasempadan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergetandasempadan_2.addFeatures(features_mergetandasempadan_2);
var lyr_mergetandasempadan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergetandasempadan_2, 
                style: style_mergetandasempadan_2,
                popuplayertitle: 'merge tanda sempadan',
                interactive: true,
                title: '<img src="styles/legend/mergetandasempadan_2.png" /> merge tanda sempadan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mergelotpa_1.setVisible(true);lyr_mergetandasempadan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mergelotpa_1,lyr_mergetandasempadan_2];
lyr_mergelotpa_1.set('fieldAliases', {'fid': 'fid', 'no_lot': 'no_lot', 'area': 'area', 'tsp — hakmilik_DAERAH': 'tsp — hakmilik_DAERAH', 'tsp — hakmilik_NO_PA': 'tsp — hakmilik_NO_PA', 'tsp — pemilik_PEMILIK': 'tsp — pemilik_PEMILIK', 'lot': 'lot', 'layer': 'layer', 'path': 'path', });
lyr_mergetandasempadan_2.set('fieldAliases', {'fid': 'fid', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'vertex_p_2': 'vertex_p_2', 'distance': 'distance', 'angle': 'angle', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'vertex_index': 'vertex_index', 'vertex_part': 'vertex_part', 'vertex_part_index': 'vertex_part_index', 'path': 'path', });
lyr_mergelotpa_1.set('fieldImages', {'fid': '', 'no_lot': '', 'area': '', 'tsp — hakmilik_DAERAH': '', 'tsp — hakmilik_NO_PA': '', 'tsp — pemilik_PEMILIK': '', 'lot': '', 'layer': '', 'path': '', });
lyr_mergetandasempadan_2.set('fieldImages', {'fid': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'vertex_p_2': '', 'distance': '', 'angle': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'vertex_index': '', 'vertex_part': '', 'vertex_part_index': '', 'path': '', });
lyr_mergelotpa_1.set('fieldLabels', {'fid': 'no label', 'no_lot': 'no label', 'area': 'no label', 'tsp — hakmilik_DAERAH': 'no label', 'tsp — hakmilik_NO_PA': 'no label', 'tsp — pemilik_PEMILIK': 'no label', 'lot': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_mergetandasempadan_2.set('fieldLabels', {'fid': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'vertex_p_2': 'no label', 'distance': 'no label', 'angle': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'vertex_index': 'no label', 'vertex_part': 'no label', 'vertex_part_index': 'no label', 'path': 'no label', });
lyr_mergetandasempadan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});