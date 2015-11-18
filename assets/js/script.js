/*Script for navigation bar. */

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

function navHoverOn(name) {
    $('#' + name + '-left').fadeTo(100, 1, function(){ $('#' + name + '-left').css('visibility', 'visible'); });
    $('#' + name + '-right').fadeTo(100, 1, function(){ $('#' + name + '-right').css('visibility', 'visible'); });
}
function navHoverOff(name) {
    if (!$('#' + name + '-left').hasClass('current-selected')) {
        $('#' + name + '-left').fadeTo(100, 0, function(){ $('#' + name + '-left').css('visibility', 'hidden'); });
        $('#' + name + '-right').fadeTo(100, 0, function(){ $('#' + name + '-right').css('visibility', 'hidden'); });
    }
   
}

/* Script for footer. */