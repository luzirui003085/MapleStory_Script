var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
					Array(1004156, 300), // �������ǵ��� // ���й�ð�յ����"С��"��ơ�������϶��ֺ�Ư��������������ֶ���Ч����
					Array(1004157, 300), // �������ĵ��� // ���й�ð�յ����"С��"��ơ����϶��ֺ�Ư��������������ֶ���Ч����
					Array(1402037, 200),  //����
					Array(1402014, 200),
					Array(1072337, 50), // ϲ������Ь // (������)
					Array(1042198, 80), // �ʺ�T�� // (������)
					Array(1042321, 50), // �Ļ�ŭ��T�� // (������)
					Array(1112254, 80), // �������������ָ // ���й�ð�յ����С����ƣ��ں������������â�Ļ�����������������ɡ�
					Array(1112143, 80), // ����������Ƭ��ָ // ���й�ð�յ����С����ƣ��ں������������â�Ļ�����չʾ�Լ����ǳưɡ�
					Array(1112118, 50), // ������Ƭ��ָ // ��ɫ�������棬�Կɿڿ�����ɫ��Ϊ��ɫ���԰�ɫ������ʾ��ɫ���ơ�
					Array(1112119, 50), // ����(Red) ��Ƭ��ָ // ��ɫ�������棬�Կɿڿ�����ɫ��Ϊ��ɫ���԰�ɫ������ʾ��ɫ���ơ�
					Array(1112120, 50), // ����(White) ��Ƭ��ָ // ��ɫ�������棬�Կɿڿ�����ɫ��Ϊ��ɫ���Ժ�ɫ������ʾ��ɫ���ơ�
					Array(1112228, 50), // ���������ָ // ��ɫ�Ի���ʱ�����촰���ɿɿڿ�������
					Array(1112229, 50), // ����(Red)�����ָ // ��ɫ�Ի���ʱ�����촰�������ƿɿڿ�������
					Array(1112230, 50), // ����(White)�����ָ // ��ɫ�Ի���ʱ�����촰�������ƿɿڿ�������
					Array(1002524, 50), // ����ñ // (������)
					Array(1702533, 100), // �������ĵ� // ���й���ҡ�С������Ƶ��������ĵá�\n����װ����#c��������#�ϵ�������
					Array(1702020, 10), // ������ // ��װ����#c/���ֽ�/���ָ�/���ֶ���/����/����/�̵�/ħ����/��������#�ϡ�
					Array(1702459, 100), // �޻������� // ����ʱ���Կ�������̬���޻��ǡ���װ����#c���е�������#�ϡ�
					Array(1702302, 100), // ���� // ��װ����#c����/����/˫��ǹ/�����������#�ϡ�
					Array(1042285, 50), // ƴɫ���T�� // (������)
					Array(1042204, 50), // ����T�� // (������)
					Array(1000050, 30), // ����ѩˮ�� // װ�������Ư���ڿ��У�ͬʱ����ѩ����Ч��
					Array(1112103, 20), // �ۻ���Ƭ��ָ // �ڽ�ɫ����������Ƶ׺��ֽ�ɫ����
					Array(1112253, 50), // ľ�����Ի����ָ // ��ɫ�Ի�ʱ, ��ʾ�����Ի���
					Array(1112142, 50), // ľ������Ƭ��ָ // �ڽ�ɫ����ı�������ʾ��ɫ����
					Array(1112135, 50), // ˮī����Ƭ��ָ // �ڽ�ɫ�ŵ��£�����ˮī�������ð�ɫ��������ʾ��ɫ���֡�
					Array(1112238, 50), // ˮī�������ָ // ��ɫ������ʱ�������ˮī���Ի���
					Array(1004014, 50),
					Array(1004026, 25),
					Array(1004027, 25),
					Array(1004028, 25),
					Array(1004029, 30),
					Array(1003588, 50), // ��߷���ñ�� // (������)
					Array(1003843, 300), // ��ֵĺ������ // ƽʱ����ͷ��������ݶ�����ʾ��һ�������󡣹���ʱ��������ϵ������ñ��
					Array(1002846, 20), //������˿������ñ
					Array(1050152, 15), //ˮ����(��)
					Array(1051180, 15), //ˮ����(Ů)
					Array(1042104, 15), //С��ҶT��
					Array(1042105, 15), //С��ҶT��
					Array(1002845, 20), //�ۺ��ö�ñ
					Array(1052224, 20), //��ݮbabyװ
					Array(1702228, 30), //�ɿ��㽶
					Array(1002721, 10), //��ë����
					Array(1002568, 10), //�ֹ���֯����
					Array(1702155, 30), //Ѥ���ʺ�
					Array(1042142, 30), //�ʺ�������
					Array(1062093, 30), //�������ж̿�
					Array(1112904, 50), //�ʺ��ǻ��ƽ�ָ
					Array(1041142, 20), //���ǵ������
					Array(1061148, 20), //���Ƿ�ɫ��ȹ
					Array(1702182, 50), //����������
					Array(1002888, 10), //˿������(��ɫ)
					Array(1002890, 10), //˿������(��ɫ)
					Array(1052200, 30), //������ɫ�����׷�
					Array(1702208, 50), //�������
					Array(1002863, 10), //С���ܿɰ�ñ
					Array(1052061, 5), //���������No.9
					Array(1052059, 5), //���������No.14
					Array(1003207, 30), //���ܲ��ñ�ըͷ
					Array(1702285, 50), //��ɫ�����������
					Array(1012131, 5), //�ð׵���
					Array(1702261, 50), //ӣ����
					Array(1702091, 50), //������
					Array(1702168, 100), //����ʥ����
					Array(1003051, 50), //С����
					Array(1003048, 20), //ʥ��װ��ñ
					Array(1002995, 20), //�ʼҺ���ñ
					Array(1003012, 5), //�϶�ʽ
					Array(1002876, 10), //ʥ���췢��
					Array(1002839, 20), //�Ϲϰ���ñ
					Array(1001048, 20), //������ñ
					Array(1102225, 20), //�϶�����
					Array(1102217, 20), //��β����
					Array(1102157, 15), //���ܼ���
					Array(1051131, 20), //ʥ��Ů���ӷ�
					Array(1112916, 50), //��į������ָ
					Array(1012179, 10), //¹����
					Array(1051152, 10), //õ�������ȹ
					Array(1050210, 30),  //��ɫС������
					Array(1112141, 10), //��õ����Ƭ��ָ
					Array(1112252, 10), //��õ�������ָ
					Array(1051280, 20),  //��ׯ����
					Array(1052426, 20),  //ս����Ů��
					Array(1051278, 20), //ӣ��ѩ�׷�
					Array(1050229, 20),  //��ׯ����
					Array(1050227, 20), //����ѩ�׷�
					Array(1051235, 10),  //��ɫС��ȹ��
					Array(1052201, 10), //����ˮ������
					Array(1050232, 10), //�ʾ������
					Array(1051282, 10), //�Ե��������
					Array(1052425, 10),  //ս����ʦ��
					Array(1052412, 10),  //��������
					Array(1102503, 30),  //è������������
					Array(1052455, 10),  //С�۷�����
					Array(1052503, 10),  //��ˬ����ȫ��װ
					Array(1051261, 10), //ͯ������
					Array(1050230, 10),  //���Կɰ����
					Array(1050231, 10),  //��Ů��
					Array(1051149, 10),  //��ʽ������
					Array(1051192, 10), //���������ȹ
					Array(1051255, 10),  //��ɫ�����
					Array(1051256, 10),  //��ɫС����ȹ
					Array(1112422, 100),  //��ɫ���ָ
					Array(1112424, 100),  //����ʽ�ָ
					Array(1112930, 50),  //������Ч��90��
					Array(1112136, 5),  //��������Ƭ��ָ
					Array(1102453, 50), 
					Array(1102450, 50), 
					Array(1102451, 50), 
					Array(1102452, 50), 
					Array(1102511, 50), 
					Array(1102385, 50), 
					Array(1102386, 50), 
					Array(1102487, 50), 
					Array(1112920, 15),  //
					Array(1702367, 15),
					Array(1702341, 15),
					Array(1322102, 15),
					Array(1702366, 15),
					Array(1702352, 15),
					Array(1302037, 15),
					Array(1302061, 15),
					Array(1302063, 15),
					Array(1302080, 15),
					Array(1302084, 15),
					Array(1302085, 15),
					Array(1302087, 15),
					Array(1302169, 15),
					Array(1322051, 15),
					Array(1332032, 15),
					Array(1332053, 15),
					Array(1372017, 15),
					Array(1372031, 15),
					Array(1402049, 15),
					Array(1402063, 15),
					Array(1422011, 15),
					Array(1432039, 15),
					Array(1432046, 15),
					Array(1442026, 15),
					Array(1442065, 15),
					Array(1442088, 15),
					Array(1472063, 15),
					Array(1702342, 15),
					Array(1702337, 15),
					Array(1702335, 15),
					Array(1702330, 15),
					Array(1702346, 15),
					Array(1702341, 15),
					Array(1702340, 15),
					Array(1702324, 15),
					Array(1322102, 15),
					Array(1412056, 15),
					Array(1402110, 15),
					Array(1702310, 15),
					Array(1702329, 15),
					Array(1702316, 15),
					Array(1702309, 15),
					Array(1102380, 15),
					Array(1102385, 15),
					Array(1102386, 15),
					Array(1102238, 15),
					Array(1102241, 15),
					Array(1102248, 15),
					Array(1102245, 15),
					Array(1102265, 15),
					Array(1102285, 15),
					Array(1102286, 15),
					Array(1102287, 15),
					Array(1102270, 15),
					Array(1102273, 15),
					Array(1102288, 15),
					Array(1102253, 15),
					Array(1102298, 15),
					Array(1102299, 15),
					Array(1102297, 15),
					Array(1102310, 15),
					Array(1102319, 15),
					Array(1102272, 15),
					Array(1102323, 15),
					Array(1102324, 15),
					Array(1102349, 15),
					Array(1102325, 15),
					Array(1102326, 15),
					Array(1102338, 15),
					Array(1102350, 15),
					Array(1102374, 15),
					Array(1102353, 15),
					Array(1102357, 15),
					Array(1003214, 15),
					Array(1003141, 15),
					Array(1003269, 15),
					Array(1003268, 15),
					Array(1003492, 15),
					Array(1003493, 15),
					Array(1003494, 15),
					Array(1003495, 15),
					Array(1003496, 15),
					Array(1003519, 15),
					Array(1003520, 15),
					Array(1002726, 15),
					Array(1002524, 15),
					Array(1002714, 15),
					Array(1002841, 15),
					Array(1003220, 15),
					Array(1003219, 15),
					Array(1003170, 15),
					Array(1003226, 15),
					Array(1003227, 15),
					Array(1003232, 15),
					Array(1001064, 15),
					Array(1001075, 15),
					Array(1003252, 15),
					Array(1003249, 15),
					Array(1001036, 15),
					Array(1002425, 15),
					Array(1002677, 15),
					Array(1002702, 15),
					Array(1002707, 15),
					Array(1002728, 15),
					Array(1002743, 15),
					Array(1002749, 15),
					Array(1002758, 15),
					Array(1002788, 15),
					Array(1002812, 15),
					Array(1002851, 15),
					Array(1002858, 15),
					Array(1002867, 15),
					Array(1002939, 15),
					Array(1002971, 15),
					Array(1002972, 15),
					Array(1002980, 15),
					Array(1002997, 15),
					Array(1002998, 15),
					Array(1003091, 15),
					Array(1003114, 15),
					Array(1003075, 15),
					Array(1000043, 15),
					Array(1003149, 15),
					Array(1002988, 15),
					Array(1003154, 15),
					Array(1003159, 15),
					Array(1003169, 15),
					Array(1003193, 15),
					Array(1003194, 15),
					Array(1003195, 15),
					Array(1003196, 15),
					Array(1003271, 15),
					Array(1003360, 15),
					Array(1003359, 15),
					Array(1003417, 15),
					Array(1112204, 15),
					Array(1003581, 20),
					Array(1042263, 20),
					Array(1062173, 10),
					Array(1072820, 10),
					Array(1702422, 20),
					Array(1112101, 10),
					Array(1112937, 20),
					Array(1012134, 10),
					Array(1112907, 20),
					Array(1112928, 20),
					Array(1050119, 20),
					Array(1042198, 20),
					Array(1062072, 20),
					Array(1002566, 20),
					Array(1112145, 20),
					Array(1112257, 20),
					Array(1112146, 20),
					Array(1112258, 20),
					Array(1082549, 20),
					Array(1082548, 20),
					Array(1072843, 20),
					Array(1072832, 20),
					Array(1062174, 20),
					Array(1042204, 20),
					Array(1012208, 20),
					Array(1012165, 20),
					Array(1012412, 20),
					Array(1012413, 20),
					Array(1702442, 20),
					Array(1702422, 20),
					Array(1702446, 20),
					Array(1702460, 20),
					Array(1702408, 20),
					Array(1702415, 20),
					Array(1702403, 20),
					Array(1702402, 20),
					Array(1702375, 20),
					Array(1702348, 20),
					Array(1003965, 20),
					Array(1003964, 20),
					Array(1003920, 20),
					Array(1003921, 20),
					Array(1003918, 20),
					Array(1003861, 20),
					Array(1003865, 20),
					Array(1003919, 20),
					Array(1102593, 20),
					Array(1102564, 20),
					Array(1102615, 20),
					Array(1052661, 20),
					Array(1042277, 20),
					Array(1060181, 20),
					Array(1052593, 20),
					Array(1052536, 20),
					Array(1050312, 20),
					Array(1042236, 20),
					Array(1042240, 20),
					Array(1062157, 20),
					Array(1042265, 20),
					Array(1042241, 20),
					Array(1062156, 20),
					Array(1042238, 20),
					Array(1040192, 20),
					Array(1041194, 20),
					Array(1003505, 20),
					Array(1003504, 20),
					Array(1061207, 20)
					);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#,������������һ�#e#b�����װ#r(�Դ�ģʽ)#n#k,��������Ʒ#r�Դ�ʱ��Ϊ5����#k����ѡ������Ҫ�������Ʒ\r\n#b#L0#���ҽ��뵽�����̳�#l\r\n\r\n#b";
			for (var i=1; i<=itemlist.length; i++) {
				if (!cm.isCash(itemlist[i-1][0]))
				{
					continue;
				}
				text += "#L" + (i) + "##i" + itemlist[i-1] + ":##t" + itemlist[i-1] + "# - #r"+(itemlist[i-1][1]*10)+"#b����ȯ  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        
			
        } else if (a == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9000069, 1);

				return;
			}  else {
			selects = (selection-1);
           // cm.sendGetNumber("������������������Ҫ���������#v"+itemlist[selects]+"#\r\n\r\n#r1����Ҫ" + (itemlist[selects][1]*10) + "��#b����ȯ#k", 0, 0, 999999);
			}
            buynum = 1;
            cm.sendYesNo("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]*10) + "����ȯ��");
        } else if (a == 2) {
            if (cm.getPlayer().getCSPoints(2) >= buynum * itemlist[selects][1] * 10) {
                cm.gainNX(2, -buynum * itemlist[selects][1]*10);
                cm.gainItemPeriod(itemlist[selects][0], buynum, 5*60*1000);
                cm.sendOk("����ɹ��ˣ�#r�Դ�ʱ��Ϊ5����#k");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�ĵ���ȯ��");
                cm.dispose();
            }
        }
    }//mode
}//f