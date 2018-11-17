$(".burgerYum").on("click", function() {
    var burger = $(this).attr('id')
    $.ajax({
        url: `/burgers/${burger}`,
        method: "PUT"
    }).then(function(res){
        console.log(res);
        window.location.href = "/"
    })    

})