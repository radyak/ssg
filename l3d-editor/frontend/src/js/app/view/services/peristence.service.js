(function (L3DEditor) {

  'use strict';


  angular
    .module('Editor')
    .service('PersistenceService', function ($http) {

      var baseUrl = 'http://localhost:8880/';

      var getAllDefinitions = function () {
        return $http.get(baseUrl + 'definitions').then(function (response) {
          return response.data;
        }, function (error) {
          // TODO: Error handling
          console.error(error);
        });
      };

      var getDefinition = function (name) {
        return $http.get(baseUrl + '/definitions/' + name).then(function (response) {
          return response.data;
        }, function (error) {
          // TODO: Error handling
          console.error(error);
        });

      };

      var getDefinitionNames = function () {
        return getAllDefinitions().then(function (definitionsMap) {
          return Object.keys(definitionsMap);
        })
      };

      var saveDefinition = function (name, definition) {
        var definitionPayload = {
          name: name,
          json: JSON.stringify(definition)
        };
        return $http.post(baseUrl + '/definitions', definitionPayload).then(function (response) {
          return response.data;
        }, function (error) {
          // TODO: Error handling
          console.error(error);
        });
      };

    return {
      getAllDefinitions: getAllDefinitions,
      getDefinition: getDefinition,
      getDefinitionNames: getDefinitionNames,
      saveDefinition: saveDefinition
    };

  });

})(L3DEditor);
