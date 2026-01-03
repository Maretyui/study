$(function () {
	$('#submit').on('click', function () {
		const name = $('#name').val();

		if (name.trim() !== '') {
			$('.ausgabe strong').text(name);
		}
	});
	$('.erklaerung').hide();
	$('#content h3').on('click', function () {
		$(this).next('.erklaerung').slideToggle();
	});
});
