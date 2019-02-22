//business-logic


//user-interface logic
$(document).ready(function(){
  $('input[type="button"]').click(function(event){
    var queOne = parseInt($('input[name="one"]:checked').val());
    var queTwo = parseInt($('input[name="two"]:checked').val());
    var queThree = parseInt($('input[name="three"]:checked').val());
    var queFour = parseInt($('input[name="four"]:checked').val());
    var queFive = parseInt($('input[name="five"]:checked').val());
    var queSix = parseInt($('input[name="six"]:checked').val());
    var queSeven = parseInt($('input[name="seven"]:checked').val());
    var queEight = parseInt($('input[name="eight"]:checked').val());
    var queNine = parseInt($('input[name="nine"]:checked').val());
    var queTen = parseInt($('input[name="ten"]:checked').val());

    /*var userSelects = [queOne, queTwo, queThree, queFour, queFive, queSix,
      queSeven, queEight, queNine, queTen];*/

    var total = queOne+queTwo+queThree+queFour+queFive+queSix+queSeven+queEight+queNine+queTen;

    //alert('Your Score is '+total);
    $("#display").text(total);

  /*  userSelects.forEach(function(userSelect) {
      total += userSelect;
    });
    alert(total);*/

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

selections.forEach(function(selection) {
  var userSelects = parseInt($('input[name= '+selection+':checked').val());
});

userSelects.forEach(function(userSelect) {
  total += userSelect;
});
alert(total); */
