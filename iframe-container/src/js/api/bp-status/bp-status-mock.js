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