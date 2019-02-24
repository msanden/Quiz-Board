//business-logic


//user-interface logic
$(document).ready(function() {
  $('.clickable').click(function() {
    $('#initially-hidden').toggle();
    $('#initially-showing').toggle();
  });
});


$(document).ready(function(){
  $('input[type="button"]').click(function(event){
    var q1 = parseInt($('input[name="one"]:checked').val());
    var q2 = parseInt($('input[name="two"]:checked').val());
    var q3 = parseInt($('input[name="three"]:checked').val());
    var q4 = parseInt($('input[name="four"]:checked').val());
    var q5 = parseInt($('input[name="five"]:checked').val());
    var q6 = parseInt($('input[name="six"]:checked').val());
    var q7 = parseInt($('input[name="seven"]:checked').val());
    var q8 = parseInt($('input[name="eight"]:checked').val());
    var q9 = parseInt($('input[name="nine"]:checked').val());
    var q10 = parseInt($('input[name="ten"]:checked').val());

    var total = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;

    if (total<50) {
      $("#display").text('You scored '+ total+' points. Test again for a higher score.');
    }
    else if (total>=50 && total<80) {
      $("#display").text('You scored '+ total+' points. Good.');
    }
    else if (total>=80) {
      $("#display").text('You scored '+ total+' points. Excellent.');
    }
    else {
      $("#display").text('Answer all questions to receive a score.');
    }
    event.preventDefault();
  });
});

/*
$(document).ready(function(){

  $('input[type="button"]').click(function(event){
    alert(cow);
    var selections = ['one','two','three','four','five','six','seven','eight',
    'nine','ten'];

    selections.forEach(function(selection) {
      var userSelects = parseInt($('input[name= '+selection+':checked').val());
    });

    userSelects.forEach(function(userSelect) {
      total += userSelect;
    });
    alert(total);

  });
});

/*var userSelects = [queOne, queTwo, queThree, queFour, queFive, queSix,
  queSeven, queEight, queNine, queTen];

selections.forEach(function(selection) {
  var userSelects = parseInt($('input[name= '+selection+':checked').val());
});

userSelects.forEach(function(userSelect) {
  total += userSelect;
});
alert(total); */
