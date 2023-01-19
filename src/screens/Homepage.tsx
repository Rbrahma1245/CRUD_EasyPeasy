import React, { useState } from "react";
import UserList from "../components/UserList";
import Form from "../components/Form";
import "../styles/output.css";
import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { State } from "../models/Models";

export interface User {
  name: string;
  age: number;
  gender: string;
  id?: number;
}

interface IActions {
  addUser: (user: User) => void;
  deleteUser: (userId?: number) => void;
  updateUser: (user: User) => void;
}

const Homepage: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
    gender: "",
  });
  const { addUser, deleteUser, updateUser } = useStoreActions(
    (actions: IActions) => actions
  );
  const userList = useStoreState((state: State) => state.userList);
  console.log(userList);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // console.log();

    if (user.name === "" || user.age === 0 || user.gender === "") {
      alert("Please fill the details");
    } else if (user.id) {
      updateUser(user);
      setUser({ name: "", age: 0, gender: "" });
    } else {
      addUser({ ...user, id: Date.now() });
      setUser({ name: "", age: 0, gender: "" });
    }
  };

  const handleDelete = (userId?: number) => {
    deleteUser(userId);
  };

  const handleEdit = (userId?: number) => {
    const updateValue = userList.find((CurrElem: User) => {
      return CurrElem.id === userId;
    });
    console.log(updateValue);
    if (updateValue) setUser(updateValue);
  };

  const cardArgs = {
    handleEdit,
    handleDelete,
  };

  const formArgs = {
    user,
    handleSubmit,
    setUser,
  };

  return (
    <div className="bg-pink-50  border-2  h-full ">
      <div className=" text-center grid grid-cols-2 w-2/3  justify - between ml-10   mt-8">
        <UserList {...cardArgs} />
        <Form {...formArgs} />
      </div>
    </div>
  );
};

export default Homepage;
