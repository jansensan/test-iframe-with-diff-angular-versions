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

      // FIXME: an error is thrown with the $('body') function
      console.log('$window: ', $window);
      console.log('$window.parent: ', $window.parent);
      console.log('$window.parent.$(body): ', $window.parent.$('body'));

      return $window.parent.$('body').injector();
    }

    function getService(serviceName) {
      return getInjector().get(serviceName);
    }

    return _service;
  }

})();