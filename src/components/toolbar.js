import React from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "../auth/selectProfile";
import { Link } from "react-router-dom";
import { logout } from "../auth/actions";
import { useDispatch } from "react-redux";

export default function ToolBar() {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  console.log("profile 2", profile);

  if (!profile) {
    return <Link to="/login">Log in</Link>;
  }

  return (
    <div>
      Welcome back, {profile.name}
      <p>
        <button onClick={() => dispatch(logout)}>Logout</button>
      </p>
    </div>
  );
}
