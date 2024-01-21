import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import UserIcon from "./UserIcon";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center px-6 py-1 w-full absolute bg-gradient-to-b from-black justify-between z-50">
      <img className="w-24 h-20 md:w-32 md:h-20" src={LOGO} alt="logo" />
      {selector && <UserIcon />}
    </div>
  );
};

export default Header;
