/*** Script for navigation bar. ***/
function navHoverOn(name) {
    $('#' + name + '-left').fadeTo(100, 1, function(){ 
    	$('#' + name + '-left').css('visibility', 'visible'); });
    $('#' + name + '-right').fadeTo(100, 1, function(){ 
    	$('#' + name + '-right').css('visibility', 'visible'); });
}
function navHoverOff(name) {
    if (!$('#' + name + '-left').hasClass('current-selected')) {
        $('#' + name + '-left').fadeTo(100, 0, function(){ 
        	$('#' + name + '-left').css('visibility', 'hidden'); });
        $('#' + name + '-right').fadeTo(100, 0, function(){ 
        	$('#' + name + '-right').css('visibility', 'hidden'); });
    }
}
$('#home').hover(function() { navHoverOn('home');
}, function() {navHoverOff('home'); });
$('#about').hover(function() { navHoverOn('about');
}, function() {navHoverOff('about'); });
$('#profession').hover(function() { navHoverOn('profession');
}, function() {navHoverOff('profession'); });
$('#projects').hover(function() { navHoverOn('projects');
}, function() {navHoverOff('projects'); });
$('#passions').hover(function() { navHoverOn('passions');
}, function() {navHoverOff('passions'); });
$('#contact').hover(function() { navHoverOn('contact');
}, function() {navHoverOff('contact'); });

/*** Script for home page. ***/
function photo1() {
    $('#picture-content').attr('src', 'assets/images/photo1.jpg');
    $('#caption').text('Celebrating at a family wedding.');
}
function photo2() {
    $('#picture-content').attr('src', 'assets/images/photo2.jpg');
    $('#caption').text('Jumping at the beach.');
}
function photo3() {
    $('#picture-content').attr('src', 'assets/images/photo3.jpg');
    $('#caption').text('Dance showcase from High School.');
}
function photo4() {
    $('#picture-content').attr('src', 'assets/images/photo4.jpg');
    $('#caption').text('Exploring in Dublin, Ireland.');
}
function photo5() {
    $('#picture-content').attr('src', 'assets/images/photo5.jpg');
    $('#caption').text('Dance photoshoot with AFX Dance.');
}
function photo6() {
    $('#picture-content').attr('src', 'assets/images/photo6.jpg');
    $('#caption').text('Ballet photoshoot at UC Berkeley.');
}
$('#left-arrow').click( function() {
    var currPhoto = $('#picture-content').attr('src');  
    if (currPhoto == 'assets/images/photo1.jpg') {
        photo6();
    } else if (currPhoto == 'assets/images/photo2.jpg') {
        photo1();
    } else if (currPhoto == 'assets/images/photo3.jpg') {
        photo2();
    } else if (currPhoto == 'assets/images/photo4.jpg') {
        photo3();
    } else if (currPhoto == 'assets/images/photo5.jpg') {
        photo4();
    } else if (currPhoto == 'assets/images/photo6.jpg') {
        photo5();
    }
} );
$('#right-arrow').click( function() {
    var currPhoto = $('#picture-content').attr('src');
    if (currPhoto == 'assets/images/photo1.jpg') {
        photo2();
    } else if (currPhoto == 'assets/images/photo2.jpg') {
        photo3();
    } else if (currPhoto == 'assets/images/photo3.jpg') {
        photo4();
    } else if (currPhoto == 'assets/images/photo4.jpg') {
        photo5();
    } else if (currPhoto == 'assets/images/photo5.jpg') {
        photo6();
    } else if (currPhoto == 'assets/images/photo6.jpg') {
        photo1();
    }
});

/*** Script for about page. ***/
$("#carousel-next").click(function() {
    var placement = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (placement == -3840) {
      return false; 
    } else {
      $("#carousel").css("margin-left", placement - 960 + "px");
    }
});
$("#carousel-prev").click(function() {
    var placement = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (placement == 0) {
      return false;
    } else {
      $("#carousel").css("margin-left", placement + 960 + "px");
    }
});

/*** Script for passions page. ***/
function toggleImg(name) {
    if ($('#' + name).hasClass('content-item-active')) {
        $('#' + name).removeClass('content-item-active');
    } else {
        $('#' + name).addClass('content-item-active');
    }
}
function toggleContent(name) {
    if ($('#' + name + '-content').hasClass('content-active')) {
        $('#' + name + '-content').removeClass('content-active');
    } else {
        $('#' + name + '-content').addClass('content-active');
    }   
}
$('#music').click(function() {
    toggleImg('music');
    toggleContent('music');
});
$('#faith').click(function() {
    toggleImg('faith');
    toggleContent('faith');
});
$('#dance').click(function() {
    toggleImg('dance');
    toggleContent('dance');
});
