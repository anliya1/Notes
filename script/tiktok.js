   let code = 'JP';
   if ($request.url.indexOf("get_domains/v5/") != -1) {
   let url = $request.url.replace(/\=CN/g, "=" + code);
         $done({ headers: { Location: url }, status: 'HTTP/1.1 302'}) 

    } 
