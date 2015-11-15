var clipboardApp = angular.module('clipboardApp', []);

clipboardApp.controller('clipboardCtrl', function ($scope) {
  $scope.copies = [
    {'number': '1',
     'name': 'Name 1',
     'description': 'Description 1',
     'paste': 'Paste 1'},
    {'number': '2',
      'name': 'Name 2',
      'description': 'Description 2',
      'paste': 'Paste 2' },
    {'number': '3',
      'name': 'Name 3',
      'description': 'Description 3',
      'paste': 'Paste 3'},
    {'number': '4',
        'name': 'Name 4',
        'description': 'Description 4',
        'paste': 'Paste 4'},
    {'number': '5',
        'name': 'Name 5',
        'description': 'Description 5',
        'paste': 'Paste 5'},
    {'number': '6',
        'name': 'Name 6',
        'description': 'Description 6',
        'paste': 'Paste 6'},
    {'number': '7',
        'name': 'Name 7',
        'description': 'Description 7',
        'paste': 'Paste 7'},
    {'number': '8',
        'name': 'Name 8',
        'description': 'Description 8',
        'paste': 'Paste 8'},
    {'number': '9',
        'name': 'Name 9',
        'description': 'Description 9',
        'paste': 'Paste 9'},
    {'number': '9',
        'name': 'Name 9',
        'description': 'Description 9',
        'paste': 'Paste 9'},
    {'number': '10',
        'name': 'Name 10',
        'description': 'Description 10',
        'paste': 'Paste 10'},
    {'number': '11',
        'name': 'Name 11',
        'description': 'Description 11',
        'paste': 'Paste 11'},

      ];

    $scope.showDetails = function(name, paste){
        $scope.textName = name;
        $scope.pasteText = paste;
       };



});
