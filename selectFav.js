/**
 * Created by sowwy on 22.10.16.
 */

$(function () {

    $("#fav").on("click", function () {
       // debugger;

        $.ajax({
            url: 'db/select_from_save_towns.php',
            method: 'GET',
            dataType: 'json',
            data: {},
            success: function (response) {
                debugger;
                console.log(response);
            }
        })

    });
})