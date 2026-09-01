/**************************************************
    SCROLL TO TOP AFTER REFRESH
**************************************************/

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

/**************************************************
    DIRECT LINK FADE OUT
**************************************************/
$(document).ready(function() {    

    $('.direct-link').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1200, newpage);
    });

    $('.designer-link').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1200, newpage);
    });

    function newpage() {
        window.location = newLocation;
    }
});


/**************************************************
    CREDITS + BTS - FIXED ELEMENT FADE IN
**************************************************/
$(document).ready(function() {
    $('.delayed').css('display', 'none');
    $('.delayed').delay(2200).fadeIn(800);
});

$(document).ready(function() {
    $('.bts-footer').css('display', 'none');
    $('.bts-footer').delay(2200).fadeIn(800);
});


/**************************************************
    DISABLE CONTEXT MENU ON LONG TAPS ON MOBILE
**************************************************/

    function absorbEvent_(event) {
      var e = event || window.event;
      e.preventDefault && e.preventDefault();
      e.stopPropagation && e.stopPropagation();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    }

    function preventLongPressMenu(node) {
      node.ontouchstart = absorbEvent_;
      node.ontouchmove = absorbEvent_;
      node.ontouchend = absorbEvent_;
      node.ontouchcancel = absorbEvent_;
    }

    function init() {
      preventLongPressMenu(document.getElementById('main-page'));
    }

/**************************************************
    HOVER ON DESIGNER, ELEMENTS FADE
**************************************************/
$(document).ready(function () {

    /**************************************************
        PROLOGUE - HOVER
    **************************************************/

    $(".iso-film1").mouseenter(function() {
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").css("opacity", ".3");
        $("hr").css("opacity", "0");
        $(".volume-number").css("opacity", "0.3");
        $(".chunk-number").css("opacity", "0.3");
        $(".legacy").css("opacity", "0");
        $("#openbtn2").css("opacity", "0.3");
        $(".designer-name").not(this).css("opacity", ".3");
        $(".setList").css("opacity", "0.3");
        $(".first-film").css("opacity", "1");
    });

    $(".iso-film1").mouseleave(function() {
        $(".home-button").css("opacity", "1");
        $(".main-copy").css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".volume-number").css("opacity", "1");
        $(".chunk-number").css("opacity", "initial");
        $(".legacy").css("opacity", "initial");        
        $("#openbtn2").css("opacity", "1");
        $(".designer-name").not(this).css("opacity", "1");
        $(".setList").css("opacity", "1");
        $(".first-film").css("opacity", "1");
    });

    /**************************************************
        VOLUME 01 - HOVER
    **************************************************/

    $(".vol-1-name").mouseenter(function() {
        console.log("Mouse over target");     
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").css("opacity", ".3");
        $("hr").css("opacity", "0");
        $(".volume-number").css("opacity", "0.3");
        $(".chunk-number").css("opacity", "0.3");
        $(".legacy").css("opacity", "0");
        $("#openbtn2").css("opacity", "0.3");
        $(".designer-name").not(this).css("opacity", ".3");
        $(".setList").css("opacity", "0.3");
        $(".vol-one").css("opacity", "0");
        $(".description-1-small").css("opacity", "1");
        $(".first-title").css("opacity", "1");
    });

    $(".vol-1-name").mouseleave(function() {
        console.log("Mouse leaves target");
        $(".home-button").css("opacity", "1");
        $(".main-copy").css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".volume-number").css("opacity", "1");
        $(".chunk-number").css("opacity", "initial");
        $(".legacy").css("opacity", "initial");        
        $("#openbtn2").css("opacity", "1");
        $(".designer-name").not(this).css("opacity", "1");
        $(".setList").css("opacity", "1");
        $(".vol-one").css("opacity", "initial");
        $(".description-1-small").css("opacity", "0");
        $(".first-title").css("opacity", "1");
    }); 

    /**************************************************
        VOLEUME 02 - HOVER + TOUCH
    **************************************************/

    $(".vol-2-name").mouseenter(function() {
        console.log("Mouse over target");     
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").css("opacity", ".3");
        $("hr").css("opacity", "0");
        $(".volume-number").css("opacity", "0.3");
        $(".chunk-number").css("opacity", "0.3");
        $(".legacy").css("opacity", "0");
        $("#openbtn2").css("opacity", "0.3");
        $(".designer-name").not(this).css("opacity", ".3");
        $(".setList").css("opacity", "0.3");
        $(".vol-two").css("opacity", "0");
        $(".description-2-small").css("opacity", "1");
        $(".second-title").css("opacity", "1");
        $(".volume-number").css("z-index", "10"); 
    });

    $(".vol-2-name").mouseleave(function() {
        console.log("Mouse leaves target");
        $(".home-button").css("opacity", "1");
        $(".main-copy").css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".volume-number").css("opacity", "1");
        $(".chunk-number").css("opacity", "initial");
        $(".legacy").css("opacity", "initial");        
        $("#openbtn2").css("opacity", "1");
        $(".designer-name").not(this).css("opacity", "1");
        $(".setList").css("opacity", "1");
        $(".vol-two").css("opacity", "initial");
        $(".description-2-small").css("opacity", "0");
        $(".second-title").css("opacity", "1");
    });

    /**************************************************
        INTERMISSION - HOVER
    **************************************************/

    $(".iso-film2").mouseenter(function() {
        console.log("Mouse over target");     
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").css("opacity", ".3");
        $("hr").css("opacity", "0");
        $(".volume-number").css("opacity", "0.3");
        $(".chunk-number").css("opacity", "0.3");
        $(".legacy").css("opacity", "0");
        $("#openbtn2").css("opacity", "0.3");
        $(".designer-name").not(this).css("opacity", ".3");
        $(".setList").css("opacity", "0.3");
        $(".mid-film").css("opacity", "1");
    });

    $(".iso-film2").mouseleave(function() {
        console.log("Mouse leaves target");
        $(".home-button").css("opacity", "1");
        $(".main-copy").css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".volume-number").css("opacity", "1");
        $(".chunk-number").css("opacity", "initial");
        $(".legacy").css("opacity", "initial");        
        $("#openbtn2").css("opacity", "1");
        $(".designer-name").not(this).css("opacity", "1");
        $(".setList").css("opacity", "1");
        $(".mid-film").css("opacity", "1");
    });

    /**************************************************
        VOLEUME 03 - HOVER
    **************************************************/

    $(".vol-3-name").mouseenter(function() {
        console.log("Mouse over target");     
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").css("opacity", ".3");
        $("hr").css("opacity", "0");
        $(".volume-number").css("opacity", "0.3");
        $(".chunk-number").css("opacity", "0.3");
        $(".legacy").css("opacity", "0");
        $("#openbtn2").css("opacity", "0.3");
        $(".designer-name").not(this).css("opacity", ".3");
        $(".setList").css("opacity", "0.3");
        $(".vol-three").css("opacity", "0");
        $(".description-3-small").css("opacity", "1");
        $(".third-title").css("opacity", "1");
    });

    $(".vol-3-name").mouseleave(function() {
        console.log("Mouse leaves target");
        $(".home-button").css("opacity", "1");
        $(".main-copy").css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".volume-number").css("opacity", "1");
        $(".chunk-number").css("opacity", "initial");
        $(".legacy").css("opacity", "initial");        
        $("#openbtn2").css("opacity", "1");
        $(".designer-name").not(this).css("opacity", "1");
        $(".setList").css("opacity", "1");
        $(".vol-three").css("opacity", "initial");
        $(".description-3-small").css("opacity", "0");
        $(".third-title").css("opacity", "1");
    });

    /**************************************************
        EPILOGUE - HOVER
    **************************************************/

    $(".iso-film3").mouseenter(function() {
        console.log("Mouse over target");     
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").css("opacity", ".3");
        $("hr").css("opacity", "0");
        $(".volume-number").css("opacity", "0.3");
        $(".chunk-number").css("opacity", "0.3");
        $(".legacy").css("opacity", "0");
        $("#openbtn2").css("opacity", "0.3");
        $(".designer-name").not(this).css("opacity", ".3");
        $(".setList").css("opacity", "0.3");
        $(".last-film").css("opacity", "1");
    });

    $(".iso-film3").mouseleave(function() {
        console.log("Mouse leaves target");
        $(".home-button").css("opacity", "1");
        $(".main-copy").css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".volume-number").css("opacity", "1");
        $(".chunk-number").css("opacity", "initial");
        $(".legacy").css("opacity", "initial");        
        $("#openbtn2").css("opacity", "1");
        $(".designer-name").not(this).css("opacity", "1");
        $(".setList").css("opacity", "1");
        $(".last-film").css("opacity", "1");
    });
});


/******************************************************************
    TOUCH IMPLEMENTATION
*******************************************************************/
$(document).ready(function () {
    
    /******************************************************************
        HIDE IMAGE ON TAP
    *******************************************************************/    
    $('.designer-portrait').bind('touchstart', function(e){
        $(".portrait-container").removeClass("tapped");

        $(".home-button").css("opacity", "1");
        $(".main-copy").css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".chunk-number").css("opacity", "initial");
        $(".chunk").css("opacity", "1");
        $(".legacy").css("opacity", "initial");        
        $("#openbtn2").css("opacity", "1");
        $(".designer-name").not(this).css("opacity", "1");

        $(".setList").css("opacity", "1");
        $(".chunk-number").css("opacity", "1");
    });

    /******************************************************************
        PROLOGUE - TOUCH
    *******************************************************************/    
    $('.iso-film1').bind('touchstart', function(e){

        if(!$('.portrait-container').hasClass('tapped')) {

            $(".portrait-container").toggleClass("tapped");
            $(".designer-portrait").css("min-height", "100%");
            $('.portrait-container').children('img').attr('src', 'mobile/giorgiobiscaro_mobile.jpg');

            $(".home-button").css("opacity", "0.3");
            $(".main-copy").css("opacity", ".3");
            $(".chunk-number").css("opacity", "0.3");
            $(".chunk").css("opacity", ".3");
            $("#openbtn2").css("opacity", "0.3");
            $(".designer-name").not(this).css("opacity", ".3");
            $(".setList").css("opacity", "0.3");
            
            $(".first-film").css("opacity", "1");

            e.preventDefault();

        } else {

            return true;
        
        }
    });

    /******************************************************************
        VOLUME ONE - TOUCH
    *******************************************************************/
    $('.vol-1-name').bind('touchstart', function(e){

        if(!$('.portrait-container').hasClass('tapped')) {

            $(".portrait-container").toggleClass("tapped");
            $(".designer-portrait").css("min-height", "100%");

            $(".home-button").css("opacity", "0.3");
            $(".main-copy").css("opacity", ".3");
            $(".chunk-number").css("opacity", "0.3");
            $(".chunk").css("opacity", ".3");
            $("#openbtn2").css("opacity", "0.3");
            $(".setList").css("opacity", "0.3");

            $(".designer-name").not(this).css("opacity", ".3");
            
            $(".first-title").css("opacity", "1");
            $(".vol-one").css("opacity", "1");

            e.preventDefault();

        } else {

            return true;
        
        }
    });

    $('.stefano').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/stefanogiovannoni_mobile.jpg');
    });

    $('.elena').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/elenasalmistraro_mobile.jpg');
    });

    $('.kazuyo').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/kazuyokomoda_mobile.jpg');
    });

    $('.toan').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/toannguyen_mobile.jpg');
    });

    $('.odo').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/odofioravanti_mobile.jpg');
    });

    /******************************************************************
        VOLUME TWO - TOUCH
    *******************************************************************/
    $('.vol-2-name').bind('touchstart', function(e){

        if(!$('.portrait-container').hasClass('tapped')) {

            $(".portrait-container").toggleClass("tapped");
            $(".designer-portrait").css("min-height", "100%");

            $(".home-button").css("opacity", "0.3");
            $(".main-copy").css("opacity", ".3");
            $(".chunk-number").css("opacity", "0.3");
            $(".chunk").css("opacity", ".3");
            $("#openbtn2").css("opacity", "0.3");
            $(".designer-name").not(this).css("opacity", ".3");
            $(".setList").css("opacity", "0.3");

            $(".second-title").css("opacity", "1");
            $(".vol-two").css("opacity", "1");

            e.preventDefault();

        } else {

            return true;
        
        }
    });

    $('.boggeri').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/studioboggeri_mobile.jpg');
    });

    $('.armando').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/armandomilani_mobile.jpg');
    });

    $('.sean').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/seanwolcott_bw_mobile.jpg');
    });

    $('.andrea').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/leftloft_andreabraccaloni_mobile.jpg');
    });

    $('.jekyllhyde').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/jeh_margherita_mobile.jpg');
    });


    /**************************************************
        HOVER - MOUSEMOVE - JEKYLL & HYDE
    **************************************************/
    var jh_interval = 0;
    var jh_timerHandle;

    function HideShowJH() {
        jh_interval++;

        if (jh_interval <= 3) {        
            $('#portrait-margherita').fadeIn(500);
            $('#portrait-marco').fadeOut(1000);
            $('#portrait-margherita').css("z-index", "1");
            $('#portrait-marco').css("z-index", "0");
        
        } else {
            $('#portrait-margherita').fadeOut(1000);
            $('#portrait-marco').fadeIn(500);
            $('#portrait-margherita').css("z-index", "0");
            $('#portrait-marco').css("z-index", "1");


            jh_interval = jh_interval == 6 ? 0 : jh_interval;
        
        }
        jh_timerHandle = setTimeout(HideShowJH, 1000)
    }

    $(".multi-preview").mouseenter(function() {
        HideShowJH();
    });

    $(".multi-preview").mouseleave(function() {
        clearTimeout(jh_timerHandle);
        jh_interval = 0;
    });

    /******************************************************************
        INTERMISSION - TOUCH
    *******************************************************************/
    $('.iso-film2').bind('touchstart', function(e){

        if(!$('.portrait-container').hasClass('tapped')) {

            $(".portrait-container").toggleClass("tapped");
            $(".designer-portrait").css("min-height", "100%");
            $('.portrait-container').children('img').attr('src', 'mobile/cimiterorossi_mobile.jpg');

            $(".home-button").css("opacity", "0.3");
            $(".main-copy").css("opacity", ".3");
            $(".chunk-number").css("opacity", "0.3");
            $(".chunk").css("opacity", ".3");
            $("#openbtn2").css("opacity", "0.3");
            $(".designer-name").not(this).css("opacity", ".3");
            $(".setList").css("opacity", "0.3");

            $(".mid-film").css("opacity", "1");

            e.preventDefault();

        } else {

            return true;
        
        }
    });

    /******************************************************************
        VOLUME THREE - TOUCH
    *******************************************************************/
    $('.vol-3-name').bind('touchstart', function(e){

        if(!$('.portrait-container').hasClass('tapped')) {

            $(".portrait-container").toggleClass("tapped");
            $(".designer-portrait").css("min-height", "100%");

            $(".home-button").css("opacity", "0.3");
            $(".main-copy").css("opacity", ".3");
            $(".chunk-number").css("opacity", "0.3");
            $(".chunk").css("opacity", ".3");
            $("#openbtn2").css("opacity", "0.3");
            $(".designer-name").not(this).css("opacity", ".3");
            $(".setList").css("opacity", "0.3");

            $(".third-title").css("opacity", "1");
            $(".vol-three").css("opacity", "1");    

            e.preventDefault();

        } else {

            return true;
        
        }
    });

    $('.craftsmanship').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/craft_brunomunari_mobile.jpg');
    });

    $('.civilization').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/civ_corey_mobile.jpg');
    });

    $('.burnkit').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/dylan_burnkit_mobile.jpg');
    });

    $('.fjordmilano').bind('touchstart', function(e){
        $('.portrait-container').children('img').attr('src', 'mobile/fjord_lidiatralli_mobile.jpg');
    });

    /**************************************************
        HOVER - MOUSEMOVE - CIVILIZATION
    **************************************************/
    var civ_interval = 0;
    var civ_timerHandle;

    function HideShowCIV() {
        civ_interval++;

        if (civ_interval <= 3) {
            $('#portrait-corey').fadeIn(500);
            $('#portrait-michael').fadeOut(1000);
            $('#portrait-gabriel').fadeOut(1000);

            $('#portrait-corey').css("z-index", "1");
            $('#portrait-michael').css("z-index", "0");
            $('#portrait-gabriel').css("z-index", "0");
        
        } else if (civ_interval <= 6) {
            $('#portrait-corey').fadeOut(1000);
            $('#portrait-michael').fadeIn(500);
            $('#portrait-gabriel').fadeOut(1000);

            $('#portrait-corey').css("z-index", "0");
            $('#portrait-michael').css("z-index", "1");
            $('#portrait-gabriel').css("z-index", "0");
        
        } else {
            $('#portrait-corey').fadeOut(1000);
            $('#portrait-michael').fadeOut(1000);
            $('#portrait-gabriel').fadeIn(500);

            $('#portrait-corey').css("z-index", "0");
            $('#portrait-michael').css("z-index", "0");
            $('#portrait-gabriel').css("z-index", "1");

            civ_interval = civ_interval == 9 ? 0 : civ_interval;
        }
        civ_timerHandle = setTimeout(HideShowCIV, 1000)
    }

    $(".civ-preview").mouseenter(function() {
        HideShowCIV();
    });

    $(".civ-preview").mouseleave(function() {
        clearTimeout(civ_timerHandle);
        civ_interval = 0;
    });


    /**************************************************
        FJORD - HOVER CAROUSEL
    **************************************************/
    var fjord_interval = 0;
    var fjord_timerHandle;

    function HideShowFJORD() {
        fjord_interval++;

        if (fjord_interval <= 3) {       
            $('#portrait-lidia').fadeIn(500);
            $('#portrait-seb').fadeOut(1000);
            $('#portrait-amedeo').fadeOut(1000);

            $('#portrait-lidia').css("z-index", "1");
            $('#portrait-seb').css("z-index", "0");
            $('#portrait-amedeo').css("z-index", "0");
        
        } else if (fjord_interval <= 6) {
            $('#portrait-lidia').fadeOut(1000);
            $('#portrait-seb').fadeIn(500);
            $('#portrait-amedeo').fadeOut(1000);

            $('#portrait-lidia').css("z-index", "0");
            $('#portrait-seb').css("z-index", "1");
            $('#portrait-amedeo').css("z-index", "0");
        
        } else {
            $('#portrait-seb').fadeOut(1000);
            $('#portrait-lidia').fadeOut(1000);
            $('#portrait-amedeo').fadeIn(500);

            $('#portrait-seb').css("z-index", "0");
            $('#portrait-lidia').css("z-index", "0");
            $('#portrait-amedeo').css("z-index", "1");

            fjord_interval = fjord_interval == 9 ? 0 : fjord_interval;
        
        }
        fjord_timerHandle = setTimeout(HideShowFJORD, 1000)
    }

    $(".triple-preview").mouseenter(function() {
        HideShowFJORD();
    });

    $(".triple-preview").mouseleave(function() {
        clearTimeout(fjord_timerHandle);
        fjord_interval = 0;
    });


    /******************************************************************
        EPILOGUE - TOUCH
    *******************************************************************/
    $('.iso-film3').bind('touchstart', function(e){

        if(!$('.portrait-container').hasClass('tapped')) {

            $(".portrait-container").toggleClass("tapped");
            $(".designer-portrait").css("min-height", "100%");
            $('.portrait-container').children('img').attr('src', 'mobile/achillecastiglioni_mobile.jpg');

            $(".home-button").css("opacity", "0.3");
            $(".main-copy").css("opacity", ".3");
            $(".chunk-number").css("opacity", "0.3");
            $(".chunk").css("opacity", ".3");
            $("#openbtn2").css("opacity", "0.3");
            $(".designer-name").not(this).css("opacity", ".3");
            $(".setList").css("opacity", "0.3");

            $(".last-film").css("opacity", "1");

            e.preventDefault();

        } else {

            return true;
        
        }
    });
});

/**************************************************
    HOVER ON VOLUME NUMBER, ELEMENTS FADE
**************************************************/
$(document).ready(function () {
    $(".vol-one").mouseenter(function() {
        console.log("Mouse over target");       
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").css("opacity", ".3");
        $(".under-prologue").css("opacity", "0");
        $(".under-01").css("opacity", "0.2");
        $(".under-02").css("opacity", "0");
        $(".under-intermission").css("opacity", "0");
        $(".under-03").css("opacity", "0");
        $(".under-04").css("opacity", "0");        
        $(".legacy").css("opacity", "0");
        $(".chunk-number").css("opacity", ".3");
        $(".designer-link").css("opacity", ".3");
        $("#vol-two").css("opacity", ".3");
        $("#vol-three").css("opacity", ".3");
        $("#vol-four").css("opacity", ".3");        
        $(".vol-one-list").css("opacity", "0");
        $("#openbtn2").css("opacity", ".3");
        $(".setList").css("opacity", ".3");
        $(".description-1").css("display", "block");

        $(".chunk").css("opacity", "1");
        $(".first-title").css("opacity", "1");
        $(".description-1").css("opacity", "1");
    });

    $(".vol-one").mouseleave(function() {
        console.log("Mouse leaves target");
        $(".home-button").css("opacity", "1");
        $(".main-copy").not(this).css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "initial");
        $(".legacy").css("opacity", "initial");
        $(".designer-link").not(this).css("opacity", "initial");
        $(".chunk-number").not(this).css("opacity", "initial");
        $(".first-title").not(this).css("opacity", "initial");
        $("#vol-two").not(this).css("opacity", "initial");
        $("#vol-three").not(this).css("opacity", "initial");
        $("#vol-four").not(this).css("opacity", "initial");
        $(".description-1").css("display", "initial");
        $(".description-1").not(this).css("opacity", "0");
        $(".vol-one-list").not(this).css("opacity", "1");
        $("#openbtn2").css("opacity", "1");
        $(".setList").css("opacity", "1");
    });

/**************************************************
    VOLUME TWO
**************************************************/

    $(".vol-two").mouseenter(function() {
        console.log("Mouse over target");       
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").not(this).css("opacity", ".3");
        $(".under-prologue").css("opacity", "0");
        $(".under-01").css("opacity", "0");
        $(".under-02").css("opacity", "0.2");
        $(".under-intermission").css("opacity", "0");
        $(".under-03").css("opacity", "0");
        $(".under-04").css("opacity", "0");
        $(".chunk").not(this).css("opacity", "1");
        $(".legacy").css("opacity", "0");
        $(".chunk-number").not(this).css("opacity", ".3");
        $(".designer-link").not(this).css("opacity", ".3");
        $(".second-title").not(this).css("opacity", "1");
        $("#vol-one").not(this).css("opacity", ".3");
        $("#vol-three").not(this).css("opacity", ".3");
        $("#vol-four").not(this).css("opacity", ".3");
        $(".description-2").css("display", "block");
        $(".description-2").not(this).css("opacity", "1");
        $(".vol-two-list").not(this).css("opacity", "0");
        $("#openbtn2").css("opacity", ".3");
        $(".setList").css("opacity", ".3");
    });

    $(".vol-two").mouseleave(function() {
        console.log("Mouse leaves target");
        $(".home-button").css("opacity", "1");
        $(".main-copy").not(this).css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "initial");
        $(".legacy").css("opacity", "initial");
        $(".designer-link").not(this).css("opacity", "initial");
        $(".chunk-number").not(this).css("opacity", "initial");
        $(".second-title").not(this).css("opacity", "initial");
        $("#vol-one").not(this).css("opacity", "initial");
        $("#vol-three").not(this).css("opacity", "initial");
        $("#vol-four").not(this).css("opacity", "initial");
        $(".description-2").css("display", "initial");
        $(".description-2").not(this).css("opacity", "0");
        $(".vol-two-list").not(this).css("opacity", "1");
        $("#openbtn2").css("opacity", "1");
        $(".setList").css("opacity", "1");
    });

/**************************************************
    VOLUME THREE
**************************************************/

    $(".vol-three").mouseenter(function() {
        console.log("Mouse over target");       
        $(".home-button").css("opacity", "0.3");
        $(".main-copy").not(this).css("opacity", ".3");
        $(".under-prologue").css("opacity", "0");
        $(".under-01").css("opacity", "0");
        $(".under-02").css("opacity", "0");
        $(".under-intermission").css("opacity", "0");
        $(".under-03").css("opacity", "0.2");
        $(".under-04").css("opacity", "0");        
        $(".chunk").not(this).css("opacity", "1");
        $(".legacy").css("opacity", "0");
        $(".chunk-number").not(this).css("opacity", ".3");
        $(".designer-link").not(this).css("opacity", ".3");
        $(".third-title").not(this).css("opacity", "1");
        $("#vol-one").not(this).css("opacity", ".3");
        $("#vol-two").not(this).css("opacity", ".3");
        $("#vol-four").not(this).css("opacity", ".3");
        $(".description-3").css("display", "block");
        $(".description-3").not(this).css("opacity", "1");
        $(".vol-three-list").not(this).css("opacity", "0");
        $("#openbtn2").css("opacity", ".3");
        $(".setList").css("opacity", ".3");
    });

    $(".vol-three").mouseleave(function() {
        console.log("Mouse leaves target");
        $(".home-button").css("opacity", "1");
        $(".main-copy").not(this).css("opacity", "initial");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "initial");
        $(".legacy").css("opacity", "initial");
        $(".designer-link").not(this).css("opacity", "initial");
        $(".chunk-number").not(this).css("opacity", "initial");
        $(".third-title").not(this).css("opacity", "initial");
        $("#vol-one").not(this).css("opacity", "initial");
        $("#vol-two").not(this).css("opacity", "initial");
        $("#vol-four").not(this).css("opacity", "initial");
        $(".description-3").css("display", "initial");
        $(".description-3").not(this).css("opacity", "0");
        $(".vol-three-list").not(this).css("opacity", "1");
        $("#openbtn2").css("opacity", "1");
        $(".setList").css("opacity", "1");
    });
});


/**************************************************
    LEGACY - OVERLAY TOGGLE
**************************************************/
$(document).ready(function () {
    $("#openbtn1").click(function () {
        $("#legacy").toggleClass("active");
        $("#legacy").fadeIn(1000);
        $("#main-page").toggleClass("hidden");
        $(".credits").css("z-index", "-10");
        $(".legacy-button").toggleClass("fixed");
        $(".legacy-link").fadeOut(0, function () {
            $(".legacy-link").text(($(".legacy-link").text() == '2018') ? 'RETURN HOME' : '2018').fadeIn(500);
        })
    })
});

window.addEventListener("keyup", function(e) { 
    if ($("#legacy").hasClass("active")) {
        if(e.keyCode == 27) {
            $("#legacy").toggleClass("active");
            $(".credits").css("z-index", "-10");
            $(".legacy-button").toggleClass("fixed");
            $("#legacy").stop().animate( { scrollTop: 0 });
            $(".legacy-link").text(($(".legacy-link").text() == '2018') ? 'RETURN HOME' : '2018').fadeIn(500);
        }
    }   
}, false);

/**************************************************
    EXTENDED CONTENT - OVERLAY TOGGLE
**************************************************/
$(document).ready(function () {
    $("#openbtn3").click(function () {
        $("#extended").toggleClass("active");
        $("#extended").fadeIn(1000);
        $("body").toggleClass("hidden");
        $(".extended-button").toggleClass("fixed");
        $(".video-overlay").toggleClass("active");
      
        window.location.hash = '#0';
        $("#openbtn3 .maestro").fadeOut(0, function () {
            $("#openbtn3 .maestro").text(($("#openbtn3 .maestro").text() == 'Beyond the Film') ? 'Return to Film' : 'Beyond the Film').fadeIn(500);
        })

    })
});

$(document).ready(function () {
    $("#openbtn5").click(function () {
        $("#extended").toggleClass("active");
        $("#extended").fadeIn(1000);
        $("body").toggleClass("hidden");
        $(".extended-button").toggleClass("fixed");
        $(".video-overlay").toggleClass("active");
     
        $("#openbtn5 .maestro").fadeOut(0, function () {
            $("#openbtn5 .maestro").text(($("#openbtn5 .maestro").text() == 'About the Film') ? 'Return to Film' : 'About the Film').fadeIn(500);
        })
    })
});

$(document).ready(function () {
    $("#openbtn6").click(function () {
        $("#extended").toggleClass("active");
        $("#extended").fadeIn(1000);
        $("body").toggleClass("hidden");
        $(".extended-button").toggleClass("fixed");
        $(".video-overlay").toggleClass("active");
        window.location.hash = '#0';
        $("#openbtn6 .maestro").fadeOut(0, function () {
            $("#openbtn6 .maestro").text(($("#openbtn6 .maestro").text() == 'Prologue') ? 'Return to Film' : 'Prologue').fadeIn(500);
        })

    })
});

$(document).ready(function () {
    $("#openbtn7").click(function () {
        $("#extended").toggleClass("active");
        $("#extended").fadeIn(1000);
        $("body").toggleClass("hidden");
        $(".extended-button").toggleClass("fixed");
        $(".video-overlay").toggleClass("active");
    
        window.location.hash = '#0';
        $("#openbtn7 .maestro").fadeOut(0, function () {
            $("#openbtn7 .maestro").text(($("#openbtn7 .maestro").text() == 'Epilogue') ? 'Return to Film' : 'Epilogue').fadeIn(500);
        })

    })
});

$(document).ready(function () {
    $("#forFjord").click(function () {
        $("#extended").toggleClass("active");
        $("#extended").fadeIn(1000);
        $("body").toggleClass("hidden");
        $(".extended-button").toggleClass("fixed");
        $(".video-overlay").toggleClass("active");
        window.location.hash = '#0';
        $("#forFjord .maestro").fadeOut(0, function () {
            $("#forFjord .maestro").text(($("#forFjord .maestro").text() == 'In Studio') ? 'Return' : 'In Studio').fadeIn(500);
        })

    })
});

window.addEventListener("keyup", function(e) { 
    if ($("#extended").hasClass("active")) {
        if(e.keyCode == 27) {
            $("#extended").toggleClass("active");
            $("body").toggleClass("hidden");
            $(".extended-button").toggleClass("fixed");
            $(".video-overlay").toggleClass("active");
            $("#openbtn3 .maestro").fadeOut(0, function () {
                $("#openbtn3 .maestro").text(($("#openbtn3 .maestro").text() == 'Beyond the Film') ? 'Return to Film' : 'Beyond the Film').fadeIn(500);
            })
        }
    }       
}, false);

/**************************************************
    ITALIA - HOVER ON LEGACY YEAR, ELEMENTS FADE
**************************************************/
$(document).ready(function () {
    $("#site-2010").mouseenter(function() {
        console.log("Mouse over target");       
        $("hr").css("opacity", "0");
        $(".chunk").css("opacity", "1");
        $("#year-2012").css("opacity", ".3");
        $("#year-2014").css("opacity", ".3");
        $("#year-2016").css("opacity", ".3");
        $(".legacy-2010").css("opacity", "1");
        $(".under-2010").css("opacity", ".2");
    });

    $("#site-2010").mouseleave(function() {
        console.log("Mouse leaves target");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "initial");
        $("#year-2012").css("opacity", "1");
        $("#year-2014").css("opacity", "1");
        $("#year-2016").css("opacity", "1");
        $(".legacy-2010").css("opacity", "0");
        $(".under-2010").css("opacity", ".2");
    });

    $("#site-2012").mouseenter(function() {
        console.log("Mouse over target");       
        $("hr").css("opacity", "0");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2010").css("opacity", ".3");
        $("#year-2014").css("opacity", ".3");
        $("#year-2016").css("opacity", ".3");
        $(".legacy-2012").css("opacity", "1");
        $(".under-2012").css("opacity", ".2");
    });

    $("#site-2012").mouseleave(function() {
        console.log("Mouse leaves target");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2010").css("opacity", "1");
        $("#year-2014").css("opacity", "1");
        $("#year-2016").css("opacity", "1");
        $(".legacy-2012").css("opacity", "0");
        $(".under-2012").css("opacity", ".2");
    });

    $("#site-2014").mouseenter(function() {
        console.log("Mouse over target");       
        $("hr").css("opacity", "0");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2010").css("opacity", ".3");
        $("#year-2012").css("opacity", ".3");
        $("#year-2016").css("opacity", ".3");
        $(".legacy-2014").css("opacity", "1");
        $(".under-2014").css("opacity", ".2");
    });

    $("#site-2014").mouseleave(function() {
        console.log("Mouse leaves target");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2010").css("opacity", "1");
        $("#year-2012").css("opacity", "1");
        $("#year-2016").css("opacity", "1");
        $(".legacy-2014").css("opacity", "0");
        $(".under-2014").css("opacity", ".2");
    });

    $("#site-2016").mouseenter(function() {
        console.log("Mouse over target");       
        $("hr").css("opacity", "0");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2010").css("opacity", ".3");
        $("#year-2012").css("opacity", ".3");
        $("#year-2014").css("opacity", ".3");
        $(".legacy-2016").css("opacity", "1");
        $(".under-2016").css("opacity", ".2");
    });

    $("#site-2016").mouseleave(function() {
        console.log("Mouse leaves target");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2010").css("opacity", "1");
        $("#year-2012").css("opacity", "1");
        $("#year-2014").css("opacity", "1");
        $(".legacy-2016").css("opacity", "0");
        $(".under-2016").css("opacity", ".2");
    });
});

/**************************************************
    DUTCH - HOVER ON LEGACY YEAR, ELEMENTS FADE
**************************************************/
$(document).ready(function () {
    $("#site-2011").mouseenter(function() {
        console.log("Mouse over target");       
        $("hr").css("opacity", "0");
        $(".chunk").css("opacity", "1");
        $("#year-2013").css("opacity", ".3");
        $("#year-2015").css("opacity", ".3");
        $("#year-2017").css("opacity", ".3");
        $(".legacy-2011").css("opacity", "1");
        $(".under-2011").css("opacity", ".2");
    });

    $("#site-2011").mouseleave(function() {
        console.log("Mouse leaves target");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "initial");
        $("#year-2013").css("opacity", "1");
        $("#year-2015").css("opacity", "1");
        $("#year-2017").css("opacity", "1");
        $(".legacy-2011").css("opacity", "0");
        $(".under-2011").css("opacity", ".2");
    });

    $("#site-2013").mouseenter(function() {
        console.log("Mouse over target");       
        $("hr").css("opacity", "0");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2011").css("opacity", ".3");
        $("#year-2015").css("opacity", ".3");
        $("#year-2017").css("opacity", ".3");
        $(".legacy-2013").css("opacity", "1");
        $(".under-2013").css("opacity", ".2");
    });

    $("#site-2013").mouseleave(function() {
        console.log("Mouse leaves target");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2011").css("opacity", "1");
        $("#year-2015").css("opacity", "1");
        $("#year-2017").css("opacity", "1");
        $(".legacy-2013").css("opacity", "0");
        $(".under-2013").css("opacity", ".2");
    });

    $("#site-2015").mouseenter(function() {
        console.log("Mouse over target");       
        $("hr").css("opacity", "0");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2011").css("opacity", ".3");
        $("#year-2013").css("opacity", ".3");
        $("#year-2017").css("opacity", ".3");
        $(".legacy-2015").css("opacity", "1");
        $(".under-2015").css("opacity", ".2");
    });

    $("#site-2015").mouseleave(function() {
        console.log("Mouse leaves target");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2011").css("opacity", "1");
        $("#year-2013").css("opacity", "1");
        $("#year-2017").css("opacity", "1");
        $(".legacy-2015").css("opacity", "0");
        $(".under-2015").css("opacity", ".2");
    });

    $("#site-2017").mouseenter(function() {
        console.log("Mouse over target");       
        $("hr").css("opacity", "0");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2011").css("opacity", ".3");
        $("#year-2013").css("opacity", ".3");
        $("#year-2015").css("opacity", ".3");
        $(".legacy-2017").css("opacity", "1");
        $(".under-2017").css("opacity", ".2");
    });

    $("#site-2017").mouseleave(function() {
        console.log("Mouse leaves target");
        $("hr").css("opacity", ".2");
        $(".chunk").not(this).css("opacity", "1");
        $("#year-2011").css("opacity", "1");
        $("#year-2013").css("opacity", "1");
        $("#year-2015").css("opacity", "1");
        $(".legacy-2017").css("opacity", "0");
        $(".under-2017").css("opacity", ".2");
    });
});

/**************************************************
    LEGACY TOGGLE
**************************************************/
$(document).ready(function () {
    $(".italia-toggle").click(function () {
        $('#italia-legacy').fadeIn(500);
        $('#dutch-legacy').fadeOut(500);

        if ($("#dutch-legacy").css("display", "none")) {
            $(".dutch-toggle").css("opacity", ".5");
            $(".italia-toggle").css("opacity", "1");
        }        
    })

    $(".dutch-toggle").click(function () {
        $('#dutch-legacy').fadeIn(500);
        $('#italia-legacy').fadeOut(500);

        if ($("#italia-legacy").css("display", "none")) {
            $(".italia-toggle").css("opacity", ".5");
            $(".dutch-toggle").css("opacity", "1");
        }
    })
});


/**************************************************
    TIMER ANIMATION
**************************************************/

var time = 10;
var initialOffset = '440';
var i = 1

$('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

var interval = setInterval(function() {
    if (i == time) {    
        clearInterval(interval);
        return;            
    }

    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i++;  
}, 200);

function abortTimer() { 
    clearInterval(tid);
}


/**************************************************
    DESIGNER PAGE - MOUSE INACTIVITY
**************************************************/
var timeout = null;

$(document).on('mousemove', function() {
    if (timeout !== null) {
        $("#video_controls_bar").removeClass("hide");
        $(".program").removeClass("hide");
        $("#openbtn3").removeClass("hide");
        $(".to-extended").removeClass("hide");
        $("#video_player_box ").css("cursor", "pointer");
        clearTimeout(timeout);
    }

    timeout = setTimeout(function() {
        $("#video_controls_bar").addClass("hide");
        $(".program").addClass("hide");
        $("#openbtn3").addClass("hide");
        $(".to-extended").addClass("hide");
        $("#video_player_box ").css("cursor", "none");
    }, 2000);
});

/**************************************************
    DESIGNER PAGE - NEXT UP
**************************************************/

$(document).ready(function () {
    $(".next-film").mouseenter(function() {
        $(".next-film").addClass("active");
    });

    $(".next-film").mouseleave(function() {
        $(".next-film").removeClass("active");
    });

    $('.next-film').bind('touchstart', function(e){
        $(".next-film").addClass("active");

    }).bind('touchend', function(e){
        $(".next-film").removeClass("active");
    });
});


/**************************************************
    DESIGNER PAGE - BREAD CRUMBS
**************************************************/

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
            var $target = $(target);
            if ($target.is(":focus")) {
                return false;
                $(".anchor-name").css("opacity", "1");
            } else {
            $target.attr('tabindex','-1');
            };
        });
      }
    }
});


/**************************************************
    TRANSITION - CREDITS -> BEHIND THE SCENES
**************************************************/
$(document).ready(function() {
    $(".animsition").animsition( {
        inClass: 'fade-in-right-sm',
        outClass: 'fade-out-right-sm',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'body',
        loadingClass: 'animsition-loading',
        loadingInner: '',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });
});


/**************************************************
    SCROLL
**************************************************/
$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors:['0', '1', '2','3', '4'],
        recordHistory: false,
        menu: '#theMenu',
        controlArrows: false,
        slidesNavigation: true,
        scrollHorizontally: true,
        scrollHorizontallyKey: 'MjAxOC5zZnVpdGFsaWFkZXNpZ24uY29tX0NFNmMyTnliMnhzU0c5eWFYcHZiblJoYkd4NW5JWQ==',
        resetSliders: true,
        resetSlidersKey: 'MjAxOC5zZnVpdGFsaWFkZXNpZ24uY29tX2pFYmNtVnpaWFJUYkdsa1pYSnpuajg=',
    });
});


/**************************************************
        WATCH HOVER INTERACTION
**************************************************/
$(document).ready(function () {
    $(".watch .chunk").mouseenter(function() {
        $(".watch .chunk").css("opacity", "1");
        $(".video-overlay").css("opacity", "0");
    });

    $(".watch .chunk").mouseleave(function() {
        $(".watch .chunk").css("opacity", ".4");
        $(".video-overlay").css("opacity", ".7");
    });

    $(".play-indicator .chunk-number").mouseenter(function() {
        $(".watch .chunk").css("opacity", "1");
        $(".video-overlay").css("opacity", "0");
    });

    $(".play-indicator .chunk-number").mouseleave(function() {
        $(".watch .chunk").css("opacity", ".4");
        $(".video-overlay").css("opacity", ".7");
    });
});


/**************************************************
    FJORD - HOVER STATE
**************************************************/
$(document).ready(function () {
    $("#seb-link01").mouseenter(function() {
        $(".fjord-name").not(this).css("opacity", ".3");
        $("#header-service").css("opacity", ".3");
        $("#header-interaction").css("opacity", ".3");

        $("#fjord-copy").css("opacity", "0");
        $("#lidia-copy").css("opacity", "0");
        $("#lidia-copy02").css("opacity", "0");
        $("#amedeo-copy").css("opacity", "0");
        $("#amedeo-copy02").css("opacity", "0");
        $("#seb-copy").css("opacity", "1");
        $("#seb-copy02").css("opacity", "0");

        $("#seb-portrait").css("opacity", "1");
        $("#lidia-portrait").css("opacity", "0");
        $("#amedeo-portrait").css("opacity", "0");
    });

    $("#seb-link02").mouseenter(function() {
        $(".fjord-name").not(this).css("opacity", ".3");
        $("#header-service").css("opacity", ".3");
        $("#header-interaction").css("opacity", ".3");

        $("#fjord-copy").css("opacity", "0");
        $("#lidia-copy").css("opacity", "0");
        $("#lidia-copy02").css("opacity", "0");
        $("#amedeo-copy").css("opacity", "0");
        $("#amedeo-copy02").css("opacity", "0");
        $("#seb-copy").css("opacity", "0");
        $("#seb-copy02").css("opacity", "1");

        $("#seb-portrait").css("opacity", "1");
        $("#lidia-portrait").css("opacity", "0");
        $("#amedeo-portrait").css("opacity", "0");
    });


    $("#lidia-link01").mouseenter(function() {
        $(".fjord-name").not(this).css("opacity", ".3");
        $("#header-visual").css("opacity", ".3");
        $("#header-interaction").css("opacity", ".3");

        $("#fjord-copy").css("opacity", "0");
        $("#lidia-copy").css("opacity", "1");
        $("#lidia-copy02").css("opacity", "0");
        $("#amedeo-copy").css("opacity", "0");
        $("#amedeo-copy02").css("opacity", "0");
        $("#seb-copy").css("opacity", "0");
        $("#seb-copy02").css("opacity", "0");

        $("#seb-portrait").css("opacity", "0");
        $("#lidia-portrait").css("opacity", "1");
        $("#amedeo-portrait").css("opacity", "0");
    });

    $("#lidia-link02").mouseenter(function() {
        $(".fjord-name").not(this).css("opacity", ".3");
        $("#header-visual").css("opacity", ".3");
        $("#header-interaction").css("opacity", ".3");
        
        $("#fjord-copy").css("opacity", "0");
        $("#lidia-copy").css("opacity", "0");
        $("#lidia-copy02").css("opacity", "1");
        $("#amedeo-copy").css("opacity", "0");
        $("#amedeo-copy02").css("opacity", "0");
        $("#seb-copy").css("opacity", "0");
        $("#seb-copy02").css("opacity", "0");

        $("#seb-portrait").css("opacity", "0");
        $("#lidia-portrait").css("opacity", "1");
        $("#amedeo-portrait").css("opacity", "0");
    });

    $("#amedeo-link01").mouseenter(function() {
        $(".fjord-name").not(this).css("opacity", ".3");
        $("#header-visual").css("opacity", ".3");
        $("#header-service").css("opacity", ".3");

        $("#fjord-copy").css("opacity", "0");
        $("#lidia-copy").css("opacity", "0");
        $("#lidia-copy02").css("opacity", "0");
        $("#amedeo-copy").css("opacity", "1");
        $("#amedeo-copy02").css("opacity", "0");
        $("#seb-copy").css("opacity", "0");
        $("#seb-copy02").css("opacity", "0");

        $("#seb-portrait").css("opacity", "0");
        $("#lidia-portrait").css("opacity", "0");
        $("#amedeo-portrait").css("opacity", "1");
    });

    $("#amedeo-link02").mouseenter(function() {
        $(".fjord-name").not(this).css("opacity", ".3");
        $("#header-visual").css("opacity", ".3");
        $("#header-service").css("opacity", ".3");

        $("#fjord-copy").css("opacity", "0");
        $("#lidia-copy").css("opacity", "0");
        $("#lidia-copy02").css("opacity", "0");
        $("#amedeo-copy").css("opacity", "0");
        $("#amedeo-copy02").css("opacity", "1");
        $("#seb-copy").css("opacity", "0");
        $("#seb-copy02").css("opacity", "0");

        $("#seb-portrait").css("opacity", "0");
        $("#lidia-portrait").css("opacity", "0");
        $("#amedeo-portrait").css("opacity", "1");
    });

    $(".fjord-name").mouseleave(function() {  
        $(".fjord-name").not(this).css("opacity", "1");
        $(".fjord-section-header").css("opacity", "1");

        $("#fjord-copy").css("opacity", "1");
        $("#lidia-copy").css("opacity", "0");
        $("#lidia-copy02").css("opacity", "0");
        $("#amedeo-copy").css("opacity", "0");
        $("#amedeo-copy02").css("opacity", "0");
        $("#seb-copy").css("opacity", "0");
        $("#seb-copy02").css("opacity", "0");
    });
});