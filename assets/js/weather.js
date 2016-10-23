/**
 * Created by sowwy on 20.10.16.
 */


$(function () {

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

                                                                /*all this for the degree*/

                for (var j = 0; j < response.length; j++) {
                    if (response[j].day == 'Monday') {
                        var degreeC = response[j].degreeC;
                        var degreeF = response[j].degreeF;
                        $("#one").html(degreeC + "|" + degreeF);
                    }
                }

                for (var k = 0; k < response.length; k++) {
                    if (response[k].day == 'Tuesday') {
                        var degreeC = response[k].degreeC;
                        var degreeF = response[k].degreeF;
                        $("#two").html(degreeC + "|" + degreeF);
                    }
                }

                for (var l = 0; l < response.length; l++) {
                    if (response[l].day == 'Tuesday') {
                        var degreeC = response[l].degreeC;
                        var degreeF = response[l].degreeF;
                        $("#three").html(degreeC + "|" + degreeF);
                    }
                }

                for (var m = 0; m < response.length; m++) {
                    if (response[m].day == 'Tuesday') {
                        var degreeC = response[m].degreeC;
                        var degreeF = response[m].degreeF;
                        $("#four").html(degreeC + "|" + degreeF);
                    }
                }

                for (var n = 0; n < response.length; n++) {
                    if (response[n].day == 'Tuesday') {
                        var degreeC = response[n].degreeC;
                        var degreeF = response[n].degreeF;
                        $("#five").html(degreeC + "|" + degreeF);
                    }
                }

                for (var o = 0; o < response.length; o++) {
                    if (response[o].day == 'Tuesday') {
                        var degreeC = response[o].degreeC;
                        var degreeF = response[o].degreeF;
                        $("#six").html(degreeC + "|" + degreeF);
                    }
                }

                for (var p = 0; p < response.length; p++) {
                    if (response[p].day == 'Tuesday') {
                        var degreeC = response[p].degreeC;
                        var degreeF = response[p].degreeF;
                        $("#seven").html(degreeC + "|" + degreeF);
                    }
                }


                                                                    /*here we make the program change the params on
                                                                      a click. It's quite long and there is alot of
                                                                      code repeating but it does the job.*/
                $('#monday2').on("click", function () {
                    for(var i = 0; i < response.length; i++) {

                        if (response[i].day == 'Monday') {
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
                            $('#day').html("Mon");

                          // $("#one").html(degreeC + "|" + degreeF);

                            if (name == "Dubai") {
                                $("#weather").html("Sun");
                            } else if (name == 'Sofia') {
                                $("#weather").html("Sun");
                            } else if (name == "Hollywood") {
                                $("#weather").html("Sun");
                            }

                            $("#day").show();
                        }
                    }
                });
                $('#tuesday2').on("click", function () {
                    for(var i = 0; i < response.length; i++) {

                        if (response[i].day == 'Tuesday') {
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
                            $('#day').html("Tue");

                            if (name == "Dubai") {
                                $("#weather").html("Sun");
                            } else if (name == 'Sofia') {
                                $("#weather").html("Clouds");
                            } else if (name == "Hollywood") {
                                $("#weather").html("Partly cloudy");
                            }

                            $("#day").show();

                        }
                    }
                });
                $('#wednesday2').on("click", function () {
                    for(var i = 0; i < response.length; i++) {

                        if (response[i].day == 'Wednesday') {
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
                            $('#day').html("Wed");

                            if (name == "Dubai") {
                                $("#weather").html("Partly cloudy");
                            } else if (name == 'Sofia') {
                                $("#weather").html("Snow");
                            } else if (name == "Hollywood") {
                                $("#weather").html("Sun");
                            }

                            $("#day").show();

                        }
                    }
                });
                $('#thursday2').on("click", function () {
                    for(var i = 0; i < response.length; i++) {

                        if (response[i].day == 'Thursday') {
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
                            $('#day').html("Thu");

                            if (name == "Dubai") {
                                $("#weather").html("Partly cloudy");
                            } else if (name == 'Sofia') {
                                $("#weather").html("Partly cloudy");
                            } else if (name == "Hollywood") {
                                $("#weather").html("Partly cloudy");
                            }

                            $("#day").show();

                        }
                    }
                });
                $('#friday2').on("click", function () {
                    for(var i = 0; i < response.length; i++) {

                        if (response[i].day == 'Friday') {
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
                            $('#day').html("Fri");

                            if (name == "Dubai") {
                                $("#weather").html("Clouds");
                            } else if (name == 'Sofia') {
                                $("#weather").html("Sun");
                            } else if (name == "Hollywood") {
                                $("#weather").html("Sun");
                            }

                            $("#day").show();
                        }
                    }
                });
                $('#saturday2').on("click", function () {
                    for(var i = 0; i < response.length; i++) {

                        if (response[i].day == 'Saturday') {
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
                            $('#day').html("Sat");

                            if (name == "Dubai") {
                                $("#weather").html("Rain");
                            } else if (name == 'Sofia') {
                                $("#weather").html("Sun");
                            } else if (name == "Hollywood") {
                                $("#weather").html("Rain");
                            }

                            $("#day").show();

                        }
                    }
                });
                $('#sunday2').on("click", function () {
                    for(var i = 0; i < response.length; i++) {

                        if (response[i].day == 'Sunday') {
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
                            $('#day').html("Sun");

                            if (name == "Dubai") {
                                $("#weather").html("Thunders");
                            } else if (name == 'Sofia') {
                                $("#weather").html("Thunders");
                            } else if (name == "Hollywood") {
                                $("#weather").html("Rain");
                            }

                            $("#day").show();

                        }
                    }
                });

            }

        });

    })

});
