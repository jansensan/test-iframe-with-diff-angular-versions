(function () {

  angular.module('icontainer.api.BpStatusMockData', []);

  var BpStatusMockData = [];

  angular.module('icontainer.api.BpStatusMockData')
    .value('BpStatusMockData', BpStatusMockData);
    
})();

(function () {
  angular
    .module('icontainer.api.BpStatusMock', [
      'ngMockE2E',
      'icontainer.api.BpStatusMockData',
      'icontainer.api.BpStatus'
    ])
    .run(BpStatusMock);
    
  function BpStatusMock($httpBackend, BpStatusMockData, BpStatusConfig) {
    var URL = BpStatusConfig.BASE_URL;
    $httpBackend.whenGET(/^static\//).passThrough();
    $httpBackend.whenGET(URL).respond(BpStatusMockData);
  }

})();
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
    api.get = get

    function get() {
      return $http.get(BpStatusConfig.BASE_URL);
    }

    return api;
  }

})();
(function () {
  
  'use strict';
  
  
  angular
    .module('icontainer.features.CounterDisplay', [])
    .controller('CounterDisplayController', CounterDisplayController)
    .directive('counterdisplay', CounterDisplay);


  function CounterDisplay() {
    return {
      restrict: 'E',
      controller: 'CounterDisplayController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'static/templates/counter-display-template.html'
    };
  }


  function CounterDisplayController() {
    // vars
    var _count = 0;

    // public api
    var vm = this;
    vm.getCount = getCount;
    vm.increase = increase;
    vm.decrease = decrease;

    // private methods
    function getCount() {
      return _count;
    }

    function increase() {
      _count++;
    }

    function decrease() {
      _count--;
    }
  }

  
})();
(function () {
  
  'use strict';
  
  angular
    .module('icontainer.app.ContainerApp', [
      'icontainer.features.CounterDisplay',
      'icontainer.api.BpStatusMock'
    ]);
  
})();