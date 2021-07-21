$(function(){
    var $mainMenuItem = $("#main-menu ul").children("li"),
    totalMainMenuItem = $mainMenuItem.length,
    openedIndex = 2,

    init = function(){
        bindEvent();
        if(validIndex(openedIndex)){
            animateItem($mainMenuItem.eq(openedIndex), true, 700)
        }
    },

    bindEvent = function(){
        $mainMenuItem.children(".image").click(function(){
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);

            
        });
        $(".button").hover(
            function(){
                $(this).addClass("hovered");
            },
            function(){
                $(this).remove("hovered");  
            }
            );

            $(".button").click(function(){
                var newIndex = $(this).index();
                checkAndAnimateItem(newIndex);

            })

    },
    validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItem);
    },
    animateItem = function($item,toOpen, speed){
        var $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width: "420px"} : {width : "140px"},
        colorImageParam = toOpen ? {left : "0px"} : {left : "140px"}
        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam, speed);
    },
    
    checkAndAnimateItem = function(indexToCheckAndAnimate){
        if(openedIndex === indexToCheckAndAnimate){
            animateItem($mainMenuItem.eq(indexToCheckAndAnimate), false, 250);
            openedIndex = -1;
        }
        else{
            if(validIndex(indexToCheckAndAnimate)){
                animateItem($mainMenuItem.eq(openedIndex), false, 250),
                openedIndex = indexToCheckAndAnimate;
                animateItem($mainMenuItem.eq(openedIndex), true, 250);
            }

        }

    }
    ;


    init();
})