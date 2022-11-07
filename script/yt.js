const isQuanX = typeof $task !== "undefined";
if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace("&ctier=L", "");
   url = url.replace("ctier", "");
  $done({status: 'HTTP/1.1 302 Found',headers: { Location: url});
}
