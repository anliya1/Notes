const url = $request.url;
const isQuanX = typeof $task !== "undefined";
const binaryBody = isQuanX ? new Uint8Array($response.bodyBytes) : $response.body;
let needProcessFlag = false;
let body;

console.log(`youtube:2022-10-20`);
if ($request.method !== 'POST') {
    $notification.post('youtube-proto去广告脚本错误', "请求方法不为POST:", url);
}

if (url.includes("/v1/browse")) {
    console.log('browse');
    let browseMessage = browseRes.fromBinary(binaryBody, { readUnknownField: true });
    console.log(`n1F10`)
    removeAds(browseMessage.n1F10?.n2F49399797?.n3F1);
    console.log(`n1F9`)
    removeAds(browseMessage.n1F9?.m2F58173949?.m3F1?.m4F58174010?.n1F10?.n2F49399797?.n3F1);
    if (needProcessFlag) {
        body = browseRes.toBinary(browseMessage);
    }
} else if (url.includes("/v1/next")) {
    console.log('next');
    let nextMessage = nextRes.fromBinary(binaryBody, { readUnknownField: true });
    removeAds(nextMessage.a1F7?.a2F51779735?.a3F1?.n2F49399797?.n3F1);
    if (needProcessFlag) {
        body = nextRes.toBinary(nextMessage);
    }
} else {
    $notification.post('youtube-proto脚本匹配错误', "url:", url);
}
if (needProcessFlag) {
    console.log(`${body.byteLength}---${body.buffer.byteLength}`);
    if (isQuanX) {
        $done({ bodyBytes: body.buffer.slice(body.byteOffset, body.byteLength + body.byteOffset) });
    } else {
        $done({ body });
    }
} else {
    console.log('无需处理');
    $done({});
}

function removeAds(itemList) {
    itemList?.forEach?.(item => {
        if (item.n4F50195462?.n5F1?.length) {
            item.n4F50195462.n5F1 = item.n4F50195462.n5F1.filter(el => {
                let flag = true;
                if (el.n6F153515154?.n7F172660663?.n8F1?.n9F168777401) {
                    const f5Value = el.n6F153515154.n7F172660663.n8F1.n9F168777401.n10F5;
                    const adStr = f5Value?.n11F454362329?.n12F8?.n13F4?.s;
                    const adStr0 = f5Value?.n11F224457493?.n12Ff2?.s;
                    const adStr2 = f5Value?.n11F224590612?.n12F2?.s3;
                    const adStr22 = f5Value?.n11F224590612?.n12F2?.s9;
                    const adStr3 = f5Value?.n11F394770629?.a12F8?.a13F4?.s;
                    const existAdStr = adStr || adStr0 || adStr2 || adStr22 || adStr3;
                    if (existAdStr) {
                        console.log(`广告:${existAdStr}`);
                        needProcessFlag = true;
                        flag = false;
                    }
                }
                el.n6F153515154?.n7F172660663?.n8F3?.n9F3?.n10F3?.forEach?.(ell => {
                    ell.n11F3?.forEach?.(v => {
                        v.n12F3?.forEach?.(vv => {
                            const tempStr = vv.n13F1?.n14F158796380?.n15F1.s;
                            if (tempStr) {
                                console.log(`列表中间的多图广告:${tempStr}`);
                                needProcessFlag = true;
                                flag = false;
                            }
                        });
                    });
                });
                return flag;
            });
        }
    });
}
