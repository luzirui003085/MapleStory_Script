var status = 0;
var eff ="#fEffect/CharacterEff/1102232/2/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayerStat("LVL") >= 0) {
            cm.sendSimple("�װ���#r" + cm.getChar().getName() + "#k��ã�����ÿ�ո���NPC��#b \r\n - ÿ�ջ����>> #b������ȡ���µĽ���Ŷ\r\n#L1#" + eff + " #bÿ��#rǩ��#n#l\r\n#L4#" + eff + " #b���#r��ȡ��Ӷ�꿨#n#l\r\n#L15#" + eff + " #rÿ���ۼ�����ʱ�佱��#l\r\n#L3#" + eff + " #bǩ�������һ�#l")
        } else {
            cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n180�����µĲ��ܲμӻ��");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
		    if (cm.getEventCount("ÿ�ո���") > 0) {
			    cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n���ʺ��Ѿ���ȡ��һ�θ����ˡ�");
            } else if (cm.getPlayerStat("LVL") < 120) {
                cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n120�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\nǩ��ʧ�ܣ��������������߿ռ䲻�㡣");
            } else {
                if (cm.getBossLog("ÿ��ǩ��") == 0 && cm.getGamePoints() >= 60) {
                    cm.gainItem(4032398, 1);
                    cm.setEventCount("ÿ�ո���");
                    cm.setBossLog("�ܼ�ǩ��", 1);
		            cm.worldMessage(cm.getChar().getName() + "��ҳɹ�ǩ��.��ǰǩ������" + cm.getBossLog("�ܼ�ǩ��", 1));
                    cm.sendOk("#r - ÿ��ǩ�� >> \r\n#dǩ���ɹ�#k\r\n���7��������\r\n���#b��ϯͼ��#v4032398##k���ռ�������Ը�����ȡ������");
                } else {
                    cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n�Բ���һ��ֻ��ǩ��һ�Ρ�\r\n����Ҫ���� 1 Сʱ���ϲ���ǩ����");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 180) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n180�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 3) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n����ʧ�ܣ��������������߿ռ䲻�㡣");
            } else {
                if (cm.getBossLog("ÿ�ո���") == 0  && cm.getGamePoints()>20) {
		    cm.gainItem(2022118, 3);
		    cm.gainItem(2460003, 2);
                    cm.gainItem(4033136, 1);
                    cm.gainNX(2, 2000);
                    cm.setBossLog("ÿ�ո���");
                    cm.setBossLog("�ܼƸ���", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ����.��ȡ�����ܴ���" + cm.getBossLog("�ܼƸ���", 1));
                    cm.sendOk("#r - ÿ�ո��� >> \r\n#dÿ�ո�����ȡ�ɹ�#k\r\n��ù���Ա��ף��#v2022118# x 3   ��õ��þ�2000�㡣�Ŵ� x 2");
                } else {
                    cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n�Բ���һ��ֻ�ܸ���һ�Ρ�\r\n����Ҫ����20��������ʱ������ȡ��");
                }
            }
            cm.dispose();
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9310058, 1);
        } else if (selection == 15) {
            cm.dispose();
            cm.openNpc(9900001, 3013);
        } else if (selection == 5) {
            if(cm.getBossLog("ÿ������") == 0  && cm.getGamePoints()>360){
		cm.gainNX(2, 2000);
		cm.setBossLog("ÿ������");
                    cm.setBossLog("�ܼ�����", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ����2000���þ�.��ȡ�����ܴ���" + cm.getBossLog("�ܼ�����", 1) + "ע��һ����ɫ2000,һ���˺����19��ɫ,ÿ�վ�����ȡ36000���þ�Ŷ!");
                    cm.sendOk("#r - ÿ������ >> \r\n#dÿ��������ȡ�ɹ�#k\r\n�������2000���þ�...\r\nע��һ����ɫ2000,һ���˺����19��ɫ,ÿ�վ�����ȡ36000���þ�Ŷ!\r\n#r�һ�����6Сʱ �������-����NPC-�������߻����һ�3��2�������");
                } else {
                    cm.sendOk("#r - ÿ������ >> #k\r\n\r\n�Բ���һ��ֻ������һ�Ρ�\r\n����Ҫ����6Сʱ���ϲ�����ȡ��");
                }
		cm.dispose();
        } else if (selection == 4) {
           if (cm.getPlayerStat("LVL") < 200) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n200�����µĲ��ܲμӻ��");
            } else {
	    if (cm.getSpace(5) < 3) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n����ʧ�ܣ������ֽ������߿ռ䲻�㡣");
	} else if (cm.getBossLog("ÿ�չ�Ӷ") == 0) {
	    cm.gainItemPeriod(5030019,1,1);
                    cm.setBossLog("ÿ�չ�Ӷ");
                    cm.setBossLog("�ܼƹ�Ӷ", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ��Ӷ�̵�.��ȡ��Ӷ�̵��ܴ�����" + cm.getBossLog("�ܼƹ�Ӷ", 1));
                    cm.sendOk("#r - ÿ�ո��� >> \r\n#dÿ�չ�Ӷ��ȡ�ɹ�#k\r\n��ù�Ӷ�̵�꿨x1");
            cm.dispose();
                } else {
                    cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n�Բ���һ��ֻ����ȡһ�Ρ�");
            cm.dispose();
        }
	  }
    }
}
    }