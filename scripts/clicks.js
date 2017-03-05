
$('document').ready(function(){
    var $menuList=$('#menu').find('.listItem .item');
    var $subMenuList=$('#menu .subItem');

    var $pages=$('#pages');

    var prevPageId='page-home';
    $menuList.on({
        click:function(){
            if(prevPageId!==removeMenuAddPage($menuList.eq($menuList.index(this)).attr('id'))){
                var $thatMenu=$menuList.eq($menuList.index(this));
                var menuId=$thatMenu.attr('id');
                if($menuList.eq($menuList.index(this)).find('.subItem').length==0) {
                    $pages.fadeOut('slow', function () {
                        $pages.children().fadeOut('fast');
                        $pages.fadeIn('slow');
                        $pages.find('#' + removeMenuAddPage(menuId)).fadeIn('slow');
                    });


                    $('.active').removeClass('active');
                    $thatMenu.find('.m').addClass('active');

                    prevPageId = removeMenuAddPage(menuId);
                }

            }else{
                console.log("already opened");
            }
        }
    });
    $subMenuList.on({
        click:function(){
            var $thatMenu=$subMenuList.eq($subMenuList.index(this));
            var menuId=$thatMenu.attr('id');
            $pages.children().fadeOut('fast');
            $pages.fadeIn('slow');
            $pages.find('#' + removeMenuAddPage(menuId)).fadeIn('slow');




            $('.active').removeClass('active');
            $thatMenu.parent().parent().parent().find('.m').addClass('active');
            $thatMenu.addClass('active');

            prevPageId = removeMenuAddPage(menuId);
        }
    })

    function removeMenuAddPage(x){
        var str="page-";
        for(var i=5;i<x.length;i++){
            str+=x[i];
        }
        return str;
    }
});