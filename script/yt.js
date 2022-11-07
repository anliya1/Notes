const isQuanX = typeof $task !== "undefined";
if ($response.Location.indexOf("&ctier") != -1) {
  let url = $response.Location.replace("&ctier=L", "");
   url = url.replace("ctier", "");
  $done({status: 'HTTP/1.1 302 Found',Location: url});
}
