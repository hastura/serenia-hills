

jQuery(document).ready(function($) {
		// regent-carousel
		$('#regentCarousel').carousel({
			interval: 5000
		});

		$('[id^=regent-carousel-selector-]').click(function () {
		var id_selector = $(this).attr("id");
		try {
			var id = /-(\d+)$/.exec(id_selector)[1];
			console.log(id_selector, id);
			jQuery('#regentCarousel').carousel(parseInt(id));
		} catch (e) {
			console.log('Regex failed!', e);
		}
		});

		$('#regentCarousel').on('slid.bs.carousel', function (e) {
			var id = $('.item.active').data('slide-number');
			$('#carousel-text').html($('#slide-content-'+id).html());
		});

		// signature-carousel
		$('#signatureCarousel').carousel({
			interval: 5000
		});

		$('[id^=signature-carousel-selector-]').click(function () {
		var id_selector = $(this).attr("id");
		try {
			var id = /-(\d+)$/.exec(id_selector)[1];
			console.log(id_selector, id);
			jQuery('#signatureCarousel').carousel(parseInt(id));
		} catch (e) {
			console.log('Regex failed!', e);
		}
		});

		$('#signatureCarousel').on('slid.bs.carousel', function (e) {
			var id = $('.item.active').data('slide-number');
			$('#carousel-text').html($('#slide-content-'+id).html());
		});
		// titan-carousel
		$('#titanCarousel').carousel({
			interval: 5000
		});

		$('[id^=titan-carousel-selector-]').click(function () {
		var id_selector = $(this).attr("id");
		try {
			var id = /-(\d+)$/.exec(id_selector)[1];
			console.log(id_selector, id);
			jQuery('#titanCarousel').carousel(parseInt(id));
		} catch (e) {
			console.log('Regex failed!', e);
		}
		});

		$('#titanCarousel').on('slid.bs.carousel', function (e) {
			var id = $('.item.active').data('slide-number');
			$('#carousel-text').html($('#slide-content-'+id).html());
		});
		// ultimate-carousel
		$('#ultimateCarousel').carousel({
			interval: 5000
		});

		$('[id^=ultimate-carousel-selector-]').click(function () {
		var id_selector = $(this).attr("id");
		try {
			var id = /-(\d+)$/.exec(id_selector)[1];
			console.log(id_selector, id);
			jQuery('#ultimateCarousel').carousel(parseInt(id));
		} catch (e) {
			console.log('Regex failed!', e);
		}
		});

		$('#ultimateCarousel').on('slid.bs.carousel', function (e) {
			var id = $('.item.active').data('slide-number');
			$('#carousel-text').html($('#slide-content-'+id).html());
		});
		// venture-carousel
		$('#ventureCarousel').carousel({
			interval: 5000
		});

		$('[id^=venture-carousel-selector-]').click(function () {
		var id_selector = $(this).attr("id");
		try {
			var id = /-(\d+)$/.exec(id_selector)[1];
			console.log(id_selector, id);
			jQuery('#ventureCarousel').carousel(parseInt(id));
		} catch (e) {
			console.log('Regex failed!', e);
		}
		});

		$('#ventureCarousel').on('slid.bs.carousel', function (e) {
			var id = $('.item.active').data('slide-number');
			$('#carousel-text').html($('#slide-content-'+id).html());
		});
});