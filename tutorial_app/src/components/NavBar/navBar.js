import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { PureComponent } from "react";
import "./navBar.css";

export default function NavBar(props) {
  const { menuItems, logo } = props;

  const mockMenuItems = [
    { label: "label1", url: "/label1" },
    { label: "label2", url: "/label2" },
    { label: "label3", url: "/label3" },
    { label: "label4", url: "/label4" },
  ];

  function DisplayMenuItems(props) {
    const { menuItems } = props;

    return (
      <React.Fragment>
        {menuItems.map((item, index) => (
          <Button key={index}>{item.label}</Button>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className="navBar">
      <DisplayMenuItems menuItems={mockMenuItems} />
    </div>
  );
}
