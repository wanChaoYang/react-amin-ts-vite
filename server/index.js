const WebSocket = require("ws");
; ((Ws) => {
    //构造出一个服务
    const server = new Ws.Server({
           "port":8000,
        });
    const init = () => {
        bindEvent()
    };
    function bindEvent() {
        server.on('open', handleOpen);
        server.on('close', handleClose);
        server.on('error', handleError);
        server.on('connection', handleConnection);
    }
    function handleOpen() {
        console.log('ws opne');
    }
    function handleClose() {
        console.log('ws colse');
    }
    function handleError() {
        console.log('ws error');
    }
    function handleConnection() {
        console.log('ws connection');
        Ws.on('message', handleMesssage)
    }
    function handleMesssage(msg) {
        console.log(msg);
        // server.clients.forEach(c=>{
        //     c.send(msg)
        // })
    }
    init();
})(WebSocket);

 
