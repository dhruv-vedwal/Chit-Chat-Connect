import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider"

const Chatpage = () => {
  const { user } = ChatState()

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer/>}
      {user && <MyChats />}
      {user && <ChatBox/>}
    </div>  
  );
};

export default Chatpage;