import React from "react";
import profilePicture from "../../profilepicture.png";
function ProfilePhoto() {
  return (
    <div>
      <img
        src={profilePicture}
        alt="profile"
        style={{ width: "10%", marginTop: "10px" }}
      />
    </div>
  );
}

export default ProfilePhoto;
