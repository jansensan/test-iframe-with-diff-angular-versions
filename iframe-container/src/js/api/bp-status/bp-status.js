(function () {
  /**
  * @ngdoc service
  * @name ic.api.BpStatus:bpStatus
  *
  */
  angular.module('ic.api.BpStatus', [])
    .constant('BpStatusConfig', getBpStatusConfig())
    .factory('bpStatus', BpStatus);


  function getBpStatusConfig() {
    return {
      BASE_URL: '/api/v1/status'
    };
  }

  /* @ngInject */
  function BpStatus(BpStatusConfig) {
    // Public API
    var api = {};
    api.get = get

    function get() {
      return $http.get(BpStatusConfig.BASE_URL);
    }

    return api;
  }

})();