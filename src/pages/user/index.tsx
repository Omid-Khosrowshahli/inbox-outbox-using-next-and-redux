import { NextPage } from "next";
import MainLayout from "../../views/layouts/MainLayout/MainLayout";
import SendMessageTemplate from "../../views/templates/SendMessageTemplate/SendMessageTemplate";

const User: NextPage = () => {
  return (
    <MainLayout>
      <SendMessageTemplate />
    </MainLayout>
  );
};

export default User;