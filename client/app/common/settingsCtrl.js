/*@ngInject*/
module.exports = function ($rootScope, $scope, commonService, modal, toast, device) {
  $scope.download   = function (url) {
    modal.confirm('确认前往下载页面吗？', function () {
      device.openBrowser(url);
    });
  };
  $scope.checkUpdate = function () {
    toast.success('当前是最新版本');
  };
  $scope.clearCache = function () {
    modal.confirm('确认清除缓存吗？', function () {
      commonService.clearCache().then(function () {
        toast.success('成功清除缓存');
      }, function () {
        toast.error('清除缓存失败');
      });
    });
  }
};