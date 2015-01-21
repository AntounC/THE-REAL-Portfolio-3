 



$("document").ready(function(){
    $(".youtypewhatitis").css("background-color", "yellow");
 
    $('#swage').css({"background-color": "green", "color": "white"});
    $('#oneButton').bind('click', alertButtonClick);
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('h1').bind('click', mouseClick);
    
    $('#superHumans').accordion({header: "h3"});
            
   

   $('#replaceWText').bind('click', replaceWText);
   $('#randPara').bind('click', addAPara);
   $('#removePara').bind('click', removeAPara);
   
 });  
   
   


function mouseOverMe() {
    $("h1").html("IT'S JOOSE N JAM TIME");
}
/*Declares the text that is show once the mouse hovers over a certain area*/

function mouseOutMe() {
    $('h1').html('SPR MLG WOOWWWWM SPR SANIC SPDDD');
}
/*Declares the text that will appear once the mouse has hovered over a certain spot and left that spot*/

function mouseClick() {
    $('p').html('SPR SMASH BORS 4 WIE YU N TREE D ES');

}

function alertButtonClick() {
    
}
/*Has Jquery listen for a button click*/

function addAPara() {
    $('#randPara').append(' Rest In Programming');
}
/*Declares that the element with the ID randpara is going to be added*/

 function removeAPara() {
    $('#randPara').remove();
}

/*Declares the ID randpara as the paragraph that is going to be removed*/

function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}
