
	var tpj=jQuery;                  
    var revapi486;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_one").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_one");
        }else{
            revapi486 = tpj("#rev_slider_one").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"yes",
                delay:9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"uranus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,778,480],
                 visibilityLevels:[1200,1040,778,480],
                 gridwidth:[1200,1040,778,480],
                 gridheight:[580,600,500,400],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
     }); /*ready*/