$(document).ready(function () {
    var leafArr = Array(25);
    var leftval = Array(25);
    for (var i = 0; i < 25; i++) {
        var elem;
        if(i==11){
            elem=$('<div class="land"></div>');
        }
        else if(i==13){
            elem=$('<div class="land"></div>');
        }
        else if (Math.trunc(Math.random() * 2)) {
            elem = $('<div class="land"></div>');
            leftval[i]=1;
            console.log(leftval[i])
        }
        else {
            if(leftval[i-1]==0){
                elem = $('<div class="land"></div>');
                leftval[i]=1;
                console.log(leftval[i])
            }
            else{
            elem = $('<div class="noland"></div>');
            leftval[i]=0; 
            console.log(leftval[i]);
            }
        }

        leafArr[i]=elem;
        $("#leaves").append(elem)
    }

    $(document).keypress(function (e) {
        if (e.key === " ") {
            //remove the first element from array
            // animate the #leaves by width of leaf to left.
            // on animation  complete, ;you need to move each element to left
            // add new element at the end
            $('#frog')
                .animate({ "bottom": "600px" }, 500)
                .animate({ "bottom": "150px" }, 500)
            // $("#leaves")
            //     .animate({ "right": "20px" })
            //     $("#leaves").append(elem);

            $('#leaves').find('div').first().remove();
            $('#leaves').find('div').first().remove();
            $('#leaves').append($('<div class="land"></div>'));
            $('#leaves').append($('<div class="noland"></div>'));

        }
    });
    setInterval(function () {
        var playerpos = $('#frog').position();
        $('#land').children('.lands').each(function () {
            var o = $(this).position();
            var x = playerpos.left + 300;
            if (o.left > x && o.left + 50 < x) {
                alert('GAME OVER');
            }
        });
    }, 200);


});