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
    ws.send(
      JSON.stringify({
        a: '123123123'
      })
    );
  };
  const handleClose = () => {
  };
  const handleError = () => {
  };
  init();
  return ws;
}

export default useWebSocket;
