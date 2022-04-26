let code = 'JP';
 if ($request.url.indexOf("=CN") != -1) {

        let url = $request.url.replace(/\=CN/g, "=" + code);
   
        $done({ response: { status: 'HTTP/1.1 307 Temporary Redirect', headers: { Location: url } } });

    } else {

       
