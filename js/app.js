angular.module('ionicApp', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


    $ionicConfigProvider.tabs.position("bottom");

    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'templates/search.html'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings.html'
      })
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('tabs.process', {
        url: '/process',
        views: {
          'process-tab': {
            templateUrl: 'templates/process.html',
            controller: 'ProcessCtrl'
          }
        }
      })
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "templates/home.html",
            controller: 'HomeTabCtrl'
          }
        }
      })
      .state('tabs.facts', {
        url: "/facts",
        views: {
          'home-tab': {
            templateUrl: "ftemplates/acts.html"
          }
        }
      })
      .state('tabs.facts2', {
        url: "/facts2",
        views: {
          'home-tab': {
            templateUrl: "templates/facts2.html"
          }
        }
      })
      .state('tabs.about', {
        url: "/about",
        views: {
          'about-tab': {
            templateUrl: "templates/about.html"
          }
        }
      })
      .state('tabs.navstack', {
        url: "/navstack",
        views: {
          'about-tab': {
            templateUrl: "templates/nav-stack.html"
          }
        }
      })
      .state('tabs.trade', {
        url: "/trade/:tradeId",
        views: {
          'about-tab': {
            templateUrl: "templates/trade-detail.html"
          }
        }
      })
      .state('tabs.order', {
        url: "/order/:orderId",
        views: {
          'about-tab': {
            templateUrl: "templates/order-detail.html"
          }
        }
      })
      .state('tabs.contact', {
        url: "/contact",
        views: {
          'contact-tab': {
            templateUrl: "templates/contact.html"
          }
        }
      });


    $urlRouterProvider.otherwise("/tab/process");

  });
