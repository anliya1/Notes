let body = $response.body;
let obj = JSON.parse(body);
obj.data.type= 0;



$done({ body: JSON.stringify(obj) });
