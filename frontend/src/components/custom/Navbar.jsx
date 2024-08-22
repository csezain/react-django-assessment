import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Navbar = () => {
  return (
    <SectionWrapper
      className={"border-b flex justify-between items-center"}
      as="header"
    >
      <Link to={"/"} className="text-xl font-bold text-foreground/80">
        IR Media
      </Link>
      <Link to={"/profile"}>
        <Avatar>
          <AvatarFallback>JN</AvatarFallback>
        </Avatar>
      </Link>
    </SectionWrapper>
  );
};

export default Navbar;
