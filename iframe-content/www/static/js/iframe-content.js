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
      console.log('jQuery: ', jQuery);

      // FIXME: an error is thrown with the $('body') function
      var parentWindow = $window.parent;
      console.log('parentWindow: ', parentWindow);

      var parentBody = parentWindow.$('body');
      console.log('parentBody: ', parentBody);

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
(function () {
  
  'use strict';
  
  
  angular
    .module('icontent.proxies.BPStatusProxy', [
      'icontent.services.ParentInjector'
    ])
    .factory('bpStatusProxy', BPStatusProxy);


  /* ngInject */
  function BPStatusProxy(parentInjector) {
    var _proxy = parentInjector.get('bpStatus');
    return _proxy;
  }

  
})();
(function () {
  
  angular
    .module('icontent.features.APITester', [
      'icontent.proxies.BPStatusProxy'
    ])
    .controller('APITesterController', APITesterController)
    .directive('apitester', APITester);


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
(function () {
  
  angular
    .module('icontent.features.IFrameContent', [
      'icontent.features.APITester'
    ])
    .controller('IFrameContentController', IFrameContentController)
    .directive('iframecontent', IFrameContent);


  function IFrameContent() {
    return {
      restrict: 'E',
      controller: 'IFrameContentController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'static/templates/iframe-content-template.html'
    };
  }


  function IFrameContentController() {
    // vars
    var _states = {
      ON: 'on',
      OFF: 'off'
    }
    var _state = _states.ON;

    // public api
    var vm = this;
    vm.turnOn = turnOn;
    vm.turnOff = turnOff;
    vm.getCurrentState = getCurrentState;
    vm.isOn = isOn;
    vm.isOff = isOff;

    // private methods
    function turnOn() {
      _state = _states.ON;
    }

    function turnOff() {
      _state = _states.OFF;
    }

    function getCurrentState() {
      return _state;
    }

    function isOn() {
      return _state === _states.ON;
    }

    function isOff() {
      return _state === _states.OFF;
    }
  }
  
})();
(function () {
  
  'use strict';
  
  angular
    .module('icontent.app.IframeApp', [
      'icontent.features.IFrameContent'
    ]);
  
})();