(function () {
  
  angular
    .module('icontent.features.APITester', [
      'icontent.proxies.BPStatusProxy'
    ])
    .controller('APITesterController', APITesterController)
    .directive('apitester' APITester);


  function APITester() {
    return {
      restrict: 'E',
      controller: 'APITesterController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'static/templates/api-tester-template.html'
    };
  }


  function APITesterController(bpStatusProxy) {
    // public api
    var vm = this;
    vm.test = test;

    // private methods
    function test() {
      console.log('--- icontent.features.APITester:test ---');
      
      if(bpStatusProxy) {
        bpStatusProxy.test();
      
      } else {
        console.error('The bpStatusProxy is not defined. Are you forgetting that this page needs to live in an iframe?');
      }
    }
  }

  
})();