import UserCard from "../components/UserCards/UserCards";
import UserTable from "../components/UserTable/UserTable";
import UserForm from "../components/UserForm/UserForm";
import { Stack } from "@mui/system";
import Divider from "@mui/material/Divider";
import { useState } from "react";
const UserInfo = (props) => {
  const { currentTab } = props;
  // console.log("currentTab", currentTab);
  const [userData, setUserData] = useState([]);

  let currentPage = <div> Select current Page </div>;
  if (currentTab === "UserEnter") {
   
        currentPage = <UserForm userData={userData} setUserData={setUserData} />;
  
  
  }  else if (currentTab === "UserTable") {
   
    currentPage =    <UserTable userData={userData} />
    
  }

  else if (currentTab === "UserCards") {
   
    currentPage =  <UserCard userData={userData} />

}
  return <>
    {currentPage}
  </>;
};

export default UserInfo;
