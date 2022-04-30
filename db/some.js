const fs = require("fs");
let str = `大顶山厂 45100001
镜厂 45100002
莲花厂 45100003
龙华厂 45100004
东升水电 45100005
镜老厂 45100006
山口厂 45100007
哈热厂 45100008
哈发厂 45100009
哈三厂 45100010
富热厂 45100011
富二厂 45100012
齐热厂 45100013
佳热厂 45100014
牡二厂 45100015
鹤岗厂 45100016
新华厂 45100017
西城热电 45100018
华能伊春 45100019
北安厂 45100020
双厂 45100021
哈平南厂 45100022
神华宝清发电厂 45100023
鸡西热电 45100024
鸡西二热 45100025
哈一热厂 45100026
双热厂 45100027
七台河厂 45100028
绥化热电 45100029
达尔凯厂 - 威立雅 45100030
乙烯厂 45100031
宏伟厂 45100032
油田热电厂 45100033
鹤矿热厂 45100034
立达厂 45100035
中盟厂 45100036
中恒厂 45100037
黑热厂 45100038
牡热厂 45100039
鑫玛安达厂 45100040
鑫玛呼兰厂 45100041
宝泰隆厂 45100042
轧钢厂 45100043
庆翔一厂 45100044
海伦厂 45100045
铁力宇翔热电 45100046
西钢厂 45100047
加泰热电厂 45100048
梅里斯电厂 45100049
博源热电 45100050
庆翔二厂 45100051
肇源生物质 45100052
同江长恒热电 45100053
肇东华庆生物质 45100054
肇东肇能生物质 45100055
北林生物质 45100056
兴泰生物质 45100057
老虎岗风电场一期 45100058
老虎岗风电场二期 45100059
双津河风电场 45100060
宾县大个岭风电场 45100061
宾县大泉子风电场 45100062
勃利双星风电（ 驼腰子） 45100063
瑞好风电场一期 45100064
瑞好风电场二期 45100065
和平风电场 45100066
新海风电场（ 二期） 45100067
兴隆风场（ 一期） 45100068
中丹风电场一期 45100069
中丹风电场二期 45100070
中丹风电场三期 45100071
中丹风电场四期 45100072
五连湖风电场（ 红骥） 45100073
五连湖风电场（ 对山） 45100074
银浪风电场（ 银浪） 45100075
银浪风电场（ 宏伟） 45100076
大庆东辉新能源有限公司 45100077
东辉风电场二期（ 青山） 45100078
碾子山风电场 45100079
苏家店风电场 45100080
北架风电场 45100081
虎峰岭风电场一期 45100082
虎峰岭风电场二期 45100083
太阳山风电场 45100084
太平风电场 45100085
吉成风电场一期 45100086
吉成风电场二期 45100087
吉成风电场三期 45100088
晨光风电场 45100089
富强风电场 45100090
拉弹泡风电场一期 45100091
拉弹泡风电场二期 45100092
拉弹泡风电场三期 45100093
宝山风电场 45100094
青龙风电场 45100095
猴石风电场 45100096
富裕风电场一期 45100097
富裕风电场二期 45100098
富裕风电场三期 45100099
锐驰风电场 45100100
海浪风电场 45100101
红旗风电场 45100102
望云峰风电场 45100103
兴凯湖风电场一期 45100104
兴凯湖风电场二期 45100105
兴凯湖风电场三期 45100106
兴凯湖风电场四期 45100107
高楞风电场一期 45100108
高楞风电场二期 45100109
绥阳风电场 45100110
乌尔古力风电场一期 45100111
乌尔古力风电场二期 45100112
古力风电场三期 45100113
十文字风电场一期 45100114
十文字风电场二期 45100115
平岗风电场一期 45100116
平岗风电场二期 45100117
立宏风电场一期 45100118
草原风电场 45100119
大黑山风电场 45100120
小黑山风电场 45100121
长寿山黄团岭风电场 45100122
白山风电场一、 二期 45100123
白山风电场三、 四期 45100124
爱华风电场 45100125
曙光风电场 45100126
龙源夹信山风电场一期 45100127
龙源夹信山风电场二期（ 老平坨） 45100128
瑞信风电场 45100129
鸡冠山风电场一期 45100130
鸡冠山风电场二期 45100131
富锦风电场一期 45100132
富锦风电场二期 45100133
富锦风电场三期 #3	45100134
顶丰风电场	45100135
虎林石青山风电一期	45100136
虎林石青山风电二期	45100137
街津山风电场	45100138
街津山风电场二期	45100139
街津山风电场二期-江胜	45100140
尖山风电场	45100141
东堤风电场（一期）	45100142
驿马山风电场	45100143
横岱山风电场	45100144
东明园风电场一期	45100145
东明园风电场二期	45100146
哈拉海风电场一期	45100147
龙江杏山风力发电（哈拉海二期）	45100148
丹江风电场	45100149
七里嘎风电场一期	45100150
七里嘎风电场二期	45100151
渠首风电场	45100152
七台河佳兴风力发电	45100153
七台河万龙风电	45100154
安邦河风电场一期	45100155
安邦河风电场二期	45100156
安邦河风电场三期	45100157
蝙蝠山风电场	45100158
岔林河风电场	45100159
代马沟风电场一期	45100160
代马沟风电场二期	45100161
乌伊岭阿廷河风电场	45100162
小城山风电场	45100163
美林风电场一期	45100164
美林风电场二期	45100165
岭东风电场	45100166
马鞍山风电场	45100167
云岭云雾山风电场	45100168
顺德风电场	45100169
顺德风电场二期	45100170
林口胜利风电场	45100171
泰来宏浩风电场	45100172
泰来广源大新风电场	45100173
新天风电场一期	45100174
新天风电场二期	45100175
东安风电场	45100176
瑞丰风电场（西沟）	45100177
瑞丰风电场（诚丰）	45100178
大岗风电场一期（平桥）	45100179
大岗风电场二期	45100180
双岭风电场（头道岭）	45100181
双岭风电场（二道岭）	45100182
摆渡风电场	45100183
顺兴风电场	45100184
双发风电场	45100185
华能萝北新垦风电场	45100186
中广核明水通肯河风电场	45100187
绥滨江阴远阳风电场	45100188
团结风电场	45100189
远江风电场	45100190
鹤鸣湖风电厂	45100191
长丰风电场	45100192
中和风电场	45100193
海智风电场	45100194
晟银风电场	45100195
公心集风电场	45100196
兴宾风电场	45100197
讷河兴旺光伏电站	45100198
宁姜新天光伏电站	45100199
宁姜新天立志光伏电站	45100200
宁姜双胜光伏	45100201
宁姜中电投光伏电站	45100202
宁姜中电双兴光伏电站	45100203
宁姜环球光伏电站	45100204
宁姜九洲立志光伏电站	45100205
安达通宝光伏电站	45100206
肇源华光光伏电站	45100207
安达万福光伏电站一期	45100208
安达万福光伏电站二期	45100209
安达万福光伏电站三期	45100210
安达万福光伏电站四期	45100211
安达青肯泡光伏电站A	45100212
安达青肯泡光伏电站B	45100213
青肯泡光伏电站二期A	45100214
青肯泡光伏电站二期B	45100215
安达中聚光伏电站一期	45100216
绿锐光伏电站	45100217
大庆辰瑞新阳光伏电站	45100218
大庆纪元新阳光伏电站	45100219
辉庆光伏电站一期	45100220
辉庆光伏电站二期	45100221
肇东泰光光伏电站（一期）	45100222
肇东泰光光伏电站（二期）	45100223
肇源蓝天光伏电站（一期）	45100224
肇源蓝天光伏电站（二期）	45100225
肇源蓝天光伏电站（三期）	45100226
肇源蓝天光伏电站（四期）	45100227
大庆绿洲光伏电站（一期）	45100228
大庆绿洲光伏电站（二期）	45100229
大庆绿洲光伏电站（三期）	45100230
大庆晶能光伏电站	45100231
大庆晶科光伏电站	45100232
肇东向前光伏电站	45100233
肇东富荣光伏电站	45100234
东海光伏电站一期	45100235
东海光伏电站二期	45100236
东海光伏电站三期	45100237
讷河金阳光伏电站一、二期	45100238
宁姜好新光伏	45100239
祥鹤光伏电站A	45100240
祥鹤光伏电站B	45100241
肇州精锐光伏电站	45100242
大庆合庆光伏电站A	45100243
大庆合庆光伏电站B	45100244
大庆美阳达光伏电站A	45100245
大庆美阳达光伏电站B	45100246
肇州隆辉光伏电站	45100247
昌德同科光伏1	45100248
昌德同科光伏2	45100249
昌德国开光伏A	45100250
昌德国开光伏B	45100251
昌德龙电光伏	45100252
绥滨宝宜光伏电站	45100253
升平光伏(安达市兴电新能源有限公司)	45100254
博众光伏电站	45100255
富裕元盛光伏	45100256
种畜场光伏（金海）	45100257
泰来九洲明月光伏	45100258
泰来九洲新清光伏	45100259
永跃光伏电站	45100260
日泽光伏电站	45100261
通力光伏电站	45100262
长胜光伏电站	45100263
安众光伏电站	45100264
宁升光伏电站	45100265
通威光伏电站	45100266`;
const userList = str.split("\n");
let newList = userList.map((item) => {
  let chunks = item.split(" ");
  return chunks.map((chunk) => {
    if (chunk.length > 0) {
      return chunk;
    }
  });
});
let res = newList.map((item) => {
  if (item.length > 2) {
    let id = item.pop();
    let name = item.join("");
    return [name, id];
  } else {
    return item;
  }
});
let newRes = res.map((item) => {
  if (item.length === 2) {
    return {
      name: item[0],
      username: item[1],
      password: "123456",
      type: "省调",
    };
  } else {
    const newItem = item[0].split("\t");
    return {
      name: newItem[0],
      username: newItem[1],
      password: "123456",
      type: "省调",
    };
  }
});
let jsonString = JSON.stringify(newRes);
fs.writeFile("./output.json", jsonString, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});