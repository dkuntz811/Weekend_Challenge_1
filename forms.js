var myApp = angular.module("myApp", []);

$scope.employees = [];
$scope.newEmployee = {};
$scope.totalSalary = 0;


myApp.controller("MyController", ["$scope", function ($scope){
     console.log("mycontroller is working");

$scope.addEmp = function () {
   $scope.employees.salary=parseInt($scope.employees.salary);

   $scope.totalSalary += Math.round(scope.employees.salary/12);
   $scope.newEmployee.push($scope.employees);

   $scope.employees{};
 }

 $scope.removeEmployee = function(index){
   $scope.totalSalary -= Math.round(employee.salary/12);
   $scope.employees.splice(index, 1);
 }
    // $scope.employees.push({
    //   firstname: $scope.employeefirstname,
    //   lastname: $scope.employeelastname,
    //   ID: $scope.employeeid,
    //   title: $scope.employeetitle,
    //   salary: $scope.employeesalary,
    //   employee = new Employee(firstname, lastname, id, title, salary);
    //   employees.push(employee);
    //   $scope.employees=employees;
    //    console.log('employees in', employees);
    //   getSalaries(salary);
    // });

// }
//
//    function getSalaries(salary){
//      var check = parseFloat(salary);
//      totalSalary += check;
//      monthlySalary = totalSalary/12;
//      $scope.totalSalary=totalSalary;
//      $scope.monthlySalary=monthlySalary;
//    }

  }]);



//   $scope.items = [];
//
//   $scope.itemsToAdd = [{
//     firstName: '',
//     lastName: ''
//
//
//   $scope.add = function(itemToAdd) {
//
//     var index = $scope.itemsToAdd.indexOf(itemToAdd);
//
//     $scope.itemsToAdd.splice(index, 1);
//
//     $scope.items.push(angular.copy(itemToAdd))
//   }
//
//   $scope.addNew = function() {
//
//     $scope.itemsToAdd.push({
//       firstName: '',
//       lastName: ''
//     })
//   }
// });






//           var values = {};
//           //
//           //       // convert the form inputs into an array
//           var fields = $('#employeeinfo').serializeArray();
//              or ($scope.var i = 5; i < employeeinfo.length; i++);
//
//           $scope.fields.forEach(function(element, index, array) {
//
//                      // review index notation vs. dot notation on objects
//                      // here, dot notation wouldn't work
//           $scope.values[element.name] = element.value;
//           });
//



// $(document).ready(function() {
//     var array = [];
//     var monthlySalary = 0;
//     var monthlyTotal = 0;
//     var companyTotal = 0;

    // add new employee
    // $('#employeeinfo').on('submit', function(event) {
    //   event.preventDefault();

      // initialize a new variable as an empty object

      // var values = {};
      //
      // // convert the form inputs into an array
      // var fields = $('#employeeinfo').serializeArray();
      //    for (var i = 5; i < employeeinfo.length; i++) {
      //
      //    }

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.


//       console.log(values);
//
//       // clear out inputs
//
//       appendDom(values);
//
//
//     function appendDom(empInfo) {
//       $('#container').append('<div class="person"></div>');
//       var $el = $('#container').children().last();
//
//       var monthlySalary = employeesalary[4];
//       for (var i = 0; i < employeesalary.length; i++) {
//
//
//       }
//       var salary = empInfo.employeesalary;
//       var monthlySalary = salary /12;
//       console.log(monthlySalary);
//
//       companyTotal = Math.round(companyTotal * 100) /100 + monthlySalary;
//       console.log(companyTotal);
//
//
//       $el.append('<p>'  +  empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + empInfo.employeeID + ' ' + empInfo.employeetitle + '' + empInfo.employeesalary + "   Monthly Total for Company: " + companyTotal + '</p>');
//     }
//
// $('#container')
//
// });
