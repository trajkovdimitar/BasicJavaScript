$("#btn-1").click(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/trajkovdimitar/BasicJavaScript/master/JSONmyself",
    success: function (response) {
      console.log('The request succeeded!');
      let resultParsed = JSON.parse(response);
      console.log(resultParsed);
    }, 
    error: function(response){
      console.log('The request failed!');
      console.log(response.responseText);
    }
  });
});


$("#btn-2").click(function () {
    $.ajax({
      url: "https://api.openaq.org/v1/measurements?country=MK&city=Centar+Municipality&parameter=pm10&date_from=2018-12-20&date_to=2018-12-21",
      success: function (response) {
        console.log('The request succeeded!');
        let weatherParsed = JSON.parse(response);
        console.log(weatherParsed);
      }, 
      error: function(response){
        console.log('The request failed!');
        console.log(response.responseText);
      }
    });
  });

  let json = {
    "meta": {
      "name": "openaq-api",
      "license": "CC BY 4.0",
      "website": "https://docs.openaq.org/",
      "page": 1,
      "limit": 100,
      "found": 21
    },
    "results": [
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T22:00:00.000Z",
          "local": "2018-12-20T23:00:00+01:00"
        },
        "value": 179.626,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T21:00:00.000Z",
          "local": "2018-12-20T22:00:00+01:00"
        },
        "value": 159.37,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T20:00:00.000Z",
          "local": "2018-12-20T21:00:00+01:00"
        },
        "value": 141.286,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T19:00:00.000Z",
          "local": "2018-12-20T20:00:00+01:00"
        },
        "value": 102.201,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T18:00:00.000Z",
          "local": "2018-12-20T19:00:00+01:00"
        },
        "value": 107.859,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T17:00:00.000Z",
          "local": "2018-12-20T18:00:00+01:00"
        },
        "value": 106.312,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T16:00:00.000Z",
          "local": "2018-12-20T17:00:00+01:00"
        },
        "value": 98.6514,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T15:00:00.000Z",
          "local": "2018-12-20T16:00:00+01:00"
        },
        "value": 79.3109,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T14:00:00.000Z",
          "local": "2018-12-20T15:00:00+01:00"
        },
        "value": 67.8118,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T13:00:00.000Z",
          "local": "2018-12-20T14:00:00+01:00"
        },
        "value": 59.9902,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T12:00:00.000Z",
          "local": "2018-12-20T13:00:00+01:00"
        },
        "value": 66.4943,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T11:00:00.000Z",
          "local": "2018-12-20T12:00:00+01:00"
        },
        "value": 91.3542,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T10:00:00.000Z",
          "local": "2018-12-20T11:00:00+01:00"
        },
        "value": 89.3508,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T09:00:00.000Z",
          "local": "2018-12-20T10:00:00+01:00"
        },
        "value": 96.1735,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T08:00:00.000Z",
          "local": "2018-12-20T09:00:00+01:00"
        },
        "value": 101.283,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T07:00:00.000Z",
          "local": "2018-12-20T08:00:00+01:00"
        },
        "value": 100.694,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T06:00:00.000Z",
          "local": "2018-12-20T07:00:00+01:00"
        },
        "value": 89.6227,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T05:00:00.000Z",
          "local": "2018-12-20T06:00:00+01:00"
        },
        "value": 91.3805,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T04:00:00.000Z",
          "local": "2018-12-20T05:00:00+01:00"
        },
        "value": 102.209,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T03:00:00.000Z",
          "local": "2018-12-20T04:00:00+01:00"
        },
        "value": 83.1451,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      },
      {
        "location": "MK0047A",
        "parameter": "pm10",
        "date": {
          "utc": "2018-12-20T02:00:00.000Z",
          "local": "2018-12-20T03:00:00+01:00"
        },
        "value": 77.2859,
        "unit": "µg/m³",
        "coordinates": {
          "latitude": 41.991999999466,
          "longitude": 21.423
        },
        "country": "MK",
        "city": "Centar Municipality"
      }
    ]
  }
  
  