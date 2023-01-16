(function(){

    var content = document.querySelector(".jd-gallery");
    var i = 0;
    
    var box = '';
    var bg = $(".jd-gallery").attr("data-screen");
    console.log(bg)
 
    function initBgs(){

        $(".jd-title").html('eRadiouri Online')
        
        $(".box-home").css({
            "background-image":"url('"+bg+"')",
            "background-size":"cover"
        })
    }

    initBgs();

    $("#acasa").on('click', function(){

        $(".jd-container").html("");

        $(".jd-title").html("eRadiouri Online");

        content.innerHTML = '<iframe src="https://eradiouri.ro" width="100%" height="1050"></iframe></div>';

        $(".jd-container").html(content);

    })
    
    $("#convert").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('CONVERT YOUTUBE & FACEBOOK');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'convert');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<iframe src="${pcb_img}" width="100%" height="1050">`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })
     $("#filmebune").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('FILME BUNE');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'filmebune');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<iframe src="${pcb_img}" width="100%" height="1050">`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })
     $("#romuzica").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('DESCARCA MUZICA');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'romuzica');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<iframe src="${pcb_img}" width="100%" height="1050">`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })
     $("#facebook").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('GRUP FACEBOOK');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'facebook');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<iframe src="${pcb_img}" width="100%" height="1050">`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })

    $("#tv").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('PROGRAME TV LIVE');

        var listModelsCouple = modelos.filter(modelo => modelo.type == 'tv');
        var j = 0;

        while(j < listModelsCouple.length){

            pc_img = listModelsCouple[j].img;

            box = `<iframe src="${pcb_img}" width="100%" height="1050">`;

            content.innerHTML += box;

            $(".jd-container").html(content);

            j++;
        }
    })
    
    /*############## ACTION ##########*/

    $(".jd-btn-menu").on('click', function(){

        $(".jd-bar").toggleClass("active")

        $(".jd-aside").toggleClass("hide")

        $(".jd-content").toggleClass("active")
    })
})();
