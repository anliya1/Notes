const isQuanX = typeof $task !== "undefined";
if ($response.Location.indexOf("&ctier") != -1) {
  let url = $response.Location.replace("&ctier=L", "");
   url = url.replace("ctier", "");
  $done({status: 'HTTP/1.1 302 Found',Location: url});
}
{
"code":10086,
"data":{
    "url":"aHR0cHM6Ly9oYWlqaWFvLmNvbS9hcGkvdG9waWMv",
 },
"tg":"https://t.me/baipiao_666",
"msg":"在线解
