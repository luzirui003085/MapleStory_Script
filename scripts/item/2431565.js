function start() {
	if (im.haveItem(1122235) && im.haveItem(1122240)) {
		im.sendSimple("��������#i1122235##t1122235#��#i1122240##t1122240#�����������һ����#b\r\n#L0##i1122235##t1122235##l\r\n#L1##i1122240##t1122240##l");
	} else {
		if(im.haveItem(1122235)) {
			action(1, 0, 0);
		} else if(im.haveItem(1122240)) {
			action(1, 0, 1);
		} else {
			im.sendOk("��ȷ���㱳������#t1122235#����#t1122240#��");
			im.dispose();
		}
	}
}

function action(mode, type, selection) {
	var i = -1;
	var chance = -1;
	var gain = -1;
	if (selection == 0) {
		i = 1122235;
		chance = 100;
		gain = 1122240;
	} else if (selection == 1) {
		i = 1122240;
		chance = 50;
		gain = 1122245;
	}
	if (i == -1) {
		im.sendOk("����δ֪����")
		im.dispose();
		return;
	}
	var random = new java.util.Random();
	if(random.nextInt(1000) <= chance) {
		if(im.canHold(i)) {
			//im.used(1);
			im.gainItem(i, -1);
			im.gainLockItem(gain, 1, false, 0, "�߼�ð�յ���ʿ֮��(����)");
		} else {
			im.sendOk("��ȷ���㱳�����㹻�Ŀռ䡣");
		}
	} else {
		//im.used(1);
		im.sendOk("����ʧ�ܡ�");
	}
	im.dispose();
}