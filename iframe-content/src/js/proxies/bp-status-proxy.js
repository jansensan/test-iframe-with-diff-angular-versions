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