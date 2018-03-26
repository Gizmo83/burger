// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevourState = {
            devoured: newDevoured,
            rating: false
        };
        //console.log(newDevourState);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devoured to", newDevourState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".down").on("click", function (event) {
        var id = $(this).data("id");
        var newRating = $(this).data("newrating");

        var newRatingState = {
            rating: newRating,
            devoured: false
        };
        //console.log(newRatingState);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newRatingState
        }).then(
            function () {
                console.log("changed rating to", newRatingState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim(),
            restaurant_name: $("#restaurant-input").val().trim()
        };
        //console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");
        //console.log(id);
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});