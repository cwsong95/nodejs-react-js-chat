import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
// MultiChatSocket: websocket that lets the user connect to all of their chats
// MultiChatWindow: is the UI that unfolds and lets the user type message and see new messages
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '7ef04d63-71e9-421a-a3d3-1b98f512214a',
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
  )
}

export default ChatsPage