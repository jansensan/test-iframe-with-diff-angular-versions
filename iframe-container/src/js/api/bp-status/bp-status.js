(function () {
  /**
  * @ngdoc service
  * @name icontainer.api.BpStatus:bpStatus
  *
  */
  angular
    .module('icontainer.api.BpStatus', [])
    .constant('BpStatusConfig', getBpStatusConfig())
    .factory('bpStatus', BpStatus);


  function getBpStatusConfig() {
    return {
      BASE_URL: '/api/v1/status'
    };
  }

  /* @ngInject */
  function BpStatus($http, BpStatusConfig) {
    // Public API
    var api = {};
    api.get = get;
    api.test = test;

    function get() {
      return $http.get(BpStatusConfig.BASE_URL);
    }

    function test() {
      console.log('--- icontainer.api.BpStatus:test ---');
    }

    return api;
  }

})();