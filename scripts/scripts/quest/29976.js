/*
	����: �ƺ� - �����Ĺ�â
	����: Ϊ�˼����֮��ʿ�׹����ɹ����1ת�����ŵ�ѫ�¡�
	���: 142399 - �����Ĺ�â
*/

var status = -1;
var level = 10
var itemId = 142399;

function start(mode, type, selection) {
    qm.playerMessage("��ʼ����... " + qm.canHold(itemId, 1) + "  " + !qm.haveItem(itemId, 1));
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 5000 && qm.getJob() < 5112) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    qm.playerMessage("�������..." + qm.canHold(itemId, 1) + "  " + !qm.haveItem(itemId, 1));
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 5000 && qm.getJob() < 5112) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}