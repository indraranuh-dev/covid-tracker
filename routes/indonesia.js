const express = require('express');
const router = express.Router();
const cors = require('cors');
const fetch = require("node-fetch");
const indonesiaAllURL = 'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=';

router.get('/', cors(), function (req, res, next) {

    /**
     * Get cumulative data from resource
     * @param {string} URL 
     */
    const fetchCumulative = async function (URL) {
        await fetch(URL, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then(data => data.json())
            .then(data => {
                const arr = [];
                const simplify = data.features;
                simplify.forEach((element, index) => {
                    if (index !== 34) arr.push(element)
                });
                const newData = {
                    'data': arr
                };
                res.send(newData);
            })
            .catch(err => {
                res.send(err);
                res.statusCode;
            });
    };

    /* fetch data when access root url */
    fetchCumulative(indonesiaAllURL);
});

module.exports = router;