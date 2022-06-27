import { NextPage } from "next";
import MessageList from "../../views/components/MessageList/MessageList";

const Dashboard: NextPage = () => {
  return (
    <div>
      <MessageList />
    </div>
  );
};

export default Dashboard;