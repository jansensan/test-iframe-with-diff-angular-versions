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
      return $window.parent.$('body').injector();
    }

    function getService(serviceName) {
      return getInjector().get(serviceName);
    }

    return _service;
  }

})();