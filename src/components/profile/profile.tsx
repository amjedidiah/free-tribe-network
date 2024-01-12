import React from "react";
import Image from "next/image";
import { profileDataProps } from "../../../types";

const Profile = ({ dp, title, role }: profileDataProps) => {
  return (
    <div className="lg:h-96 lg:w-76">
      <div>
        <Image
          alt="profile"
          src={dp}
          height="300"
          width="300"
          className="rounded mb-4"
        />
      </div>
      <h4 className="bold ">{title}</h4>
      <p className="text-grey-500">{role}</p>
    </div>
  );
};

export default Profile;
