import { useStoreState } from "easy-peasy";
import { State } from "../models/Models";
import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { User } from "../screens/Homepage";
import { APIContext } from "../App";

const UserDetail = () => {
  const params = useParams();
  const userId = params.userId;
  const APIData = useContext(APIContext);
  console.log(APIData);
  const userList = useStoreState((state: State) => state.userList);
  const userInfo = userList.find((user: User) => user.id == userId);

  return (
    <div className=" text-left ml-8 mt-2">
      <NavLink className="ml-2" to="/">
        Back
      </NavLink>
      <br />
      <div
        className=" h-32 text-left w-11 bg-pink-200 rounded  mt-2 ml-2"
        key={userInfo?.id}
      >
        <div className=" py-2 px-4 mt-2  ml-8">
          Name : {userInfo?.name}
          <br />
          Age : {userInfo?.age}
          <br />
          Gender : {userInfo?.gender}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
