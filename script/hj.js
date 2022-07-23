
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
function httpa (id) {
return new Promise((resolve, reject) =>{

let url = 'https://'+$request.headers.Host+'/api/topic/att/'+id;
let method = $request.method;
let headers = $request.headers;
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
        let o = await httpa(id);
	   let obj2 = JSON.parse(o);
        obj1.data.attachments[a].remoteUrl =obj2.data[0].url;
	   // console.log(obj1.data.attachments[a].remoteUrl);
	   $done({ body: JSON.stringify(obj1) });
    }else{
	$done();    
    }
 }
};

haijiao($response.body);
