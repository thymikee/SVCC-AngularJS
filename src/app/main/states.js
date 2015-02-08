'use strict';

module.exports = function ($stateProvider, campTemplate) {
  $stateProvider.state('base', {
    url: '',
    template: '<div ui-view></div>',
    controller: 'MainController',
    controllerAs: 'main',
    resolve: {
      faqs: getFaqs,
      sponsors: getSponsors
    }
  });
};
module.exports.$inject = ['$stateProvider', 'campTemplateProvider'];

function getFaqs (Faqs) {
  return Faqs.fetchAll();
}
getFaqs.$inject = ['Faqs'];

function getSponsors (Sponsors) {
  return Sponsors.fetchAll();
}
getSponsors.$inject = ['Sponsors'];
