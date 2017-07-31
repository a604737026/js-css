/**
 * Created by Administrator on 2017/1/4.
 */



/**
 * ��װ��һ����ȡ��ǩ���ı����ݵĺ���
 * @param ele
 * @returns {*}
 */
function  getText(ele){
    // �������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
    if(typeof ele.innerText=="string"){
        return ele.innerText;
    }else {
        return ele.textContent;//���ǵͰ汾�Ļ�������֧�ֵķ�ʽ
    }
}

/**
 * ��װ��һ�����ñ�ǩ���ı����ݵĺ���
 * @param ele
 * @param value
 */
function setText(ele,value){
    // �������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի򷽷�
    if(typeof ele.innerText=="string"){
        ele.innerText = value;
    }else {
        ele.textContent = value;
    }
}

/**
 * ��װ��һ����ȡ��һ����ǩ�ڵ�ĺ���
 * @param ele
 * @returns {*}
 */
function  getNextElement(ele){
    // �������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Է���
    if(ele&&ele.nextElementSibling){  //���ȵñ�֤��һ�������Ķ�����ڣ����ж��Ƿ�֧��xtElementSibiling�������
        return ele.nextElementSibling;
    }else{  //����else����˵����֧��nextElementSibling��ֻxtSibling
        ele = ele.nextSibling; //��õ�ǰ��ǩ�������һ���ڵ�
        while(ele&&ele.nodeType!=1){
            ele=  ele.nextSibling;//�����ڵ�ǰ�ı�ǩ�ڵ�����һ����ǩ�ڵ�
        }
        return ele;
    }
}

/*
 * ��װ��һ�����ݵĻ�ȡ��һ�����ڵ��ֵ���ü���ǩ�ڵ�ĺ���
 * @param ele
 * @returns {*}
 */
function  getPreviousElement(ele){
    //�������
    if(ele&&ele.previousElementSibling){
        return ele.previousElementSibling;
    }else {
        ele=  ele.previousSibling;
        while(ele&&ele.nodeType!=1){
            ele =   ele.previousSibling;
        }
        return ele;
    }
}
/**
 * ��װ��һ����ȡ��ǰ��ǩ��������ĵ�һ���ӱ�ǩ�ڵ�ĺ���
 * @param ele
 * @returns {*}
 */
function getFirstElement(ele){
    // �������
    if(ele&&ele.firstElementChild){
        return ele.firstElementChild;
    }else {
        ele= ele.firstChild;
        while(ele&&ele.nodeType!=1){
            ele=  ele.nextSibling;
        }
        return ele;
    }
}
/*
 * ��װ��һ�����ݰ汾�Ļ�ȡ��ǰ��ǩ��������һ���ӱ�ǩ�ڵ�ĺ���
 * @param ele
 * @returns {*}
 */
function getLastElement(ele) {
    //�������
    if (ele && ele.lastElementChild) {
        return ele.lastElementChild;
    } else {
        ele = ele.lastChild;
        while (ele && ele.nodeType != 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}

var txt = {
    getText:function(ele){
        // �������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
        if(typeof ele.innerText=="string"){
            return ele.innerText;
        }else {
            return ele.textContent;//���ǵͰ汾�Ļ�������֧�ֵķ�ʽ
        }
    },
    setText:function(ele,value){
        // �������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի򷽷�
        if(typeof ele.innerText=="string"){
            ele.innerText = value;
        }else {
            ele.textContent = value;
        }
    }
}

var ele = {
    getNextElement:function(ele){
        // �������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Է���
        if(ele&&ele.nextElementSibling){  //���ȵñ�֤��һ�������Ķ�����ڣ����ж��Ƿ�֧��xtElementSibiling�������
            return ele.nextElementSibling;
        }else{  //����else����˵����֧��nextElementSibling��ֻxtSibling
            ele = ele.nextSibling; //��õ�ǰ��ǩ�������һ���ڵ�
            while(ele&&ele.nodeType!=1){
                ele=  ele.nextSibling;//�����ڵ�ǰ�ı�ǩ�ڵ�����һ����ǩ�ڵ�
            }
            return ele;
        }
    },
    getPreviousElement:function(ele){
        //�������
        if(ele&&ele.previousElementSibling){
            return ele.previousElementSibling;
        }else {
            ele=  ele.previousSibling;
            while(ele&&ele.nodeType!=1){
                ele =   ele.previousSibling;
            }
            return ele;
        }
    },
    getFirstElement:function(ele){
        // �������
        if(ele&&ele.firstElementChild){
            return ele.firstElementChild;
        }else {
            ele= ele.firstChild;
            while(ele&&ele.nodeType!=1){
                ele=  ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement:function(ele){
        //�������
        if (ele && ele.lastElementChild) {
            return ele.lastElementChild;
        } else {
            ele = ele.lastChild;
            while (ele && ele.nodeType != 1) {
                ele = ele.previousSibling;
            }
            return ele;
        }
    }
}

function $$(id){
    return  document.getElementById(id);
}

/**
 * ��װ��һ����Դ���ı�ǩ׷�ӵ�Ŀ��λ�õĺ���
 * @param source
 * @param target
 */
function moveAll(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i=0;i<options.length;i++){
        target.appendChild(options[i]);
        i--;
    }
}

/**
 * ��װ��һ����ѡ��option�ƶ���һ��ĺ���
 * @param source
 * @param target
 */
function moveSelected(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i=0;i<options.length;i++){
        if(options[i].selected){
            target.appendChild(options[i]);
            i--;
        }
    }
}