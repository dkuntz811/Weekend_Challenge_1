$(document).ready(function() {
    var array = [];
    var monthlySalary = 0;
    var monthlyTotal = 0;
    var companyTotal = 0;

    //add new employee
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();








      // initialize a new variable as an empty object

      var values = {};


      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();
         for (var i = 5; i < employeeinfo.length; i++) {

         }


      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {

        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');
      //.foucs puts the cursor at the first field after the form is cleared.
      $('#employeefirstname').focus();

      // append to DOM
      appendDom(values);

      function empData () {
        var firstname = employeefirstname[0];
        var lastname = employeelastname[1];
        var id = employeeID[2];
        var title = employeetitle[3];
        var salary = Math.round(parseInt(employeesalary[4]));

      }
    });

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      var monthlySalary = employeesalary[4];
      for (var i = 0; i < employeesalary.length; i++) {


      }
      var salary = empInfo.employeesalary;
      var monthlySalary = salary /12;
      console.log(monthlySalary);

      companyTotal = Math.round(companyTotal * 100) /100 + monthlySalary;
      console.log(companyTotal);










      $el.append('<p>'  +  empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + empInfo.employeeID + ' ' + empInfo.employeetitle + '' + empInfo.employeesalary + "   Monthly Total for Company: " + companyTotal + '</p>');
    }

$('#container')

});
