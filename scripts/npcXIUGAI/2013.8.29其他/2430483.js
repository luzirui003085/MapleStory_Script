/* 可爱新手礼物箱 */

var status;

var kongwei = 2;
var item = 2430191;
var items;
var itemss;

var item1 = 3700012;
var item2 = 1142263;

var lvl;
var names;
var text0 = " ";
var zbData = Array(
//"我最可爱", 
3700012, 1, 0,
//"可爱的新手", 
1142263, 1, 0);

var itemid = 1302078;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (mode == 0) {
            im.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {

                    names = im.getVipname();
                    lvs = im.getPlayer().getLevel();

                    for (var i = 0; i <= zbData.length; i++)
                    if (i % 3 == 0 && (zbData[i + 2] <= lvs)) {
                        text0 += "\r\n#b#i" + zbData[i] + ":# #t" + zbData[i] + "#";
                    }

       im.sendSimple("#r" + im.getVipname() + " #k 您是否要打开 #b#i" + item + ":# #t" + item + "# #k?\r\n#d您将会获得一下物品：\r\n" + text0 + "\r\n#L0##k打开 #b#i" + item + ":# #t" + item + "# #l\r\n#k#L1#结束对话#l");



        } else if (status == 1) {

         if (im.getSpace(1) >= kongwei) {

                for (var ii = 0; ii <= zbData.length; ii++)
                    if (ii % 3 == 0 && (items = zbData[ii]) && (itemss = zbData[ii + 1])) {
                        im.gainItem(items,itemss);
                    }

               if (im.getChar().getAccountID() > 1) {
                   im.gainItem(item, -1);
                 }

               im.sendOk("#d" + names + " #k 我已经把 #b#i" + item + ":# #t" + item + "# #k 里的以下物品：" + text0 + "\r\n\r\n#k发送到您的 #r背包#k 里！\r\n#r请注意查看！ ");
                im.dispose();

            } else {
                im.sendOk("您的 #r装备栏#k 空间没有#r#e " + kongwei + " #n#k个空位！无法获得 #b#i" + item + ":# #t" + item + "# #k 里的以下物品:" + text0);
                im.dispose();
            }


        }
    }
}
