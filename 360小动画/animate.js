
function getStyle(obj, attr) {
    // ������� 
    if (obj.currentStyle) {  //IE�����֧�ֵ�����
        return obj.currentStyle[attr];
    } else { // �ȸ�ͻ��  IE9+
        return window.getComputedStyle(obj, false)[attr];
    }
}

function animate(obj, json, fn) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        // ��ȡ����ĵ�ǰλ��
        var flag = true;
        for (var key in json) { // ͨ��for-in����json��ȡ����Ӧ�����Ժ�����ֵ
            var leader = parseInt(getStyle(obj, key)) || 0; //��key����ȡԭ����ֵ
            console.log(leader);
            var target = json[key];//����Ҫ�ƶ�����Ŀ��λ��
            var step = (target - leader) / 10;  //63.15  0.9  0  1
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[key] = leader + 'px';
            if (leader != target) {
                flag = false;//�����һ�����Ի�û�е���Ŀ��λ�õĻ�������flagΪfalse
            }
        }
        if (flag) {  // �����е����Զ�������Ŀ��λ�õ�ʱ�򣬲��ܹ���ն�ʱ��
            clearInterval(obj.timerId);
            if (fn) { // ����к���������������е���
                fn();
            }
        }

    }, 15)

}