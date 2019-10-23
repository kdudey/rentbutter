$('#submit-form').on('click', function(e) {
	e.preventDefault();
    var url = 'https://script.google.com/macros/s/AKfycbzo_R_BAwXiLNzEc3dDRYBh556EoA5AJXPCW3Ox5aAIemN8xVs/exec';

    var jhemail = $('#JH_email').val(); 
    var jhcompany = $('#JH_company').val(); 
    var jhunits = $('#JH_units').children("option:selected").val(); 

    var formObject = {
    	"JH_email": jhemail,
    	"JH_company": jhcompany,
    	"JH_units": jhunits
    }

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        data: formObject,
        error: function () {
            $('#form-confirm').replaceWith('<p class="mt-4">Thanks for submitting your email, we will follow up soon!</p>');
        }
    });

    console.log($('#JH_email').val());
});