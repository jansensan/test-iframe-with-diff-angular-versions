(function () {

  'use strict';


  angular
    .module('icontent.services.ParentInjector', [])
    .factory('parentInjector', getParentInjector);


  /* ngInject */
  function getParentInjector($window) {
    
    // Public API
    var _service = {};
    _service.get = getService;

    // Implementation
    function getInjector() {
      console.log('--- icontent.services.ParentInjector:getInjector ---');

      var parentWindow = $window.parent;
      console.log('parentWindow: ', parentWindow);

      var parentBody = parentWindow.$('body');
      console.log('parentBody: ', parentBody);

      // FIXME: there is no injector() function
      var injector = parentBody.injector();
      console.log('injector: ', injector);

      return injector;
    }

    function getService(serviceName) {
      return getInjector().get(serviceName);
    }

    return _service;
  }

})();