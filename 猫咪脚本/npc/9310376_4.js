/* �������̵� ñ��*/

var status = -1;
var itemList = Array(
Array(1004167, 50000),
Array(1004282, 50000),
Array(1004094, 50000),
Array(1004112, 50000),
Array(1004211, 50000),
Array(1004193, 50000),
Array(1003859, 50000),
Array(1004137, 50000),
Array(1003831, 50000),
Array(1003955, 50000),
Array(1004095, 50000),
Array(1004029, 50000),
Array(1003204, 40000),
Array(1004110, 40000),
Array(1001083, 40000),
Array(1001095, 45000),
Array(1004200, 45000),
Array(1003892, 50000),
Array(1004124, 50000),
Array(1003953, 50000),
Array(1001097, 40000),
Array(1000074, 40000),
Array(1004200, 40000),
Array(1001076, 40000),
Array(1004204, 50000),
Array(1004205, 50000),
Array(1003950, 50000),
Array(1004126, 40000),
Array(1002846, 40000),
Array(1004158, 40000),
Array(1004114, 40000),
Array(1002598, 40000),
Array(1004157, 100000),
Array(1004156, 100000),
Array(1004025, 40000),
Array(1004093, 40000),
Array(1002845, 10000), //�ۺ��ö�ñ
Array(1002721, 10000), //��ë����
Array(1002568, 10000), //�ֹ���֯����
Array(1002888, 10000), //˿������(��ɫ)
Array(1002890, 10000), //˿������(��ɫ)
Array(1002863, 20000), //С���ܿɰ�ñ
Array(1003207, 20000), //���ܲ��ñ�ըͷ
Array(1003051, 20000), //С����
Array(1003048, 20000), //ʥ��װ��ñ
Array(1002995, 10000), //�ʼҺ���ñ
Array(1003012, 20000), //�϶�ʽ
Array(1002876, 20000), //ʥ���췢��
Array(1002839, 20000), //�Ϲϰ���ñ
Array(1001048, 30000), //������ñ
Array(1003214, 14000),
Array(1003141, 14000),
Array(1003269, 14000),
Array(1003268, 14000),
Array(1003492, 14000),
Array(1003493, 14000),
Array(1003494, 14000),
Array(1003495, 14000),
Array(1003496, 14000),
Array(1003519, 14000),
Array(1003520, 14000),
Array(1002726, 14000),
Array(1002524, 14000),
Array(1002714, 14000),
Array(1002841, 14000),
Array(1003220, 14000),
Array(1003170, 14000),
Array(1003226, 14000),
Array(1000050, 14000),
Array(1003232, 14000),
Array(1001064, 14000),
Array(1001075, 14000),
Array(1003252, 14000),
Array(1003249, 14000),
Array(1001036, 14000),
Array(1002998, 14000),
Array(1003091, 14000),
Array(1003114, 14000),
Array(1003075, 14000),
Array(1000043, 14000),
Array(1003149, 14000),
Array(1002988, 14000),
Array(1003505, 15000),
Array(1003504, 15000),
Array(1003965, 15000),
Array(1003964, 15000),
Array(1003920, 15000),
Array(1003921, 15000),
Array(1003918, 15000),
Array(1003861, 15000),
Array(1003865, 15000),
Array(1003919, 15000),
Array(1002566, 15000),
Array(1003581, 15000),
Array(1003417, 14000),
Array(1003271, 14000),
Array(1003196, 14000),
Array(1003193, 14000),
Array(1003194, 14000)
//
);
var selectedItem = -1;
var selectedCost = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���ѡ����ϣ������ĵ��ߣ�";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1]  + "#k���#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("���Ƿ���#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r" + selectedCost + "#k �����");
        } else {
            cm.sendOk("���ִ���...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("������߳��ִ���...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "����̵�", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX( - selectedCost );
                cm.sendOk("��ϲ���ɹ�����#i" + selectedItem + ":# #b#t" + selectedItem + "##k��");
            } else {
                cm.sendOk("����ʧ�ܣ�����ȷ���ڱ���������Ŀ�������Ƿ���һ�����ϵĿռ䡣");
            }
        } else {
            cm.sendOk("��û����ô������\r\n\r\n����#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r" + selectedCost + "#k �����");
        }
        cm.dispose();
    }
}