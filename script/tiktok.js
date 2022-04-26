let code = 'JP';
 if ($request.url.indexOf("=CN") != -1) {
        let url = $request.url.replace(/\=CN/g, "=" + code);
        $done({ status: 'HTTP/1.1 307', headers: { Location: url } });

    } else {
       $done({});
    }
