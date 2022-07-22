
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
function httpa (my) {
return new Promise((resolve, reject) =>{

const url = my;
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
	resolve(response.body);
   
}, reason => {
    console.log(reason.error);
	reject(reason.error);
});
})};

// https://hjedd.com/api/topic/att/1987885

 async function haijiao(body){
  
 // let oo = await httpa('https://hjedd.com/api/topic/380729');
  let obj1 = JSON.parse(body);
  for(let a in obj1.data.attachments){
    if(obj1.data.attachments[a].coverUrl){
        let id =obj1.data.attachments[a].id;
        let o = await httpa('https://hjedd.com/api/topic/att/'+id);
	   let obj2 = JSON.parse(o);
        obj1.data.attachments[a].remoteUrl =obj2.data[0].url;
	   // console.log(obj1.data.attachments[a].remoteUrl);
	   $done({ body: JSON.stringify(obj1) });
    }
 }
};

haijiao($response.body);
