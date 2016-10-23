/**
 * Created by sowwy on 20.10.16.
 */

$(function () {

    one = $('#one');
    two = $('#two');
    three = $('#three');                        /*here we store the id's of the pictures so we can use them later. */
    four = $('#four');
    five = $('#five');
    six = $('#six');
    seven = $('#seven');

    $('#save').hide();
    $('#info').hide();
    $('#degree').hide();
    $('#day').hide();
   // $(".info").css('visibility', 'hidden');

    $("#selection").on("change", function () {
        //debugger;
        var select = $('#selection').val();
        $('#info').show();
        $('#degree').show();
        $('#save').show();
                                                        /*Some pictures changing.*/

        if (select == "Dubai") {
            $('#container').css("background-image", "url(assets/images/dubai.jpg)");
            $('#monday2').css("background-image", "url(assets/images/44.png)");
            $('#tuesday2').css("background-image", "url(assets/images/44.png)");
            $('#wednesday2').css("background-image", "url(assets/images/33.png)");
            $('#thursday2').css("background-image", "url(assets/images/33.png)");
            $('#friday2').css("background-image", "url(assets/images/55.png)");
            $('#saturday2').css("background-image", "url(assets/images/22.png)");
            $('#sunday2').css("background-image", "url(assets/images/11.png)");
        } else if (select == "Sofia") {
            $('#container').css("background-image", "url(assets/images/Sofia.jpg)");
            $('#monday2').css("background-image", "url(assets/images/44.png)");
            $('#tuesday2').css("background-image", "url(assets/images/55.png)");
            $('#wednesday2').css("background-image", "url(assets/images/66.png)");
            $('#thursday2').css("background-image", "url(assets/images/33.png)");
            $('#friday2').css("background-image", "url(assets/images/44.png)");
            $('#saturday2').css("background-image", "url(assets/images/44.png)");
            $('#sunday2').css("background-image", "url(assets/images/11.png)");
        } else if (select == "Hollywood") {
            $('#container').css("background-image", "url(assets/images/hollywood.jpg)");
            $('#monday2').css("background-image", "url(assets/images/44.png)");
            $('#tuesday2').css("background-image", "url(assets/images/33.png)");
            $('#wednesday2').css("background-image", "url(assets/images/44.png)");
            $('#thursday2').css("background-image", "url(assets/images/33.png)");
            $('#friday2').css("background-image", "url(assets/images/44.png)");
            $('#saturday2').css("background-image", "url(assets/images/22.png)");
            $('#sunday2').css("background-image", "url(assets/images/22.png)");
        }

                                                         /*Using ajax for retrieving the data from DB*/
        $.ajax({
            url: 'db/select.php',
            method: 'POST',
            dataType: 'json',
            data: {select: select},
            success: function (response) {

               //console.log(response);
                for(var i = 0; i < response.length; i++) {
                    var name = response[i].name;
                    var precipitation = response[i].precipitation;
                    var humidity = response[i].humidity;
                    var wind = response[i].wind;
                    var degreeC = response[i].degreeC;
                    var degreeF = response[i].degreeF;
                    var day = response[i].day;

                }

                $('#town').html(name);
                $('#precipitation').html(precipitation);
                $('#humidity').html(humidity);
                $('#wind').html(wind);
                $('#celsius').html(degreeC);
                $('#fahrenheit').html(degreeF);
                $('#day').html(day);




                                                                    /*here we make the program change the params on
                                                                      a click. */


                monday = $('#monday2');
                mondayStr = "Monday";
                tuesday = $('#tuesday2');
                tuesdayStr = "Tuesday";
                wednesday = $('#wednesday2');
                wednesdayStr = "Wednesday";
                thursday = $('#thursday2');
                thursdayStr = "Thursday";
                friday = $('#friday2');
                fridayStr = "Friday";
                saturday = $('#saturday2');
                saturdayStr = "Saturday";
                sunday = $('#sunday2');
                sundayStr = "Sunday";

                sun = "Sun";
                rain = 'Rain';
                thunders = "Thunders";
                snow = "Snow";
                clouds = "Clouds";
                partlyCloudy = "Partly cloudy";



                function test(day, value, one, two, three) {
                    day.on("click", function () {
                        for(var i = 0; i < response.length; i++) {

                            if (response[i].day == value) {
                                var name = response[i].name;
                                var precipitation = response[i].precipitation;
                                var humidity = response[i].humidity;
                                var wind = response[i].wind;
                                var degreeC = response[i].degreeC;
                                var degreeF = response[i].degreeF;
                                var day = response[i].day;
                                $('#town').html(name);
                                $('#precipitation').html(precipitation);
                                $('#humidity').html(humidity);
                                $('#wind').html(wind);
                                $('#celsius').html(degreeC);
                                $('#fahrenheit').html(degreeF);
                                $('#day').html(value);

                                // $("#one").html(degreeC + "|" + degreeF);

                                if (name == "Dubai") {
                                    $("#weather").html(one);
                                } else if (name == 'Sofia') {
                                    $("#weather").html(two);
                                } else if (name == "Hollywood") {
                                    $("#weather").html(three);
                                }

                                $("#day").show();
                            }
                        }
                    });
                }

                test(monday, mondayStr, sun, sun, sun);
                test(tuesday, tuesdayStr, sun, clouds, partlyCloudy);
                test(wednesday, wednesdayStr, partlyCloudy, snow, sun);
                test(thursday,thursdayStr, partlyCloudy, partlyCloudy, partlyCloudy);
                test(friday, fridayStr, clouds, sun, sun);
                test(saturday, saturdayStr, rain, sun, rain);
                test(sunday, sundayStr, thunders, thunders, rain);


                                                                        /*a function for changing the degree*/

                function changeDegree(value, number) {
                    for (var j = 0; j < response.length; j++) {
                        if (response[j].day == value) {
                            var degreeC = response[j].degreeC;
                            var degreeF = response[j].degreeF;
                            number.html(degreeC + "|" + degreeF);
                        }
                    }
                }

                changeDegree(mondayStr, one);
                changeDegree(tuesdayStr, two);
                changeDegree(wednesdayStr, three);
                changeDegree(thursdayStr, four);
                changeDegree(fridayStr, five);
                changeDegree(saturdayStr, six);
                changeDegree(sundayStr, seven);

            }

        });

    })

});
