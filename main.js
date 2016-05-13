// Add your JS here.

var hideMe = $('.hideMe');

hideMe.click(function(e) {
    console.log('Hiding!', e);
    e.stopPropagation();
    hideMe.hide();
});

$('body').click(function(e) {
    console.log('Showing!', e);
    hideMe.show();
});

var cute = $('.cute');

// cute.on('click', function() {
// 	// $('#container').append($(this).clone());
// 	var $this = $(this);
// 	var imgCopy  = $this.clone();

// 	$this.after(imgCopy);
// });

cute.on('click', function() {
    // $('#container').append($(this).clone());
    $(this).after($(this).clone());
});

// Three types of CSS hierarchy stuffs
//
// ul > li
// 
// 
// Descendent: .parent .any-child
// Child:      .parent > .direct-child
// After:      .sibling ~ .any-other-sibling-after
// Adjacent:   .sibling + .next

var $list = $('.removal .list');

$('.changeColor').click(function() {
	var newColor = {
		color: 'red'
	};

	$('li:nth-child(3)').css(newColor);
});

var count = 0;
var $fourthItem = $($list.children()[3]);

$fourthItem.click(function() {
	// var newItem = $('<li>I\'m a new item!</li>');
	var copy = $fourthItem.clone()
	$fourthItem.after(copy);
});


// var second = $('.list :nth-child(2)');
// $('#removeLi').click(function() {
// 	second.remove();
// });

var removedSecond = false;
$('#removeLi').click(removeLi);

function removeLi() {
	if (!removedSecond) {
		$('.removal .list :nth-child(2)').remove();
		removedSecond = true;
	}
}
