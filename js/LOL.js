//=============================================��һ����JS-��ʼ=========================================

/**
 * Created by Administrator on 2016/9/1 0001.
 */

/**
 * ��ҳ����ϣ�����header���� js����
 *
 */
//����һ
//���������header���ֵĵ�����ô�ӵ�����ʾ ����Ƴ�hideul��hideul��ʧ
$(document).ready(function () {//��ں���
    $("#header-nav-ul").mouseenter(function () {//��header�ĵ�����������¼�
        $("#hideul").stop().slideDown();//����ul��ʾ
    });
    $("#hideul").mouseleave(function () {
        $("#hideul").stop().slideUp();//����ul��ʾ
    });
});
//���ܶ���download�Ĳ����������͸���ȷ����任
$(function () {
    //��ȡ��Ŀ��Ԫ��
    $(".download .publica").mouseenter(function () {
        $(this).css("opacity", "0.8");
    });
    $(".download .publica").mouseleave(function () {
        $(this).css("opacity", "1");
    })
});
//��������ư���
$(function () {
    //�����뵽nav��a�� ����ͼ�����ƶ�
    //��ȡ��ǰͼƬ��λ��
    var defaultLeft = $("#moveimg").position().left;
    $("#header-nav-ul li").mouseenter(function () {//��li���ritual�¼�
        //��ǰli������Ϊ���ƶ���ʱ��
        var idx = $(this).index();
        $("#moveimg").stop().animate({"left": defaultLeft + idx * 138}, 200)
    });
    //�����a��ʱ���¼����img��λ��
    var clickPo=defaultLeft;
    $("#header-nav-ul li").click(function () {
        // �����¼���ڵ�λ��
        clickPo = $("#moveimg").position().left;
    });
    //����Ƴ�li��ʱ��ص���һ�ε����λ��
    $("#header-nav-ul").mouseleave(function () {
        // alert("hah ");
        $("#moveimg").stop().animate({"left": clickPo}, 200)
    });
});
// ������ ���#loginApi���a��ǩʹ���ֲ���ʾ ������ʾ��½��ʾ�������ز���
$(function () {//��ں���
    //��ȡ��a����
    $("#loginApi").click(function () {//���ע���¼�

        // alert("hehhe");
        //���ֲ���ʾ
        var defL;
        var defT;
        $("#mask").css("display","block");
        //1.��½��ʾ����ʾ
        $("#loginbar").css("display","block");
        //ÿһ�����ʱ������ʾ�������ԭ����λ��
        $("#loginbar").css({
            "top":"",
            "left":"50%",
        });
        //2.�Զ���uername��ȡ����s

        $("#username").trigger("focus");
        //3.����������߿�
        $("#username").css("outline","1px solid #05B896")
        //4.��password�л�ȡ������¼���ʱ���ڴ���outline����
        $("#pwd").focus(function () {
            $(this).css("outline","1px solid #05B896");
            // ͬʱuser��user��outlineΪ��
            $("#username").css("outline","");
        });

        $("#username").focus(function () {
            $(this).css("outline","1px solid #05B896");
            // ͬʱuser��user��outlineΪ��
            $("#pwd").css("outline","");
        });

        //���� 5.��ק����

        $("#removebox").mousedown(function () {//��갴��
            //�жϵ�ǰ��������Ƿ�֧��getSelection
            $(document).mousemove(function (e) {//��document���ƶ�


                var left=e.pageX+310-309;//��ȡ�����ҳ�����ƶ��ľ��� ��Ϊloginbar����߾���ϱ߾�
                var top=e.pageY-135-20;//��Ϊ��css��loginbari��margin���Լ��ϵļ�ȥ ��ȥ�ļ���
                $("#loginbar").css({"left":left,"top":top});

                window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
            });
        });
        $(document).mouseup(function () {//���̧���ͷ��ƶ��¼�
            $(this).off("mousemove");
            // window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
        });
        //6.����ʱ��loginAPI���ж�λ
        $(window).scroll(function (e) {
            //�õ�½��̶���λ
            $("#loginbar").css("position","fixed");
            var scolltop=$(this).scroll().top();
            console.log(scolltop);
            //  top=e.pageY-scolltop+310-150;//��Ϊ��css��loginbari��margin���Լ��ϵļ�ȥ ��ȥ�ļ���

        });











        //������username��pwdʱ�Ĺ���keydown��ʱ�� ���input��ֵ��Ϊ����ô��������Ĳ�����
        //1.username
        $("#username").keyup(function () {
            // console.log($(this).val().trim());
            if($(this).val().trim().length>0){//���length����0��ô���ò�����
                $("#clearContent").css("display","block");
            }else{//���length=0��ô��������
                $("#clearContent").css("display","none");
            }
            //�������õ�ǰ��valΪ�ղ����Զ���ȡ����
            $("#clearContent a").click(function () {
                // alert("����");
                //�������
                $("#username").val("");
                //�����Զ���ȡ����
                $("#username").trigger("focus");
                //����������߿�
                $("#username").css("outline","1px solid #05B896")
            });

            //����������֤
            //�����ַ��к����ո���Щ��ʽ�ַ���������$�Լ������ַ������ᱨ��
            if(/(\W+)|(\s+)/.test($(this).val())){
                console.log(/(\W+)|(\s+)/.test($(this).val()));
                console.log($(this).val());
                $("#tip").text("�������û���������");
                $("#tip").css("color","red")
            }else{
                $("#tip").text("");
            }

        });

        //2.pwd
        $("#pwd").keyup(function () {
            // console.log($(this).val().trim());
            if($(this).val().trim().length>0){//���length����0��ô���ò�����
                $("#clearPwd").css("display","block");
            }else{//���length=0��ô��������
                $("#clearPwd").css("display","none");
            }
            //�������õ�ǰ��valΪ�ղ����Զ���ȡ����
            $("#clearPwd a").click(function () {
                // alert("����");
                //�������
                $("#pwd").val("");
                //�����Զ���ȡ����
                $("#pwd").trigger("focus");
                //����������߿�
                $("#pwd").css("outline","1px solid #05B896")
            });
            if(/(\W+)|(\s+)/.test($(this).val())){
                console.log(/(\W+)|(\s+)/.test($(this).val()));
                console.log($(this).val());
                $("#tip").text("�������û���������");
                $("#tip").css("color","red")
            }else{
                $("#tip").text("");
            }
        });
        //����ύ��ť��ʱ������ж�����ǿվͱ���
        $("#sub").click(function () {
            if($("#username").val().length==0||$("#pwd").val().length==0){
                $("#tip").text("�������û���������");
                $("#tip").css("color","red")
                return;
            }else{
                $("#tip").text("");
            }
        });

        //�����ʱ�������ֲ�͵�¼ҳ������
        $("#closebaner").click(function () {
            //���ֲ�����
            $("#mask").css("display","none");
            //��½��ʾ������
            $("#loginbar").css("display","none");
            //���input�е�����
            $("#username").val("");
            $("#pwd").val("");
            $("#tip").text("");
        });

    });

});





//=============================================��һ����JS-����=========================================



//=============================================�ڶ�����JS-��ʼ=========================================
$(function () {


    //���岿��
    // ��߲���;
    //�޲���ʱ���Զ��仯
    //����꾭��ʱ���Զ��л�ͼƬ
    //����һ����ǣ�����ͬ��
    var fightIndex = 0;
    //��ȡ��ʾͼƬ�Ŀ�ܿ��
    var picturesWidth = $(".pictures").width();
    //��ȡ����ͼƬ�ƶ���ul
    var list_ul = $("#pic>ul");
    var timeId = null;
    timeId = setInterval(fightMoveHand, 2000);
    //Ϊ�˴ﵽ�޷��ν�Ч����������Ҫ�ڴ����һ��ͼƬ��������Ϊ��һ�ŵ�����
    $(".pictures .list").append($(".pictures li").eq(0).clone());
    //��ȡ����ͼƬ
    var list_imgs = $(".pictures>ul>li");
    //��װ��ʱ���Զ��ƶ�����
    function fightMoveHand() {
        //�����Ѿ��������һ��ͼƬ��
        if (fightIndex === (list_imgs.length - 1)) {
            //�����䷵�ص���һ�� ��λ��
            fightIndex = 0;
            $(list_ul).css("left", "0px")
        }
        //Ϊ��ʵ���޷����ӵ�Ч��������Ӧ��������ʾ�ڶ���ͼƬ
        fightIndex++;
        $(list_ul).animate({"left": -fightIndex * picturesWidth}, 400);
        //������ʱͼƬ�Ѿ��������һ�ŵ�λ�ã�Ҳ���Ǹ���ӵĵ����ţ����Ǿ��õ�һ��span��ʾ��ʽ
        if (fightIndex === list_imgs.length - 1) {
            $("#fight li").eq(0).addClass("current");
            $("#fight li").eq(0).siblings().removeClass("current");
        }
        //�������е�li������ʽ����� �ɵ��������ı��Լ�����ɫ
        $("#fight li").eq(fightIndex).addClass("current").siblings().removeClass("current");
    }

    //��������ӣ���ʱ�������
    $(".left-mainer").mouseenter(function () {
        clearInterval(timeId);
    });
    //����뿪���ӣ���ʱ������ִ��
    $(".left-mainer").mouseleave(function () {
        timeId = setInterval(fightMoveHand, 2000);
    });
    //��꾭��ÿһ���ı��е�li����ӦͼƬ���Ÿı�
    //��һ���±�Ĭ������ʽ
    $("#fight li").eq(0).addClass("current");

    //��꾭�����ı䵱ǰli����ʽ
    $("#fight li").mouseenter(function () {
        //��ȡ��ǰ��span�±�
        fightIndex = $(this).index();
        //��õ�ǰ��span���ɵ�����li��ʽ
        $(this).addClass("current").siblings().removeClass("current");
        //���㵱ǰ��Ҫ�ƶ��ľ���
        var moveWidth = fightIndex * picturesWidth;
        //��װͼƬ��ul�����Ƶ���λ��
        $(list_ul).animate({"left": -moveWidth}, 500);
    });

//�ұ߲���;
    $("#mainerNav>ul>li").mouseenter(function () {
        //��ȡ����Ӧ���±꣬������ʾ��Ӧ�ĺ���
        var imgP = $(this).index();
        //�õ�ǰ�ĵ�������ʾ��������ʽ
        $(this).addClass("current").siblings().removeClass("current");
        //��ȡ��Ӧ�ĺ��ӣ���ʾ��Ӧ�ĺ���
        $(".news-content").eq(imgP).css("display", "block").siblings().css("display", "none");
    });

});
//=============================================�ڶ�����JS-����=========================================



//=============================================��������JS-��ʼ=========================================

//��Ƶ����ģ�� videoCenter
//ʹ����js
$(function () {
    /*��Ƶ����start*/
    var newVideoStr = "";//�洢��Ƶ����ƴ���ַ���
//��ʾ��Ӧ����Ƶ��Ŀ
    function bianliVideo(newVideoArr) {
        newVideoStr = "";//�ܹؼ�!!ÿ����Ҫ���ַ����Ϳ�
        for (var i = 0; i < newVideoArr.length; i++) {
            newVideoStr += '<li>' +
                '<a href="video.html" class="v-link" href="#">' +
                '<img src=' + newVideoArr[i].srcImg + ' >' +
                '<span class="shadow1"></span>' +
                '<span class="v-meta">' +
                '<!--<span class="v-author">ǹ��õ��</span>-->' +
                '<span class="v-time">' + newVideoArr[i].vtime + '</span>' +
                '</span>' +
                '<i class="icon-v"></i>' +
                '</a>' +
                '<h5 class="v-name"><a href="#">' + newVideoArr[i].description + '</a></h5>' +
                '</li>';
        }
        return newVideoStr;
    }

    $("#Jvideo_n1").css("display", "block").html(bianliVideo(zuixinVideo));//ҳ����������ʾ�ڸ�tab�����������
    $("#Jvideo>li").mouseenter(function () {//��Ƶtab����Ŀ liע���������¼�
        //tab��li����ʽҲҪ�����޸� ��̬������� current  ������
        $(this).addClass("current").siblings().removeClass("current");
        //��Ƶ��Ŀ���������Ӧ��li��ʾ��Ӧ����Ŀ  ������
        $("#contentVideo>ul").eq($(this).index()).css("display", "block").siblings().css("display", "none");

        switch ($(this).index()) {
            case 0:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(zuixinVideo));
                break;
            case 1:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(jieshuoVideo));
                break;
            case 2:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(freeheroVideo));
                break;
            case 3:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(sashiVideo));
                break;
            case 4:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(quweiVideo));
                break;
            case 5:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(guanfangVideo));
                break;
            default :
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(zuixinVideo));
        }
        //�����ÿ��С��Ʒ���ں�,��ʾ����
        $("#contentVideo>ul").eq($(this).index()).find("li").mouseenter(function () {

            $(this).find(".icon-v").css("display", "block");
        });
        $("#contentVideo>ul").eq($(this).index()).find("li").mouseleave(function () {

            $(this).find(".icon-v").css("display", "none");
        });
    });


    var hero_0Str = "";//�洢Ӣ��Ƥ�����ֵ�һ��Tab���µ�Ӣ������
    /**********************************�޸�1**********************/
    function bianliHero(heroArr) {
        hero_0Str = "";
        if (heroArr == hero_0) {
            for (var i = 0; i < heroArr.length; i++) {
                hero_0Str += '<a href="lol-info-detail/info-detail.html" title=' + heroArr[i].title + 'href="#" target="_blank">' +
                    '<img width="76" height="76" src=' + heroArr[i].srcImg + ' alt="">' +
                    '<span class="sbg">' +
                    '<span class="first-name">' + heroArr[i].firstName + '</span>' +
                    '</span>' +
                    '</a>';
            }
        } else {
            for (var i = 0; i < heroArr.length; i++) {
                hero_0Str += '<a  href="yanquefenye/yanque.html" target="_blank">' +
                    '<img width="76" height="165" src=' + heroArr[i].srcImg + ' alt="">' +
                    '<span class="sbg">' +
                    '<span class="first-name">' + heroArr[i].firstName + '</span>' +
                    '</span>' +
                    '</a>';
            }
        }
        return hero_0Str;
    }

    /**********************************�޸�1**********************/
    $("#J_freeList").html(bianliHero(hero_0));//Ĭ����ʾһ��tab���µ�Ӣ��
    $("#J_heroTab>li").mouseenter(function () {//Ӣ��Ƥ�����ֵ�Tab��

        $(this).addClass("current").siblings().removeClass("current");//Tab��ʾ��ʽ
        //�����Ӧ��ʾTab�������
        $("#hero-tab-content>div").eq($(this).index()).css("display", "block").siblings().css("display", "none");
        switch ($(this).index()) {
            case 0:
                $("#hero-tab-content>div").eq($(this).index()).html(bianliHero(hero_0));
                break;
            case 1:
                $("#hero-tab-content>div").eq($(this).index()).html(bianliHero(hero_1));
                break;
            case 2:
                $("#hero-tab-content>div").eq($(this).index()).html(bianliHero(hero_2));
                break;
            default:
                $("#hero-tab-content>div").eq($(this).index()).html(bianliHero(hero_0));
        }

    });

    /*������������start*/
    // ����������۰�ť,��ȡ�ı��������������ƽ��̬��ӵ���������


    /*��Ƶ����ҳend*/

});


//=============================================��������JS-����=========================================



//=============================================���Ĳ���JS-��ʼ=========================================
window.onload = function () {
    function my$(id) {
        return document.getElementById(id)
    }

    var matchCenter = my$("matchCenter");

    //����������������������¼�
    matchCenter.onmouseover = function () {
        matchCenter.className = " highlight";
    };

    //������������������Ƴ��¼�
    matchCenter.onmouseout = function () {
        matchCenter.className = "match-inter";
    };

    //��tab�����ÿһ��liע����������¼�
    var matchTab = my$("matchTab");
    var matchPic = my$("matchPic");
    var lis = matchTab.children;
    console.log(lis);
    var allNewsPart = my$("allNewsPart");
    var newsparts = allNewsPart.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {
            //��ÿ��Li�������±�i����indexΪ���ԣ�iΪ������
            //�����lis[i],���ڶ�̬��ע���¼���ע����i=lis.length�ˣ�����ֱ��������������undefined
            for (var i = 0; i < lis.length; i++) {
                //lis[i].index = i;
                lis[i].className = "";
                newsparts[i].style.display = "none";
            }
            this.className = "current";
            matchPic.style.backgroundImage = "url(images/Jevent_" + (this.index + 1) + ".jpg)";
            newsparts[this.index].style.display = "block";
        }
    }
    //�������Ĳ��� E=================================================================================


    //����Ĳ��� S===================================================================================

    //�����ͼƬע������ƶ��¼����ƶ������棬��ʾһ��͸�����ֲ�
    $("#activePicBox").mouseenter(function () {
        $("#maskZw").slideDown();
        $("#maskTop").slideDown();
    })

    $("#activePicBox").mouseleave(function () {
        $("#maskZw").slideUp();
        $("#maskTop").slideUp();
    })

////�����li��������������¼�����ɫ����
//
    $(".greenli").mouseenter(function () {
        $(this).addClass("current").siblings("li").removeClass("current");
        //$(this).children().css("color","white")
        //    .parent().siblings().children("a").css("color", "black");
    })


    $(".greenli").mouseleave(function () {
        $(this).removeClass("current");
    })


    //�����li,������������¼�����ɫ����
    $("li.greyli").mouseenter(function () {
        $(this).addClass("currentGrey").siblings("li").removeClass("currentGrey");
    })


    $("li.greyli").mouseleave(function () {
        $(this).removeClass("currentGrey");
    })





    //����Ĳ��� E==================================================================================

}
//=============================================���Ĳ���JS-����=========================================



//=============================================���岿��JS-��ʼ=========================================


//Tab�л�js�汾

//Tab�л�jquery �汾
$(function () {
    $("#ser_tab_left>li").mouseover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var idx = $(this).index();
        $("#ser_tab_content>li").eq(idx).addClass("current").siblings().removeClass("current");
    });

//��ʾ���صĺ���
    $("#FooterLNK").mouseenter(function () {
        $("#foot_lnkMtBox").show();
        $("#foot_lnkMt").stop().animate({"marginTop":"-176px"},500);
    });
    $("#foot_lnkBox").mouseleave(function () {
        $("#foot_lnkMt").stop().animate({"marginTop":"0px"},500);
        //$("#foot_lnkMtBox").hide();
        $("#foot_lnkMtBox").animate({"marginTop":"0px"},500);
    });

//ҳ�� ������
    var ser_bar = document.getElementById("ser_bar");
//���Ӹ߶�
    var h_foot_lnkMt = document.getElementById("foot_lnkMt").offsetHeight;
//�ı����ݸ߶�
    var h_content = document.getElementById("lnkMt_content").offsetHeight;
//�����������߶�
    var h_ser_scroll = document.getElementById("ser_scroll").offsetHeight;
//�������߶� = ���Ӹ߶�*�����������߶�/�ı��߶�
    var h_ser_bar = h_foot_lnkMt * h_ser_scroll / h_content;
    ser_bar.style.height = h_ser_bar + "px";
//��������ע����갴���¼�
    ser_bar.onmousedown = function (e) {
        //������bar�ϲ�����
        var spaceY = e.pageY - ser_bar.offsetTop;
        //����ƶ��¼�
        document.onmousemove = function (e) {
            var ser_barTop = e.pageY - spaceY;
            ser_barTop = ser_barTop < 0 ? 0 : ser_barTop;
            var barMaxMove = h_ser_scroll - ser_bar.offsetHeight;
            ser_barTop = ser_barTop > barMaxMove? barMaxMove: ser_barTop;
            ser_bar.style.top = ser_barTop + "px";
            //�϶�������ʱ����ѡ���ı�
            window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
            //�ı������ƶ�
            var contentMaxMove = h_content - h_foot_lnkMt;
            var content_y = ser_barTop * contentMaxMove / barMaxMove;
            document.getElementById("lnkMt_content").style.marginTop = -content_y +"px";
        };
    };
//���̧��ֹͣ������
    document.onmouseup = function (){
        document.onmousemove = null;
    };

//���صĺ���li����ǰ�и���
    $("#lnkMt_content li").mouseenter(function () {
        $(this).css("backgroundColor","#A5A5A5").siblings("li").css("backgroundColor","");
    });

//========С���start=====
//������ʾ������
    $(window).scroll(function () {
        var scrollHeight = $(this).scrollTop();
        if(scrollHeight>300){
            $("#rocket").fadeIn(400);
        }else{
            $("#rocket").fadeOut(400);
        }
    });
//����ع�ҳ�涥��
    $("#rocket").click(function () {
        $("html, body").animate({scrollTop:0}, 500);
    });
//С���mouseenter�Ŵ�Ч��
    $("#rocket").mouseenter(function () {
        $("#rocket img").stop().animate({
            "width": "86px",
            "height": "86px",
            "margin-left":"-8px",
            "margin-top":"-8px"
        },300)
    });
    $("#rocket").mouseleave(function () {
        $("#rocket img").stop().animate({
            "width": "70px",
            "height": "70px",
            "margin-left":"0px",
            "margin-top":"0px"
        },300)
    });
})

//=============================================���岿��JS-����=========================================

