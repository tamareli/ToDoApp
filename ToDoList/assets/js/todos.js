//check off a task
$("ul").on("click","li", function () {
    $(this).toggleClass("done");
})
//remove a task
$("ul").on("click","span", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
    })
})
//adding new task
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoText + "</li>");
    }
})
$(".fa-pencil-alt").on("click", function () {
    $("input[type='text']").fadeToggle();
})