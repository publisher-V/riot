$(".drawer-gnb-item-box-main").click(function () {
    $(this).toggleClass("active");
});

$(".drawer-open").click(function () {
    $(".drawer-gnb").addClass("show");
    $(".res-modal-background").addClass("show");
});

$(".drawer-close").click(function () {
    $(".drawer-gnb").removeClass("show");
    $(".res-modal-background").removeClass("show");
});

$(".res-modal-background").click(function () {
    $(".drawer-gnb").removeClass("show");
    $(".res-modal-background").removeClass("show");
});

$(".modal-background").click(function () {
    $(".gnb-sub").removeClass("show");
    $(".drawer-gnb").removeClass("show");
    $(".modal-background").removeClass("show");
    $(".res-gnb-contianer").css("display", "flex");
    $("body").css("overflow-y", "scroll");
});

$(".res-menu-show").click(function () {
    $(".gnb-sub").addClass("show");
    $(".res-gnb-contianer").css("display", "none");
    $(".modal-background").addClass("show");
    $("body").css("overflow-y", "hidden");
});

$(".menu-show").click(function () {
    $(".gnb-sub").addClass("show");
    $(".res-gnb-contianer").css("display", "none");
    $(".modal-background").addClass("show");
    $("body").css("overflow-y", "hidden");
});

$(".menu-hide").click(function () {
    $(".gnb-sub").removeClass("show");
    $(".res-gnb-contianer").css("display", "flex");
    $(".modal-background").removeClass("show");
    $("body").css("overflow-y", "scroll");
});