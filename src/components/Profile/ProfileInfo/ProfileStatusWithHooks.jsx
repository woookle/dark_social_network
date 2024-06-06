import React, { useEffect, useState } from "react";
import style from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const setModeActive = () => {
    setEditMode(true);
  };
  const setModeDeactiv = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode ? (
        <span onClick={setModeActive}>{status || "Status not found"}</span>
      ) : (
        <input
          type="text"
          onChange={onStatusChange}
          value={status}
          className={style.change_status}
          onBlur={setModeDeactiv}
          autoFocus={true}
        />
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;