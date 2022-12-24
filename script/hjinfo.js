let body = {
  "success" : true,
  "errorCode" : 0,
  "message" : "",
  "data" : {
    "likeCount" : 2497,
    "user" : {
      "voiceStatus" : false,
      "status" : 0,
      "famous" : false,
      "title" : {
        "id" : 1,
        "icon" : "https://hjpic.quanxruc.com/hjstore/system/node/usertitle1.png?ver=1654590347",
        "name" : "青铜",
        "consume" : 5000,
        "consumeEnd" : 0
      },
      "tags" : null,
      "videoStatus" : false,
      "nickname" : "帖子已被显示",
      "sex" : 1,
      "fansCount" : 27286,
      "diamondConsume" : 0,
      "friendStatus" : false,
      "voiceMoneyType" : 2,
      "certProfessor" : false,
      "topicCount" : 20,
      "voiceAmount" : 0,
      "videoAmount" : 0,
      "id" : 23027020,
      "forbidden" : false,
      "videoMoneyType" : 2,
      "favoriteCount" : 1,
      "videoCount" : 0,
      "commentCount" : 94,
      "avatar" : "72",
      "role" : 0,
      "vip" : 4,
      "vipExpiresTime" : "2023-10-04 23:59:59",
      "certified" : false,
      "certVideo" : false,
      "popularity" : 530,
      "depositMoney" : 0,
      "description" : "海角社区内容很棒，祝海角社区越办越好。"
    },
    "isFavorite" : true
  }
};
let obj = JSON.parse($response.body);
if(obj.success == false){
   $done({ body: JSON.stringify(body)});
}else{
   $done({});
}
