$(document).ready(function()
{
    $("#media1").mousemove(function()
    {
        $("#imageMedia1").attr("src","images/mirror_2.svg");
    });
    $("#media1").mouseout(function()
    {
        $("#imageMedia1").attr("src","images/mirror.svg");
    })
    $("#media2").mousemove(function()
    {
        $("#imageMedia2").attr("src","images/cream-2.svg");
    });
    $("#media2").mouseout(function()
    {
        $("#imageMedia2").attr("src","images/cream.svg");
    })
    $("#media3").mousemove(function()
    {
        $("#imageMedia3").attr("src","images/facial-mask_2.svg");
    });
    $("#media3").mouseout(function()
    {
        $("#imageMedia3").attr("src","images/facial-mask.svg");
    })
    $("#media4").mousemove(function()
    {
        $("#imageMedia4").attr("src","images/makeup.svg");
    });
    $("#media4").mouseout(function()
    {
        $("#imageMedia4").attr("src","images/make-up.svg");
    })
    $("#media8").mousemove(function()
    {
        $("#imageMedia8").attr("src","images/makeup_2.svg");
    });
    $("#media8").mouseout(function()
    {
        $("#imageMedia8").attr("src","images/makeup.svg");
    });
    
    
    
    $(".carddividedfour").mousemove(function(){
        $(this).removeClass("bg-dark");
        $(this).addClass("bg-light");
        $(".card-text").css("color","black");
    });
    $(".carddividedfour").mouseout(function(){
        $(this).removeClass("bg-light");
        $(this).addClass("bg-dark");
    });
    
    
    $("#section5").height($(window).height());
    
    
    
});











