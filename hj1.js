let body = $response.body;
let obj = JSON.parse(body);
obj.data.sale.is_buy = true
obj.data.sale.buy_index = obj.data.sale.buyCount-1
$done({ body: JSON.stringify(obj) });
