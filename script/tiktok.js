
    if ($request.url.indexOf("get_domains/v5/") != -1) {

        $done({ response: { body: "" } });

    } else if ($request.url.indexOf("aweme/v2/feed/") != -1) {

        let url = $request.url.replace(/https:\/\/.+tiktokv.+aweme\/v2(\/feed\/.+)/, "https://api.tiktokv.com/aweme\/v1$1");

        url = url.replace(/\=CN/g, "=" + code);
        $done({
            response: { status: 'HTTP/1.1 307 Temporary Redirect', headers: { Location: url } }
        });

    } else if ($request.url.indexOf("=CN") != -1) {

        let url = $request.url.replace(/\=CN/g, "=" + code);

        $done({ response: { status:'HTTP/1.1 307 Temporary Redirect', headers: { Location: url } } });

    } else {

        $done({})
    }

