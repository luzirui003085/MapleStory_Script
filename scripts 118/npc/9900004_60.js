var newopen = 0;//������Ʒ

var news = Array(
        Array(80001003,"����������ּ��ܲ����ֱ��ʹ��\r\n��������ͻ����ľ���ƶ���",12000), //ͻ����ľ��
	Array(80001032,"����������ּ��ܲ����ֱ��ʹ��\r\n���������ܳ��ƶ���",18000),//�ܳ�
	Array(80001030,"����������ּ��ܲ����ֱ��ʹ��\r\n����������·���ƶ���",18000),//��·��
	Array(80001049,"����������ּ��ܲ����ֱ��ʹ��\r\n�������Ŷ�ħʯ���ƶ���",18000),//��ħʯ��
	Array(80001021,"����������ּ��ܲ����ֱ��ʹ��\r\n����������ɫ�絥���ƶ���",18000), //��ɫ�絥��
	Array(80001048,"����������ּ��ܲ����ֱ��ʹ��\r\n����������԰�쿨���ƶ���",12000),//��԰�쿨��
	Array(80001004,"����������ּ��ܲ����ֱ��ʹ��\r\n�����������������ƶ���",18000), //����
	Array(80001005,"����������ּ��ܲ����ֱ��ʹ��\r\n�����������л����ƶ���",12000), //���л���
	Array(80001006,"����������ּ��ܲ����ֱ��ʹ��\r\n��������ŮŮ�����ƶ���",12000), //ŮŮ����
	Array(80001007,"����������ּ��ܲ����ֱ��ʹ��\r\n�������Ž���ƶ���",48000), //���
	Array(80001008,"����������ּ��ܲ����ֱ��ʹ��\r\n��������������ƶ���",30000), //�����
	Array(80001009,"����������ּ��ܲ����ֱ��ʹ��\r\n�������������ƶ���",30000), //����
	Array(80001010,"����������ּ��ܲ����ֱ��ʹ��\r\n���������ϻ���˵�ƶ���",48000), //�ϻ���˵
	Array(80001011,"����������ּ��ܲ����ֱ��ʹ��\r\n������������ħ�����ƶ���",36000), //����ħ����
	Array(80001012,"����������ּ��ܲ����ֱ��ʹ��\r\n��������ʥ��������˹�ƶ���",30000), //ʥ��������˹
	Array(80001013,"����������ּ��ܲ����ֱ��ʹ��\r\n�������Ż�Ģ���ƶ���",30000), //��Ģ��
	Array(80001014,"����������ּ��ܲ����ֱ��ʹ��\r\n�������������ƶ���",60000), //����
	Array(80001015,"����������ּ��ܲ����ֱ��ʹ��\r\n�������������ƶ���",6000), //����
	Array(80001016,"����������ּ��ܲ����ֱ��ʹ��\r\n�������ŷۺ����������ƶ���",20000), //�ۺ���������
	Array(80001017,"����������ּ��ܲ����ֱ��ʹ��\r\n�������ű��ν���ƶ���",20000), //���ν��
	Array(80001018,"����������ּ��ܲ����ֱ��ʹ��\r\n�������ű���Ħ���ƶ���",20000), //����Ħ��
	Array(80001019,"����������ּ��ܲ����ֱ��ʹ��\r\n�������ų�����װ�ƶ���",30000), //������װ
	Array(80001020,"����������ּ��ܲ����ֱ��ʹ��\r\n����������ʨ����ƶ���",30000), //��ʨ���
	Array(80001022,"����������ּ��ܲ����ֱ��ʹ��\r\n��������ʥ��ѩ���ƶ���",60000), //ʥ��ѩ��
	Array(80001023,"����������ּ��ܲ����ֱ��ʹ��\r\n�������Ÿ����ƶ���",30000), //����
	Array(80001026,"����������ּ��ܲ����ֱ��ʹ��\r\n��������ħŮ��ɨ���ƶ���",120000),//ħŮ��ɨ��
	Array(80001027,"����������ּ��ܲ����ֱ��ʹ��\r\n��������ľ�ɻ��ƶ���",30000),//ľ�ɻ�
	Array(80001028,"����������ּ��ܲ����ֱ��ʹ��\r\n�������ź�ɻ��ƶ���",30000),//��ɻ�
	Array(80001029,"����������ּ��ܲ����ֱ��ʹ��\r\n����������ʿ��ս���ƶ���",12000),//��ʿ��ս��
	Array(80001031,"����������ּ��ܲ����ֱ��ʹ��\r\n��������èͷӥ�ƶ���",30000),//èͷӥ
	Array(80001033,"����������ּ��ܲ����ֱ��ʹ��\r\n���������ݱ˵������������ƶ���",60000),//�ݱ˵�����������
	Array(80001045,"����������ּ��ܲ����ֱ��ʹ��\r\n��������ʨ�����ƶ���",30000),//ʨ����
	Array(80001054,"����������ּ��ܲ����ֱ��ʹ��\r\n�������ž��ް������ƶ���",6000),//���ް�����
	Array(80001055,"����������ּ��ܲ����ֱ��ʹ��\r\n�����������ü����ƶ���",6000),//���ü���
	Array(80001056,"����������ּ��ܲ����ֱ��ʹ��\r\n�����������ӳ����ƶ���",6000),//���ӳ���
	Array(80001059,"����������ּ��ܲ����ֱ��ʹ��\r\n�������������ƶ���",6000),//����
	Array(80001060,"����������ּ��ܲ����ֱ��ʹ��\r\n��������С����ƶ���",120000),//С���
	Array(80001061,"����������ּ��ܲ����ֱ��ʹ��\r\n��������ά��ս���ƶ���",30000),//ά��ս��
	Array(80001062,"����������ּ��ܲ����ֱ��ʹ��\r\n�������������صİ����ƶ���",60000)//�����صİ���
    );


var Select = -1;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (a >= 2 && mode != 1){
        cm.dispose();
    }else{
        if (mode == -1) {
            cm.dispose();
        } else {
            if (mode == 1)
                a++;
            else
                a--;
            if (a == -1){
                cm.dispose();
            }else
            if (a == 0) {
                cm.sendSimple("#r - С������ҳ >> ����̳�#k \r\n #L1#���ר��#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - С������ҳ >> ����̳� >> ������Ʒ#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #s"+news[i][0]+"#  #q"+news[i][0]+"##l\r\n\r\n#r\r\n��Ʒ˵����#d"+news[i][1]+"#r\r\n��Ʒ�۸�#d"+news[i][2]+" #r����� "
                    }
                    if (newopen == 0){
                        cm.sendSimple(selStr)
                    }else{
                        a = -1
                        cm.sendNext("�̳Ǻ��������ϼܡ�");
                    }
				}
            }else if (a == 2){
                Select = selection;
                cm.sendYesNo("#r - С������ҳ >> ����̳� >> ���ר�� >> ���ﳵ #k\r\n\r\n �������� ------------------- #b\r\n\r\n#b#s"+news[Select][0]+"##q"+news[Select][0]+"##l\r\n#r��Ʒ˵����#d"+news[Select][1]+"#r ��\r\n��Ʒ�۸�#d"+news[Select][2]+" #r�����");
				
            }else if (a == 3){
				
                cm.sendGetText("���빺����ٸ���������1,�����ʧ�Ը���\r\n#b������������1��#r\r\n����С���㽫�ᷭ���۳����������Ը���");
				
            }else if (a == 4){
                cost = cm.getText() * news[Select][2] ;
                if (cm.getText() < 1){
                    cm.sendOk("����1 �����ֿ������롣")
                    cm.dispose();
                }else if (cm.getPlayer().getCSPoints(1) < cost){
                    cm.sendOk("�Բ�����ĵ������ #r"+ cost +"#k �㡣")
                    cm.dispose();
                }else{
		            cm.teachSkill(news[Select][0],1,1);
                    cm.gainNX(-cost)
                    cm.sendOk("����ɹ��ˣ���һ��������"+ cost +" ��� ��")
                    cm.dispose();
                }
            }
        }
    }
}