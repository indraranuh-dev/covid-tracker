$(function () {
    const settingsIDCumulative = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.kawalcorona.com/indonesia",
        "method": "GET",
        "headers": {
            "Access-Control-Allow-Origin": "*",
        }
    }
    const settingsIDAll = {
        "async": true,
        "crossDomain": true,
        "url": "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=",
        "method": "GET",
    }

    const getAllData = async function () {
        $.ajax(settingsIDCumulative).done(function (response) {
            console.log(JSON.parse(response));
        });
        $.ajax(settingsIDAll).done(function (response) {
            console.log(JSON.parse(response));
        });
    }

    $(document).ready(function () {
        jQuery.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });

        getAllData();
    })

});