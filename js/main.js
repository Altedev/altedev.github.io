$(document).ready( function () {

    $('#close').hide();
    $('#burger').on('click', function () {
        $( "#menu" ).slideToggle( "slow", function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
            $( "#burger" ).hide();
            $( "#close" ).show();
        });
    })

    $('#close').on('click', function () {
        $( "#menu" ).slideToggle( "slow", function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
            $( "#close" ).hide();
            $( "#burger" ).show();
        });
    })

    $('.menu a').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-5 }, 2000);
    });

    $('#sendMessage').on('click', function(e){
        e.preventDefault();

        var name = $('input[name="name"]').val();
        var phone = $('input[name="phone"]').val();
        var information = $('textarea[name="information"]').val();

        var error = 0;

        if(!name){
            $('input[name="name"]').addClass('error');
            error++;
        }
        if(!phone){
            $('input[name="phone"]').addClass('error');
            error++;
        }
        if(error){
            return false;
        }

        $.ajax({
            url : "send.php",
            dataType : "json",
            type : "post",
            data : {name : name, phone: phone, information: information}
        }).done(function( data ) {
            $('#form-sendMessage').html('<h3>'+data.msg+'</h3>');
        });
    });

    $(window).scroll(function() {
        var top_of_element_advantages = $("#advantages").offset().top;
        var bottom_of_element_advantages = $("#advantages").offset().top + $("#advantages").outerHeight();
        var bottom_of_screen_advantages = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_advantages = $(window).scrollTop();

        var top_of_element_table = $("#table").offset().top;
        var bottom_of_element_table = $("#table").offset().top + $("#table").outerHeight();
        var bottom_of_screen_table = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_table = $(window).scrollTop();

        var top_of_element_insulation = $("#insulation").offset().top;
        var bottom_of_element_insulation = $("#insulation").offset().top + $("#insulation").outerHeight();
        var bottom_of_screen_insulation = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_insulation = $(window).scrollTop();

        var top_of_element_unikorText = $("#unikorText").offset().top;
        var bottom_of_element_unikorText = $("#unikorText").offset().top + $("#unikorText").outerHeight();
        var bottom_of_screen_unikorText = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_unikorText = $(window).scrollTop();

        var top_of_element_questionsForm = $("#questionsForm").offset().top;
        var bottom_of_element_questionsForm = $("#questionsForm").offset().top + $("#questionsForm").outerHeight();
        var bottom_of_screen_questionsForm = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_questionsForm = $(window).scrollTop();

        var top_of_element_questionsText = $("#questionsText").offset().top;
        var bottom_of_element_questionsText = $("#questionsText").offset().top + $("#questionsText").outerHeight();
        var bottom_of_screen_questionsText = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_questionsText = $(window).scrollTop();

        var top_of_element_company = $("#company").offset().top;
        var bottom_of_element_company = $("#company").offset().top + $("#company").outerHeight();
        var bottom_of_screen_company = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_company = $(window).scrollTop();

        var top_of_element_clients = $("#clients").offset().top;
        var bottom_of_element_clients = $("#clients").offset().top + $("#clients").outerHeight();
        var bottom_of_screen_clients = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_clients = $(window).scrollTop();

        var top_of_element_cont = $("#cont").offset().top;
        var bottom_of_element_cont = $("#cont").offset().top + $("#cont").outerHeight();
        var bottom_of_screen_cont = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_cont = $(window).scrollTop();

        if ((bottom_of_screen_advantages > top_of_element_advantages) && (top_of_screen_advantages < bottom_of_element_advantages)){
            $('#advantages').addClass('animated bounceInLeft fast');
        } else {
            $('#advantages').removeClass('animated bounceInLeft fast');
        }

        if ((bottom_of_screen_table > top_of_element_table) && (top_of_screen_table < bottom_of_element_table)){
            $('#table').addClass('animated bounceInRight fast');
        } else {
            $('#table').removeClass('animated bounceInRight fast');
        }

        if ((bottom_of_screen_insulation > top_of_element_insulation) && (top_of_screen_insulation < bottom_of_element_insulation)){
            $('#insulation').addClass('animated rotateIn fast');
        }

        if ((bottom_of_screen_unikorText > top_of_element_unikorText) && (top_of_screen_unikorText < bottom_of_element_unikorText)){
            $('#unikor').addClass('animated lightSpeedIn fast');
        } else {
            $('#unikor').removeClass('animated lightSpeedIn fast');
        }

        if ((bottom_of_screen_questionsForm > top_of_element_questionsForm) && (top_of_screen_questionsForm < bottom_of_element_questionsForm)){
            $('#questionsForm').addClass('animated bounceInUp fast');
        }

        if ((bottom_of_screen_questionsText > top_of_element_questionsText) && (top_of_screen_questionsText < bottom_of_element_questionsText)){
            $('#questionsText').addClass('animated bounceInRight fast');
        }

        if ((bottom_of_screen_company > top_of_element_company) && (top_of_screen_company < bottom_of_element_company)){
            $('#company').addClass('animated bounceInLeft fast');
        } else {
            $('#company').removeClass('animated bounceInLeft fast');
        }

        if ((bottom_of_screen_clients > top_of_element_clients) && (top_of_screen_clients < bottom_of_element_clients)){
            $('#clients').addClass('animated jello delay-1s');
        } else {
            $('#clients').removeClass('animated jello delay-1s');
        }

        if ((bottom_of_screen_cont > top_of_element_cont) && (top_of_screen_cont < bottom_of_element_cont)){
            $('#cont').addClass('animated bounceInRight fast');
        } else {
            $('#cont').removeClass('animated bounceInRight fast');
        }
    });


});