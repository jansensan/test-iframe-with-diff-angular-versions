(function () {

  angular.module('ic.api.BpStatusMockData', []);

  var BpStatusMockData = [];

  angular.module('ic.api.BpStatusMockData')
    .value('BpStatusMockData', BpStatusMockData);
    
})();

(function () {
  angular
    .module('ic.api.BpStatusMock', [
      'ngMockE2E',
      'ic.api.BpStatusMockData',
      'ic.api.BpStatus'
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
  * @name ic.api.BpStatus:bpStatus
  *
  */
  angular
    .module('ic.api.BpStatus', [])
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
    .module('net.jansensan.test.CounterDisplay', [])
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
    .module('net.jansensan.tests.ContainerApp', [
      'net.jansensan.test.CounterDisplay',
      'ic.api.BpStatusMock'
    ]);
  
})();