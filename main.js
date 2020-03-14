var class13 = ["徐金宣","王子怡","杨摇摇","张晋婷","秦婉婷","陈恩","陈源","郑何","陈思思","刘遥遥","林甲瑞","陈莹莹","林初奇","吴宝航","吴学钏","廖书鹏","陈佳","王思思","曾佳佳","李杭","薛嘉明","吴作师","池久察","陈作杰"];
var class14 = ["陈晨","孙荣健","林映萱","章杨杨","姜荣瀚","徐又媛","张杰","章嘉乐","黄海冰","曾仁泽","林静","黄昌贺","金圣博","陈一岚","黄佳琦","陈子言","蔡陈墨","方思璐","金伊童","薛胜转","林豪","谢海涵","高亦宸","罗晓雯","胡建国","胡伟国","洪林蒨"];
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
var class13_f = new Array;
var class14_f = new Array;
var class_13 = 0;
var class_14 = 0;
$("#list_num").attr("placeholder","请输入抽取人数（小于"+Math.min(class13.length,class14.length)+")");
function outlist() {
    var list_num = $("#list_num").val();
    if (list_num =="") {
        alert("请输入数字！");
        return;
    }
    if (list_num > Math.min(class13.length,class14.length)) {
        alert("数字过大！");
        return;
    }
    class_13 = 0;
    class_14 = 0;
    $("#outlist").empty();
    for (let index = 0; index < class13.length; index++) {
        class13_f[index] = 0;
    }
    for (let index = 0; index < class14.length; index++) {
        class14_f[index] = 0;
    }
    for (let index = 0; index < list_num; index++) {
        classnum = randomNum(13,14);
        console.log(classnum);
        classlist(classnum);
    }
    $("#outlist").append("<span>13班个数："+class_13+"</span><br>");
    $("#outlist").append("<span>14班个数："+class_14+"</span><br>");
}
function classlist(classnum) {
    if (classnum == 13) {
        class_13 = class_13+1;
        class13_num = randomNum(0,class13.length-1);
        while (class13_f[class13_num]==1) {
            class13_num = randomNum(0,class13.length-1);
        }
        console.log(class13_num);
        $("#outlist").append("<span>13_"+class13[class13_num ]+"</span><br>");
        class13_f[class13_num] = 1;
    }
    if (classnum == 14) {
        class_14 = class_14+1;
        class14_num = randomNum(0,class14.length-1);
        while (class14_f[class14_num]==1) {
            class14_num = randomNum(0,class14.length-1);
        }
        console.log(class14_num);
        $("#outlist").append("<span>14_"+class14[class14_num ]+"</span><br>");
        class14_f[class14_num] = 1;
    }
}