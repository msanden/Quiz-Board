//business-logic



//code for gathering user input: user-interface logic
$(document).ready(function() {
  $('.clickable').click(function() {
    $('#initially-hidden').toggle();
    $('#initially-showing').toggle();
  });
});

$(document).ready(function(){
  $('input[type="button"]').click(function(event){
    var queGroups = ['one','two','three','four','five','six','seven','eight','nine','ten'];
    var userChoices = [];
    queGroups.forEach(function(queGroup) {
      userChoices.push(parseInt($('input[name=' + queGroup + ']:checked').val()));
    });

    var total = 0;
    for (var index = 0; index < userChoices.length; index ++) {
      total += userChoices[index];
    }

    if (total<50) {
      $("#display").text('You scored '+ total+' points. Test again for a higher score.');
    }
    else if (total>=50 && total<80) {
      $("#display").text('You scored '+ total+' points, Good.');
    }
    else if (total>=80) {
      $("#display").text('You scored '+ total+' points, Excellent.');
    }
    else {
      $("#display").text('Answer all questions to receive a score.');
    }
    event.preventDefault();
  });
});


/* Code before re-factoring
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
  })
*/
