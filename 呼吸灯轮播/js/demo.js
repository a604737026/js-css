/**
 *
 */
$(function(){
    var nowing = 0;  /*����һ������������ͼƬ����ʾ*/
    var mytimer = null; /*����һ����ʱ��*/

    function autoplay(){   /*����һ���Զ����ŵĺ���*/
        if(nowing < $(".slider .slider-ul li").length-1){
            nowing++;
        }else {
            nowing = 0;
        }
        $(".slider .slider-ul li").eq(nowing-1).animate({"opacity":0},2000);
        $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},2000);

        //СԲ���ͬ��
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    }
    mytimer = setInterval(autoplay,3000);

    //�������ʱ����ʾ���Ұ�ť
    $(".slider").mouseenter(function(){
        $(".arrow").css("display","block");
        clearInterval(mytimer);
    })
    //����뿪��ʱ�� �������Ұ�ť

    $(".slider").mouseleave(function(){
        $(".arrow").css("display","none");
        mytimer = setInterval(autoplay,3000);
    })


    //������Ұ�ť��ʱ����¼�
    $(".arrow-r").click(autoplay);//ֱ��ִ��autoplay����

    //��� ��ť��ʱ��
    $(".arrow-l").click(function(){
        if(nowing>0){
            nowing--;
        }else {
            nowing = $(".slider .slider-ul li").length-1;
        }

        if(nowing == $(".slider .slider-ul li").length-1){
            $(".slider .slider-ul li").eq(0).animate({"opacity":0},2000);//���ص�һ��Ԫ��
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},2000);
        }else {
            $(".slider .slider-ul li").eq(nowing+1).animate({"opacity":0},2000);//��ǰԪ�غ����Ԫ��������������Ϊ���������ť
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},2000);//��ǰԪ����ʾ
        }
        //СԲ��ı仯
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    })

})