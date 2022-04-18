var timer;
var timer2;

function leven_verandering(life_new,wie,life_max) {
  //Calculate Green Div, And Set life_max
  var green_new = Math.round(life_new/life_max*100);

  //Request Current Green div
  var green_old = parseInt(document.getElementById(wie + '_life').style.width);
  
  //Calculate Current life
  var life_old  = Math.round(green_old/life_max);
 
  //Life is going down
  if(green_old < green_new) {
    oplopend(green_old,green_new,wie,life_old,life_new,life_max);
  }
  //Life is going up
  else if(green_old > green_new) {
    aflopend(green_old,green_new,wie,life_old,life_new,life_max);
  }
  else if (green_old == green_new) {
    clearTimeout(timer);
  }
}

// Life down function
function oplopend(green_old,green_new,wie,life,life_new,life_max) {
  //Life old is different than life new
  if(green_old != green_new) {
    
    //Green div 1px bigger
    green_old += 1;
    document.getElementById(wie + '_life').style.width = green_old + '%';

    //Do it agian
    timer = setTimeout('leven_verandering( '+ life_new + ', "'+ wie+ '", ' + life_max + ');', 5);
  }
  //life old is same as life new
  else{
    //Stop timer
    clearTimeout(timer);
  }
}

function aflopend(green_old,green_new,wie,life,life_new,life_max) {
  //Life old is different than life new
  if(green_old != green_new) {
  
    //Green div 0px smaller
    green_old -= 1;
    document.getElementById(wie + '_life').style.width = green_old + '%';
 
    //Do it agian
    timer = setTimeout('leven_verandering( '+ life_new + ', "'+ wie+ '", ' + life_max + ');', 5);
  }
  //life old is same as life new
  else{
    //Stop timer
    clearTimeout(timer);
  }
}


function exp_change(exp_new,exp_max) {

  //Calculate Blue Div, And Set life_max
  var blue_new = Math.round(exp_new/exp_max*100);

  //Request Current Blue div
  var blue_old = parseInt(document.getElementById('pokemon_exp').style.width);

  //Calculate Current life
  var exp_old  = Math.round(blue_old/exp_max);
 
  //No more than 100
  if(blue_old > 100) {
    clearTimeout(timer);
  }
  //exp is going up
  else if(blue_old < blue_new) {
    oplopend_exp(blue_old,blue_new,exp_old,exp_new,exp_max);
  }
  else if (blue_old == blue_new) {
    clearTimeout(timer);
  }
}

// Exp down function
function oplopend_exp(blue_old,blue_new,exp_old,exp_new,exp_max) {
  //Exp old is different than Exp new
  if(blue_old != blue_new) {
    
    //Blue div 1px bigger
    blue_old += 1;
    document.getElementById('pokemon_exp').style.width = blue_old + '%';

    //Do it agian
    timer = setTimeout('exp_change( '+ exp_new + ', ' + exp_max + ');', 5);
  }
  //life old is same as Exp new
  else{
    //Stop timer
    clearTimeout(timer);
  }
}

function leven_verandering2(life_new2,wie2,life_max2) {
  //Calculate Green Div, And Set life_max
  var green_new2 = Math.round(life_new2/life_max2*100);

  //Request Current Green div
  var green_old2 = parseInt(document.getElementById(wie2 + '_life').style.width);
  
  //Calculate Current life
  var life_old2  = Math.round(green_old2/life_max2);
 
  //Life is going down
  if(green_old2 < green_new2) {
    oplopend2(green_old2,green_new2,wie2,life_old2,life_new2,life_max2);
  }
  //Life is going up
  else if(green_old2 > green_new2) {
    aflopend2(green_old2,green_new2,wie2,life_old2,life_new2,life_max2);
  }
  else if (green_old2 == green_new2) {
    clearTimeout(timer2);
  }
}

// Life down function
function oplopend2(green_old2,green_new2,wie2,life2,life_new2,life_max2) {
  //Life old is different than life new
  if(green_old2 != green_new2) {
    
    //Green div 1px bigger
    green_old2 += 1;
    document.getElementById(wie2 + '_life').style.width = green_old2 + '%';

    //Do it agian
    timer2 = setTimeout('leven_verandering2( '+ life_new2 + ', "'+ wie2+ '", ' + life_max2 + ');', 5);
  }
  //life old is same as life new
  else{
    //Stop timer
    clearTimeout(timer2);
  }
}

function aflopend2(green_old2,green_new2,wie2,life2,life_new2,life_max2) {
  //Life old is different than life new
  if(green_old2 != green_new2) {
  
    //Green div 0px smaller
    green_old2 -= 1;
    document.getElementById(wie2 + '_life').style.width = green_old2 + '%';
 
    //Do it agian
    timer2 = setTimeout('leven_verandering2( '+ life_new2 + ', "'+ wie2+ '", ' + life_max2 + ');', 5);
  }
  //life old is same as life new
  else{
    //Stop timer
    clearTimeout(timer2);
  }
}