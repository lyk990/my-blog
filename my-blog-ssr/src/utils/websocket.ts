import { WS_ADDRESS } from '@/configs/index';

function useWebSocket(handleMessage: () => {}) {
  const ws = new WebSocket(WS_ADDRESS);

  const init = () => {
    bindEvent();
  };
  const bindEvent = () => {
    ws.addEventListener('open', handleOpen, false);
    ws.addEventListener('close', handleClose, false);
    ws.addEventListener('error', handleError, false);
    ws.addEventListener('message', handleMessage, false);
  };
  const handleOpen = () => {
    console.log('websocket open');
    ws.send(
      JSON.stringify({
        a: '123123123'
      })
    );
  };
  const handleClose = () => {
    console.log('websocket close');
  };
  const handleError = () => {
    console.log('websocket error');
  };
  init();
  return ws;
}

export default useWebSocket;
