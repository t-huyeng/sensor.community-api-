/**
 * Sensor Community API
 * This is the API for the Sensor Community. There are two domains where the same data is served.  https://api.luftdaten.info - This is optimized for receiving data. DON'T use this to request data.  https://data.sensor.community - This is faster and more reliable for serving data, so should be used for reporting cases. Where it is not supported for a certain endpoint, the previous domain must be used.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SensorCommunityApi);
  }
}(this, function(expect, SensorCommunityApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SensorCommunityApi.V1Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Api', function() {
    describe('getDataByApiID', function() {
      it('should call getDataByApiID successfully', function(done) {
        //uncomment below and update the code to test getDataByApiID
        //instance.getDataByApiID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDataLast5Minutes', function() {
      it('should call getDataLast5Minutes successfully', function(done) {
        //uncomment below and update the code to test getDataLast5Minutes
        //instance.getDataLast5Minutes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSensorValuesWithFilter', function() {
      it('should call getSensorValuesWithFilter successfully', function(done) {
        //uncomment below and update the code to test getSensorValuesWithFilter
        //instance.getSensorValuesWithFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));