import { WS_ADDRESS } from "../configs";
export function useWebSocket(handleMessage: any) {
    const ws = new WebSocket(WS_ADDRESS);
    const init = () => { bindEvent() };
    function bindEvent() {
        ws.addEventListener('open', handleOpen, false);
        ws.addEventListener('close', handleClose, false);
        ws.addEventListener('error', handleError, false);
        ws.addEventListener('message', handleMessage, false);
    };
    function handleOpen(e: any) {
        console.log('handleOpen', e);
    }
    function handleClose(e: any) {
        console.log("handleClose", e);
    }
    function handleError(e: any) {
        console.log('handleError', e);
    }

    init();
    return ws;
};
