// Check of Specific Todos By Clicking
$('ul').on('click', 'li', function() {
	//shorter version
	//make a completed css class and use toggleClass fnc
	$(this).toggleClass('completed');

	/*long version
	//if li is gray
	if ($(this).css('color') === 'rgb(128, 128, 128)') {
		//turn it black
		$(this).css({
			color: 'black',
			textDecoration: 'none'
		});
	} else {
		//else
		//turn it gray
		$(this).css({
			color: 'gray',
			textDecoration: 'line-through'
		});
    }*/
});
//Click on delete to delete todo
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});
// add todos by hitting enter
$('input:text').keypress(function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val('');
		//create a new li and add to ul
		$('ul').append('<li><span> <i class="fa fa-trash"></i> </span>' + todoText + '</li>');
	}
});
//show/hide input
$('h1').on('click', 'span', function() {
	$('input').remove();
});

$('.fa-plus').click(function() {
	$('input:text').fadeToggle();
});
