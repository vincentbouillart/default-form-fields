(function(ng) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
    module.directive('addOptions', [
        function addOptionsDirective() {
            return {
                restrict:'E',
                templateUrl:'templates/addOptionsTemplate.html',
                require:'ngModel',
                controllerAs:'ctrl',
                scope:{
                  ngModel:'=',
                  rerender:'&'
                },
                link:function($scope,$element,$attr){                    
                },
                controller:["$scope",function($scope){
                   this.addOption= function(){
                       if(!$scope.ngModel){
                           $scope.ngModel = [];
                       }
                      $scope.ngModel.push({key:'',label:''});
                   }   
                }]
            };
        }
    ]);
})(window.angular);
;(function(ng) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
    module.service('tinkDropdownField', [
        function frFieldTypeTextService() {
            return {
                name: "tinkDropdownField",
                label: 'Tink dropdown',
                templateUrl: 'templates/tinkDropDown.html',
                wrapper:['tinkFieldWrapper'],
                viewWrapper:['frViewField'],
                ngModel:[],
                controller: function ($scope) {
                    function initialize() {
                        if (!$scope.field.state.editMode && _.isString($scope.ngModelInit)) {
                            $scope.ngModelInit = [];
                        }
                    }
                    initialize();
                },
                optionTemplate:'templates/options/tinkDropDown.html'
            };
        }
    ]);
})(window.angular);
;(function(ng) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
    module.service('fieldTypeText', [
        function frFieldTypeTextService() {
            return {
                name: "tinkText",
                label: 'Tink text',
                templateUrl: 'templates/tinkText.html',
                wrapper:['tinkFieldWrapper'],
                viewWrapper:['frViewField'],
                optionTemplate:'templates/options/tinkText.html'
            };
        }
    ]);
})(window.angular);
;(function(ng) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
    module.service('fieldTypeLabel', [
        function frLabelTypeTextService() {
            return {
                name: "tinkLabel",
                label: 'Tink label',
                templateUrl: 'templates/tinkLabel.html',
                wrapper:['frFieldWrapper'],
                viewWrapper:['frViewField'],
                optionTemplate:'templates/options/tinkLabel.html'
            };
        }
    ]);
})(window.angular);
;(function(ng, _) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
  
  module.service('defaultFields', [function() {
      return{
          getFields:function(){
              return [
                  "fieldTypeText",
                  "tinkDropdownField",
                  "fieldTypeLabel"
              ]
          },
          getWrappers:function(){
              return [
                        {
                            name: 'tinkFieldWrapper',
                            templateUrl: 'templates/tinkWrapper.html',
                        }
              ]
          }
      }
  }])
})(window.angular, window._);;angular.module('defaultFields').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/addOptionsTemplate.html',
    "<div class=form-group> <label for=Choises>Choises<i ng-click=ctrl.addOption() class=\"fa fa-plus-square\"></i></label> <div class=row ng-repeat=\"option in ngModel\"> <div class=\"col-sm-5 col-md-5\" class=form-group> <label for=Key{{$index}}>Key</label> <input ng-model-options=\"{ updateOn: 'blur' }\" ng-model=option.key type=text id=Key{{$index}}> </div> <div class=\"col-sm-5 col-md-5\" class=form-group> <label for=Label{{$index}}>Label</label> <input ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=option.label type=text id=Label{{$index}}> </div> <div class=\"col-sm-2 col-md-2\"> <i ng-click=ctrl.removeOption(option) class=\"fa fa-minus-circle\"></i> </div> </div> </div>"
  );


  $templateCache.put('templates/options/tinkDropDown.html',
    " <div class=form-group> <label for=question>Question</label> <textarea ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" id=question ng-model=field.label placeholder=question rows=2></textarea> </div> <div class=form-group> <label for=description>Description</label> <textarea ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.shortDescription id=description placeholder=description rows=2></textarea> </div> <div class=form-group> <label for=extraInfo>Extra information</label> <textarea ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.extraInfo id=extraInfo placeholder=extraInfo rows=2></textarea> </div> <div class=checkbox> <input ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.required type=checkbox id=Required name=Required checked> <label for=Required>Required</label> </div> <add-options ng-change=rerender() rerender=rerender() ng-model=field.extraOptions.options> </add-options>"
  );


  $templateCache.put('templates/options/tinkLabel.html',
    "<div class=form-group> <label for=question>Label</label> <textarea ng-change=rerender() required ng-model-options=\"{ updateOn: 'blur' }\" id=question ng-model=field.label placeholder=question rows=2></textarea> </div>"
  );


  $templateCache.put('templates/options/tinkText.html',
    " <div class=form-group> <label for=question>Question</label> <textarea ng-change=rerender() required ng-model-options=\"{ updateOn: 'blur' }\" id=question ng-model=field.label placeholder=question rows=2></textarea> </div>  <div class=form-group> <label for=placeholder>placeholder</label> <input ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.placeholder type=text id=placeholder> </div>  <div class=form-group> <label for=description>Description</label> <textarea ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.shortDescription id=description placeholder=description rows=2></textarea> </div>  <div class=form-group> <label for=extraInfo>Extra information</label> <textarea ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.extraInfo id=extraInfo placeholder=extraInfo rows=2></textarea> </div>  <div class=checkbox> <input ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.required type=checkbox id=Required name=Required checked> <label for=Required>Required</label> </div>  <div class=form-group> <label for=extra>extra</label> <input ng-change=rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.extraOptions.extraInfo type=text id=extra name=extra> </div>"
  );


  $templateCache.put('templates/tinkDropDown.html',
    "<div class=fr-field-state-read-wrapper data-ng-show=!field.state.editMode> <a data-ng-click=field.toggleEditMode() data-ng-if=field.state.showEditButton href=\"\">wijzigen</a> </div> <div class=fr-field-state-write-wrapper data-ng-show=field.state.editMode> <div data-ng-class=\"{'fr-field-input-group': field.to.unit}\"> <div class=select> <select fr-validation validation=field.validation id=\"{{ field.attrs.id }}\" name=\"{{ field.attrs.name }}\" data-ng-model=ngModel placeholder=\"{{ field.attrs.placeholder }}\" data-ng-disabled=field.state.disabled ng-options=\"option as option.label for option in field.spec.extraOptions.options track by option.key\"> </select> </div> <span ng-if=field.to.unit class=fr-field-unit ng-bind-html=field.to.unit></span> </div> <a href=\"\" ng-click=field.toggleEditMode() data-ng-if=field.state.showEditButton>annuleren</a> </div>"
  );


  $templateCache.put('templates/tinkLabel.html',
    "<p data-ng-bind=field.to.label></p>"
  );


  $templateCache.put('templates/tinkText.html',
    "<div class=fr-field-state-read-wrapper data-ng-show=!field.state.editMode> {{ngModelInit}} {{field.to.unit}}\n" +
    "<a data-ng-click=field.toggleEditMode() data-ng-if=field.state.showEditButton href=\"\">wijzigen</a> </div> <div class=fr-field-state-write-wrapper data-ng-show=field.state.editMode> <div data-ng-class=\"{'fr-field-input-group': field.to.unit}\"> <h1 ng-if=field.spec.extraOptions.extraInfo>{{field.spec.extraOptions.extraInfo}}</h1> <input fr-validation validation=field.validation id=\"{{ field.attrs.id }}\" name=\"{{ field.attrs.name }}\" class=fr-control type=text data-ng-model=ngModel placeholder=\"{{ field.attrs.placeholder }}\" data-ng-disabled=\"field.state.disabled\">\n" +
    "<span ng-if=field.to.unit class=fr-field-unit ng-bind-html=field.to.unit></span> </div> <a href=\"\" ng-click=field.toggleEditMode() data-ng-if=field.state.showEditButton>annuleren</a> </div>"
  );


  $templateCache.put('templates/tinkWrapper.html',
    "<div class=form-group> <label data-ng-show=\"field.to.label.length > 0 && field.to.displayLabel\" data-ng-class=\"{required: field.validation.required != undefined && field.validation.required}\" for=\"{{ field.attrs.id }}\">{{field.to.label}}</label> <span class=fr-toggle-extraInfo data-ng-if=\"field.to.extraInfo.length > 0\"> <a data-ng-click=\"options.state.extraInfoCollapsed = !options.state.extraInfoCollapsed\"> {{ options.state.extraInfoCollapsed ? 'Hulp nodig?' : 'Sluiten' }} </a> </span> <fr-transclude></fr-transclude> <span class=help-block>{{field.spec.extraOptions.extraInfo}}</span> </div> <div fr-messages=field.validation.error></div> <small data-ng-show=\"field.to.shortDescription.length > 0 && field.state.editMode\" data-ng-bind=field.to.shortDescription></small> <div class=fr-extraInfo data-ng-show=\"field.to.extraInfo.length > 0 && !options.state.extraInfoCollapsed\" data-ng-bind-html=field.to.extraInfo></div>"
  );

}]);
