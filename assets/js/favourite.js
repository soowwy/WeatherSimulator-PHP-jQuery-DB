/**
 * Created by sowwy on 20.10.16.
 */

$(function () {

                                                /*Saving favourite towns in our Favorites section.*/
    $('#save').on("click", function (e) {

        towns = [];
        var fav = $('#fav');

        var name = $('#town').html();

        //console.log(name);

        $.ajax({
            url: 'db/insert.php',
            method: 'POST',
            dataType: 'json',
            data: {name: name},
            success: function (response) {
                towns.push(response);

                console.log(towns);

                for (var i = 0; i < towns.length; i++) {
                    //console.log(towns[i]);
                    fav.append($('<option></option>').val(towns[i]).html(towns[i]))
                    }
                }
        });
    });


                                                /*From here on we use the same code as in weather.js so
                                                * when we click on favourite town it also changes the data on the window.*/
    $("#fav").on("change", function () {
        debugger;

        var select = $('#fav').val();

        $('#info').show();
        $('#degree').show();
        $('#save').show();

        if (select == "Dubai") {
            $('#container').css("background-image", "url(assets/images/dubai.jpg)");
        } else if (select == "Sofia") {
            $('#container').css("background-image", "url(assets/images/Sofia.jpg)");
        } else if (select == "Hollywood") {
            $('#container').css("background-image", "url(assets/images/hollywood.jpg)");
        }


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

                    // console.log(response);

                }

                $('#town').html(name);
                $('#precipitation').html(precipitation);
                $('#humidity').html(humidity);
                $('#wind').html(wind);
                $('#celsius').html(degreeC);
                $('#fahrenheit').html(degreeF);
                $('#day').html(day);

                window.onbeforeunload = function() {
                    sessionStorage.setItem("name", $('#inputName').val());
                };

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
                            $('#day').html(day);
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
                            $('#day').html(day);
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
                            $('#day').html(day);
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
                            $('#day').html(day);
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
                            $('#day').html(day);
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
                            $('#day').html(day);
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
                            $('#day').html(day);
                        }
                    }
                });

            }

        });

    })
});