angular.module('core').factory('ValidationService', function () {
  
  return { 
    validate: function(fields, errors) {
      fields.filter(function(field) {
        delete field.error;
        field.error = (errors.hasOwnProperty(field.name)) ? errors[field.name][0] : null;
      });

      return fields
    }

  };

});
