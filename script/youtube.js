if ($request.url.indexOf("&oad") != -1) {
  $done({ response: {body: ""} });
} else if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace("&ctier=L", "");
   url = url.replace("ctier", "");
  $done({ response: { status: 302, headers: { Location: url } } });
} else if
($request.url.indexOf("player/ad_break") != -1) {
  $done({ response: {body: ""} });
 }else {
  $done({})
}
