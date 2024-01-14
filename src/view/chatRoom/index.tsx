import { useWebSocket } from "@/hooks";
const ChatRoom = () => {
    const ws = useWebSocket(handleMessage);
    console.log(ws);
    
    function handleMessage(e: any) {
        console.log(e);
    }
    const handleSendButton=()=>{

        ws.send(JSON.stringify({
            id:new Date().getTime(),
            user:"爸爸",
            dateTime:new Date().getTime(),
            msg:'8888'
        }))
    }
    return (
        <div>
            <input/>
            <button onClick={handleSendButton}>发送</button>
        </div>
    )
}
export default ChatRoom;