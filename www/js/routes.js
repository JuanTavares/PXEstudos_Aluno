angular.module('app')

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('menu.meuPerfil', {
                url: '/meuPerfil',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/meuPerfil.html',
                        controller: 'meuPerfilCtrl'
                    }
                }
            })

            .state('menu.minhasTurmas', {
                url: '/minhasTurmas',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/minhasTurmas.html',
                        controller: 'minhasTurmasCtrl'
                    }
                }
            })

            .state('menu.materiaEscolhida', {
                url: '/materiaEscolhida',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/materiaEscolhida.html',
                        controller: 'materiaEscolhidaCtrl'
                    }
                }
            })

            .state('menu.aulaEscolhida', {
                url: '/aulaEscolhida',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/aulaEscolhida.html',
                        controller: 'aulaEscolhidaCtrl'
                    }
                }
            })

            .state('menu.minhaAgenda', {
                url: '/minhaAgenda',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/minhaAgenda.html',
                        controller: 'minhaAgendaCtrl'
                    }
                }
            })

            .state('menu', {
                url: '/side-menu',
                templateUrl: 'templates/menu.html',
                controller: 'menuCtrl'
            })

            .state('login', {
                url: '/telaLogin',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('signup', {
                url: '/telaSignup',
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            })
            .state('menu.editarPerfil', {
                url: '/editarPerfil',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/editarPerfil.html',
                        controller: 'editarPerfilCtrl'
                    }
                }
            })

        $urlRouterProvider.otherwise('/telaLogin')


    });