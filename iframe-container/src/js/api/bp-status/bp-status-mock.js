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
    $httpBackend.whenGET(URL).respond(BpStatusMockData);
  }

})();