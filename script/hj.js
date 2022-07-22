let body = $response.body;
let obj = JSON.parse(body);
let id ;
 for(let a in obj.data.attachments){
    if(obj.data.attachments[a].coverUrl){
        id =obj.data.attachments[a].id;
    }
 }

let url = `https://hjedd.com/api/topic/att/`+id;
const method = `GET`;
const headers = {
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1`,
'Host' : `hjedd.com`,
'Connection' : `keep-alive`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
   let o = JSON.parse(response.body);
    let b =o.data[0].url;
}, reason => {
    console.log(reason.error);
    $done();
});
obj.data.attachments[a].remoteUrl =b;
$done({ body: JSON.stringify(obj) });
