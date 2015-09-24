
//数组的脚标就是元素的ID
function calculate(chang, kuan, gao, diShaHouDu, diShaLeiXing, yuGangHengWen, shiNeiWenDu, yuGangGai_checked) {
    var resultData = Array();

    resultData["shuiTiRongLiang"] = Math.ceil((chang * kuan * gao) / 1000 * 100) / 100;

    resultData["diShaRongLiang"] = Math.ceil((chang * kuan * diShaHouDu) / 1000 * 100) / 100;
    resultData["shuiTiZhongLiang"] = resultData["shuiTiRongLiang"];
    resultData["diShaZhongLiang"] = Math.ceil(resultData["diShaRongLiang"] * diShaLeiXing * 10) / 10;

    var t = ((2 * chang * chang + 2 * kuan * gao + chang * kuan) / 10000);
    var s;

    yuGangGai_checked ? t1 = 1 : t1 = 0;
    if (chang <= 50) {
        s = t * 3 * 2.5 + (chang * kuan / 10000) * 3 * 1.2 * 2.75 * t1;
    }
    else if (chang <= 100) {
        s = t * 4 * 2.5 + (chang * kuan / 10000) * 3 * 1.2 * 2.75 * t1 + 2;
    }
    else if (chang <= 150) {
        s = t * 5 * 2.5 + (chang * kuan / 10000) * 3 * 1.2 * 2.75 * t1 + 5;
    }
    else if (chang <= 200) {
        s = t * 8 * 2.5 + (chang * kuan / 10000) * 4 * 1.2 * 2.75 * t1 + 10;
    }
    else if (chang <= 300) {
        s = t * 12 * 2.5 + (chang * kuan / 10000) * 4 * 1.2 * 2.75 * t1 + 15;
    }
    else {
        s = t * 15 * 2.5 + (chang * kuan / 10000) * 5 * 1.2 * 2.75 * t1 + 25;
    }
    resultData["yuGangZhongLiang"] = Math.ceil(s * 10) / 10;

    resultData["zongZhongLiang"] = Number(resultData["shuiTiZhongLiang"]) + Number(resultData["diShaZhongLiang"]) + Number(resultData["yuGangZhongLiang"]);

    resultData["jiaReBangGongLv"] = Math.ceil((resultData["shuiTiRongLiang"] * 2 - resultData["shuiTiRongLiang"] * 0.5 * t1) / 50) * 50;



    resultData["guoLvZhi"] = Math.ceil(resultData["shuiTiRongLiang"] * 5);

    var at = (9.8 + 0.07 * (yuGangHengWen - shiNeiWenDu));
    var Wa01 = (at * t * (yuGangHengWen - shiNeiWenDu));
    var Wa02 = resultData["shuiTiRongLiang"] * 0.5 * 0.2;
    var temp01 = resultData["guoLvZhi"];
    var wa03_a;
    if (temp01 >= 0 && temp01 <= 100) {
        wa03_a = 3;
    } else if (temp01 <= 200) {
        wa03_a = 5;
    } else if (temp01 <= 300) {
        wa03_a = 15;
    } else {
        wa03_a = (15 + (temp01 - 300) / 300 * 7.5);
    }
    var Wa03 = wa03_a * 0.5;
    var temp_02 = (Wa01 - Wa02 - Wa03);
    resultData["jiaReBangWaShu"] = (Math.ceil(temp_02 / 50) * 50) - ((Math.ceil(chang / 50) - 1) * 50 * t1);

    resultData["dengGuanGongLvCong"] = Math.ceil(resultData["shuiTiRongLiang"] * 0.5);
    resultData["dengGuanGongLvZhi"] = Math.ceil(resultData["shuiTiRongLiang"] * 1);
    resultData["zuiJiaZhaoMingGongLv"] = (Math.ceil(Math.round(12.25 * Math.pow(resultData["shuiTiRongLiang"], 0.46)) / 5) * 5);


    resultData["guoLvCong"] = Math.ceil(resultData["shuiTiRongLiang"] * 3);
    resultData["guoLvChao"] = Math.ceil(resultData["shuiTiRongLiang"] * 10);

    var xiao = "5CM以下的小型";
    var zhong = "5-10CM的中型";
    var zhongda = "10-20CM的中大型";
    var da = "20CM以上的大型";
    var VV = (chang * kuan * gao / 1000);
    var As = (chang * kuan);
    if (VV <= 1) {
        resultData["siYangTiShi0"] = "这么小的鱼缸恐怕只能养一条蝌蚪了。";
        resultData["siYangTiShi1"] = "这么小的鱼缸恐怕只能养一条蝌蚪了。";
    } else if (VV <= 30) {
        resultData["siYangTiShi0"] = "您的鱼缸适合饲养" + xiao + "鱼" + Math.ceil(VV / 1.5) + "条。";
        resultData["siYangTiShi1"] = "您的鱼缸可饲养" + xiao + "热带鱼" + Math.ceil((As / 30) / 1.5) + "条（金鱼等高氧鱼减半）。";
    } else if (VV <= 60) {
        resultData["siYangTiShi0"] = "您的鱼缸适合饲养" + xiao + "鱼" + Math.round((VV / 2.1) / 5) * 5 + "条，或" + zhong + "鱼" + Math.round((VV / 10) / 5) * 5 + "条。";
        resultData["siYangTiShi1"] = "您的鱼缸可饲养" + xiao + "热带鱼" + Math.round(((As / 30) / 2.1) / 5) * 5 + "条，或" + zhong + "热带鱼" + Math.round(((As / 30) / 10) / 5) * 5 + "条（金鱼等高氧鱼减半）。";
    } else if (VV <= 300) {
        resultData["siYangTiShi0"] = "您的鱼缸适合饲养" + xiao + "鱼" + Math.round((VV / 2.1) / 5) * 5 + "条，或" + zhong + "鱼" + Math.round((VV / 10) / 5) * 5 + "条，或" + zhongda + "鱼" + Math.round((VV / 20) / 5) * 5 + "条。";
        resultData["siYangTiShi1"] = "您的鱼缸可饲养" + xiao + "热带鱼" + Math.round(((As / 30) / 2.1) / 5) * 5 + "条，或" + zhong + "热带鱼" + Math.round(((As / 30) / 10) / 5) * 5 + "条，或" + zhongda + "热带鱼" + Math.round(((As / 30) / 20) / 5) * 5 + "条（金鱼等高氧鱼减半）。";
    } else if (VV <= 500) {
        resultData["siYangTiShi0"] = "您的鱼缸适合饲养" + zhong + "鱼" + Math.round((VV / 10) / 5) * 5 + "条，或" + zhongda + "鱼" + Math.round((VV / 20) / 5) * 5 + "条。";
        resultData["siYangTiShi1"] = "您的鱼缸可饲养" + zhong + "热带鱼" + Math.round(((As / 30) / 10) / 5) * 5 + "条，或" + zhongda + "热带鱼" + Math.round(((As / 30) / 20) / 5) * 5 + "条（金鱼等高氧鱼减半）。";
    } else if (VV <= 1000) {
        resultData["siYangTiShi0"] = "您的鱼缸适合饲养" + zhong + "鱼" + Math.round((VV / 10) / 5) * 5 + "条，或" + zhongda + "鱼" + Math.round((VV / 20) / 5) * 5 + "条，或" + da + "鱼" + Math.round((VV / 40) / 5) * 5 + "条。";
        resultData["siYangTiShi1"] = "您的鱼缸可饲养" + zhong + "热带鱼" + Math.round(((As / 30) / 10) / 5) * 5 + "条，或" + zhongda + "热带鱼" + Math.round(((As / 30) / 20) / 5) * 5 + "条，或" + da + "热带鱼" + Math.round(((As / 30) / 40) / 5) * 5 + "条（高氧鱼减半）。";
    } else if (VV <= 1500) {
        resultData["siYangTiShi0"] = "您的鱼缸适合饲养" + zhongda + "鱼" + Math.round((VV / 20) / 5) * 5 + "条，或" + da + "鱼" + Math.round((VV / 40) / 5) * 5 + "条。";
        resultData["siYangTiShi1"] = "您的鱼缸可饲养" + zhongda + "热带鱼" + Math.round(((As / 30) / 20) / 5) * 5 + "条，或" + da + "热带鱼" + Math.round(((As / 30) / 40) / 5) * 5 + "条（高氧鱼减半）。";
    } else if (VV <= 3500) {
        resultData["siYangTiShi0"] = "您的鱼缸适合饲养" + da + "鱼" + Math.round((VV / 40) / 5) * 5 + "条。";
        resultData["siYangTiShi1"] = "您的鱼缸可饲养" + da + "热带鱼" + Math.round(((As / 30) / 40) / 5) * 5 + "条（高氧鱼减半）。";
    } else {
        resultData["siYangTiShi0"] = "好大的鱼池！您可以养一群鱼了！";
        resultData["siYangTiShi1"] = "好大的鱼池！您可以养一群鱼了！";
    }

    //水草液肥使用量
    resultData["aquariumExperts"] = Math.ceil(resultData["shuiTiRongLiang"] / 1000 * 1000) / 5;

    return resultData;
}




