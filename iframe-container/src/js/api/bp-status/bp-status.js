(function () {
  var BpStatusConfig = {
    BASE_URL: '/api/v1/status'
  };

  /**
  * @ngdoc service
  * @name ic.api.BpStatus:bpStatus
  *
  */
  angular.module('ic.api.BpStatus', [])
    .constant('BpStatusConfig', BpStatusConfig)
    .factory('bpStatus', BpStatus);

  /* @ngInject */
  function BpStatus(BpStatusConfig) {


    //Public API
    return {

      get: function () {
        return $http.get(BpStatusConfig.BASE_URL);
      }
    };
  }

})();