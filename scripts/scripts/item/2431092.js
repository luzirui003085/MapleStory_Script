/*
	���ƣ����ⳬֵ���������
	���ݣ�����100�����
*/

var giftMaxNum = 5;	// �������
var itemReward = new Array( // ����id����������������ȼ�
							// 1�����
							Array(2001516, 50, 1),//�ٶ�
							Array(2002036, 50, 1),//ѩ
							Array(3010013, 1, 1),//����
							// 30�����
							Array(2002036, 50, 2),
							Array(2431887, 30, 2),
							Array(2001505, 100, 2),
							Array(2001556, 100, 2), // ���ΰٲ�ҩ
							Array(2001537, 50, 2),
							Array(2001538, 50, 2),
							Array(2001539, 50, 2),
							Array(3010037, 1, 2),
							Array(-1, 1000, 2),
							// 60�����
							Array(2002036, 50, 3),
							Array(2431887, 30, 3),
							Array(2001505, 300, 3),
							Array(2001556, 100, 3),
							Array(3010038, 1, 3),
							Array(-1, 2000, 3),
							// 100�����
							Array(2002036, 50, 4),
							Array(2431887, 50, 4),
							Array(2001505, 300, 4),
							Array(2001556, 200, 4),
							Array(3010046, 1, 4),
							Array(-1, 3000, 4),
							// 150�����
							Array(2002036, 50, 5),
							Array(2431887, 100, 5),
							Array(2001505, 300, 5),
							Array(2001556, 200, 5),
							Array(-1, 4000, 5),
							Array(3010045, 1, 5)
							);


function start() {
	var giftLevel = 1;
	var newItemReward = new Array();
	var playerLevel = it.getPlayer().getLevel();
	var openReqLevel = 0;
	var text = "";
	for (var i = 1; i <= 5; i++) {
		if (it.getBossLog("�������" + i) != -1) {
			giftLevel = i;
			break;
		}
	}

	switch (giftLevel) {
		case 1:
			openReqLevel = 1;
			break;
		case 2:
			openReqLevel = 30;
			break;
		case 3:
			openReqLevel = 60;
			break;
		case 4:
			openReqLevel = 100;
			break;
		case 5:
			openReqLevel = 150;
		default:
			break;
	}

	if (giftLevel > 1 && im.getPlayer().getTodayOnlineTime() < (giftLevel * 10)) {
		im.playerMessage(1, "����ʱ�䲻��" + (giftLevel * 10) + "���ӣ��޷������\r\n������ " + (giftLevel * 10 - im.getPlayer().getTodayOnlineTime()) + "����");
		im.dispose();
		return;
	}

	if (playerLevel < openReqLevel) {
		text = "�����ⳬֵ��������䡿\r\n(��" + openReqLevel + "�����ܴ�)\r\n�򿪺�ɻ��������Ʒ��\r\n\r\n";
		for (var i = 0; i < itemReward.length; i++) {
			if (itemReward[i][2] == giftLevel) {
				if (itemReward[i][0] == -1) {
					text += "����ȯ " + itemReward[i][1] + " ��\r\n";
				} else {
					text += im.getItemName(itemReward[i][0]) + " �� " + itemReward[i][1] + " ��\r\n";
				}
			}
		}
		it.playerMessage(1, text);
		it.dispose();
		return;
	}
	
	for (var i = 0; i < itemReward.length; i++) {
		if (itemReward[i][2] == giftLevel) {
			newItemReward.push(itemReward[i]);
		}
	}

	if (im.getInventory(2).isFull(newItemReward.length - 1)) {
		im.playerMessage(1, "�����ⳬֵ��������䡿\r\n(" + openReqLevel + "�����)\r\n\r\n�������ռ䲻�㣬��Ҫ " + newItemReward.length + " ��ռ䡣");
		im.dispose();
		return;
	} else if (im.getInventory(3).isFull(1)) {
		im.playerMessage(1, "�����ⳬֵ��������䡿\r\n(" + openReqLevel + "�����)\r\n\r\n�������ռ䲻�㣬��Ҫ 1 ��ռ䡣");
		im.dispose();
		return;
	}
	
	for (var i = 0; i < newItemReward.length; i++) {
		if (newItemReward[i][0] == -1) {
			im.getPlayer().modifyCSPoints(2, newItemReward[i][1]);
			text += "����ȯ " + newItemReward[i][1] + " ��\r\n";
			continue;
		}
		im.gainItem(newItemReward[i][0], newItemReward[i][1]);
		text += im.getItemName(newItemReward[i][0]) + " �� " + newItemReward[i][1] + " ��\r\n";
	}

	// ����Ѿ�����߼�������������ĵ�
	if (giftLevel == giftMaxNum) {
		im.gainItem(2431092, -1);
	}
	im.setBossLog("�������" + giftLevel, 1, -1);
	im.playerMessage(1, "�����ⳬֵ��������䡿\r\n(" + openReqLevel + "�����)\r\n��ϲ���ѻ�ã�\r\n\r\n" + text);
	im.dispose();
}