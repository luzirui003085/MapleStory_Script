/*原创作者AND358122354

	优化版中介兑换
*/
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var PD;
var PD1 = 0;
var item2;
var z = "#fEffect/ItemEff/1112811/0/0#";//"+z+"//美化
var item = Array(Array(3000, 1),//点卷：中介
				Array(1, 2800),//中介：点卷
				Array(1, 3),//中介：金币（单位为：千万）
				Array(5, 1)//金币（单位为：千万）：中介
);//这些为会员玩家比例

var item1 = Array(Array(3000, 1),//点卷：中介
				Array(1, 2800),//中介：点卷
				Array(1, 3),//中介：金币（单位为：千万）
				Array(5, 1)//金币（单位为：千万）：中介
);//这些为普通玩家比例

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			cm.sendOk("#r#e　　很高兴为您服务 欢迎您的下次光临！", 1033210);
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			if (status == 0) {
				cm.sendOk("#r#e　　很高兴为您服务 欢迎您的下次光临！", 1033210);
				cm.dispose();
			}
			status--;
		}
		if (status == 0) {
			var TXT = "";
			if (cm.haveItem(2430865)) {
				PD1 = PD1 + 1;
				TXT += "#r#e★★★★★★★★★『会员玩家』★★★★★★★★★\r\n\r\n";
				TXT += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n";
				TXT += "#d尊敬的「#h #」 请选择您需办理的业务\r\n";
				TXT += "#d行情：点卷 [#r " + item[0][0] + "：" + item[0][1] + " #d] 反向 [#r " + item[1][0] + "：" + item[1][1] + " #d] 中介\r\n"
				TXT += " 反向 [#r " + (item[3][0]) + "KW：" + item[3][1] + " #d] W 金币\r\n";
				TXT += "#r当前点卷数量：#d" + cm.getPlayer().getCSPoints(1) + "#r\r\n";
				TXT += "当前货币数量：#d" + cm.getItemQuantity(4000463) + "\r\n";
				TXT += "#r当前金币数量：#d" + (cm.getMeso() / 100000000).toFixed(2) + "亿\r\n";
				TXT += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n\r\n";
				TXT += "#L0##i4000463#点卷购#z4000463# [中介通用货币]#l\r\n";
				TXT += "#L1##i4000463##z4000463#购点卷 [中介通用货币]#l\r\n";
				//TXT += "#L2##i4000463##z4000463#购金币 [中介通用货币]#l\r\n";
				TXT += "#L3##i4000463#金币购中介 [中介通用货币]#l\r\n";
			} else {
				TXT += "#r#e☆☆☆☆☆☆☆☆☆『普通玩家』☆☆☆☆☆☆☆☆☆\r\n\r\n";
				TXT += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n";
				TXT += "#d尊敬的「#h #」 请选择您需办理的业务\r\n";
				TXT += "#d行情：点卷 [#r " + item1[0][0] + "：" + item1[0][1] + " #d] 反向 [#r " + item1[1][0] + "：" + item1[1][1] + " #d] 中介\r\n"
				TXT += "反向 [#r " + (item1[3][0]) + "KW：" + item1[3][1] + " #d] 金币\r\n";
				TXT += "#r当前点卷数量：#d" + cm.getPlayer().getCSPoints(1) + "#r\r\n";
				TXT += "当前货币数量：#d" + cm.getItemQuantity(4000463) + "\r\n";
				TXT += "#r当前金币数量：#d" + (cm.getMeso() / 100000000).toFixed(2) + "亿\r\n";
				TXT += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n\r\n";
				TXT += "#L0##i4000463#点卷购#z4000463# [中介通用货币]#l\r\n";
				TXT += "#L1##i4000463##z4000463#购点卷 [中介通用货币]#l\r\n";
				//TXT += "#L2##i4000463##z4000463#购金币 [中介通用货币]#l\r\n";
				TXT += "#L3##i4000463#金币购中介 [中介通用货币]#l\r\n";
				TXT += "#L4##i4000463#抵用券购#z4002001# #l\r\n";
			}
			cm.sendSimple(TXT);
		} else if (status == 1) {
			PD = selection;
			if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
				cm.sendOk("GM不能参与兑换.");
				cm.dispose();
			}
			if (PD1 == 1) {
				item2 = item;
			} else {
				item2 = item1;
			}
			if (selection == 0) {
				cm.sendGetNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n请入你需购买#z4000463#的数量 [ " + item2[0][0] + "：" + item2[0][1] + " ]\r\n\r\n", 1, 1, cm.getPlayer().getCSPoints(1) / item2[0][0]);
			} else if (selection == 1) {
				cm.sendGetNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n请入你需购买点卷的数量 [ " + item2[1][0] + "：" + item2[1][1] + " ]\r\n\r\n", 1, 1, cm.getItemQuantity(4000463));
			} else if (selection == 2) {
				cm.sendGetNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n#r请输入你要#g''用多少中介币对换金币''#k [ " + item2[2][0] + "：" + item2[2][1] + "KW ]\r\n\r\n", 1, 1, cm.getItemQuantity(4000463));
			} else if (selection == 3) {
				cm.sendGetNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n#r请输入你要#g''用金币兑换多少个中介''#k [ " + item2[3][0] + "KW：" + item2[3][1] + " ]\r\n\r\n", 1, 1, 9999);
			} else if (selection == 4) {
				cm.sendGetNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n#r请输入你要#g''抵用券兑换多少个蜗牛票''#k [ " + 5000 + "抵用兑换：" + 1 + "蜗牛票 ]\r\n\r\n", 1, 1, 9999);
			} else {
				cm.sendOk("出错");
			}
		} else if (status == 2) {
			if (selection <= 0) {
				cm.sendOk("#r#e您输入的数量有误 请整理思绪重新输入！");
				cm.dispose();
			}
			if (PD == 0) {
				if (!cm.canHold(4000463, selection)) {
					cm.sendOk("#e#r你背包“其它”空间不足!请至少有" + selection + "个空间以上.\r\n如果上面有出现小数的话请入位!\r\n如：出现<至少有7.5个空间以上>那么您就需要留8个空间!", 1033210);
					cm.dispose();
				} else if (cm.getPlayer().getCSPoints(1) >= selection * item2[PD][0]) {
					cm.gainNX(-selection * item2[PD][0]);
					cm.gainItem(4000463, (selection * item2[PD][1]));
					cm.sendOk("#r#e[ #h # ] 恭喜您\r\n\r\n您成功用#r " + (selection * item2[PD][0]) + " 点卷\r\n购买了#z4000463# #i4000463# x #r" + (selection * item2[PD][1]), 1033210)
					cm.worldSpouseMessage(0x15, "[ 金融中心 ] 恭喜 " + cm.getChar().getName() + " 用 " + (selection * item2[PD][0]) + " 点卷购买了 " + (selection * item2[PD][1]) + " 枚中介币 ");
					cm.dispose();
				}
			} else if (PD == 1) {
				if (cm.haveItem(4000463, selection)) {
					cm.gainItem(4000463, -(selection * item2[PD][0]));
					cm.gainNX(+item2[PD][1] * selection);
					cm.gainNX(-100);
					cm.sendOk("#r#e[ #h # ]恭喜您\r\n\r\n您成功用#z4000463# #v4000463# x #r" + (selection * item2[PD][0]) + " #k\r\n购买了#r " + (item2[PD][1] * selection) + " #k点卷", 1033210);
					cm.worldSpouseMessage(0x15, "[ 金融中心 ] 恭喜 " + cm.getChar().getName() + " 用 " + (selection * item2[PD][0]) + " 枚中介币购买了 " + (item2[PD][1] * selection) + " 点卷 [ -100 手续费用 ]");
					cm.dispose();
				} else {
					cm.sendNext("#r#e抱歉 [ #h # ] \r\n\r\n您输入的数量错误 请检查输入有误重新输入！", 1033210);
					cm.dispose();
				}
			} else if (PD == 2) {
				if ((cm.getMeso() + (selection * item2[PD][1] * 10000000)) >= 9999999999) {
					cm.sendOk("对不起，你购买的金币太多了，个人钱包金币上线为99E", 1033210);
					cm.dispose();
				} else {
					if (cm.haveItem(4000463, selection)) {
						cm.gainItem(4000463, -(selection * item2[PD][0]));
						cm.gainMeso(+item2[PD][1] * selection * 10000000);
						cm.sendOk("#r#e[ #h # ]恭喜您\r\n\r\n您成功用#z4000463# #v4000463# x #r" + (selection * item2[PD][0]) + " #k\r\n购买了#r " + (selection * item2[PD][1]) + " #kKW金币", 1033210);
						cm.worldSpouseMessage(0x15, "[ 金融中心 ] 恭喜 " + cm.getChar().getName() + " 用 " + (selection * item2[PD][0]) + " 枚中介币购买了 " + (selection * item2[PD][1]) + " KW金币 ");
						cm.dispose();
					} else {
						cm.sendNext("#r#e抱歉 [ #h # ] \r\n\r\n您输入的数量错误 请检查输入有误重新输入！", 1033210);
						cm.dispose();
					}
				}
			} else if (PD == 3) {
				if (cm.getMeso() < (selection * item2[PD][0]) * 10000000) {
					cm.sendOk("对不起，你没有那么多钱", 1033210);
					cm.dispose();
				} else {
					if (cm.canHold(4000463, selection)) {
						cm.gainItem(4000463, selection * item2[PD][1]);
						cm.gainMeso(-item2[PD][0] * selection * 10000000);
						cm.sendOk("#r#e[ #h # ]恭喜您\r\n\r\n您成功用" + (selection * item2[PD][0]) + " #kW金币兑换 " + selection * item2[PD][1] + "个#z4E000463# #v4000463# ", 1033210);
						cm.worldSpouseMessage(0x15, "[ 金融中心 ] 恭喜 " + cm.getChar().getName() + " 用 " + (selection * item2[PD][0]) + " Kw金币购买了 " + (selection * item2[PD][1]) + " 中介 ");
						cm.dispose();
					} else {
						cm.sendNext("#r#e抱歉 [ #h # ] \r\n\r\n请检查背包能带这么多不！", 1033210);
						cm.dispose();
					}
				}
			} else if (PD == 4) {
				if (cm.getPlayer().getCSPoints(2) < (selection * 5000)) {
					cm.sendOk("对不起，你没有那么多抵用卷", 1033210);
					cm.dispose();
				} else {
					if (cm.canHold(4002001, selection)) {
						cm.gainItem(4002001, selection);
						// cm.gainMeso(-item2[PD][0] * selection * 10000000);
						cm.getChar().modifyCSPoints(2, -selection * 5000)
						cm.sendOk("#r#e[ #h # ]恭喜您\r\n\r\n您成功用" + (selection * 5000) + " #kW抵用兑换 " + selection + "个#z4002001# #v4002001# ", 1033210);
						cm.worldSpouseMessage(0x15, "[ 金融中心 ] 恭喜 " + cm.getChar().getName() + " 用 " + (selection * 5000) + " #kW抵用兑换 " + selection + " 个蜗牛票 ");
						cm.dispose();
					} else {
						cm.sendNext("#r#e抱歉 [ #h # ] \r\n\r\n请检查背包能带这么多不！", 1033210);
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("出错了，联系管理员询问！");
				cm.dispose();
			}
		}
	}
}