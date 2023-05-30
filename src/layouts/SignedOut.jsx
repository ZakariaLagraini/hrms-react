import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Menu position="right">
        <Menu.Item>
            <Button as={Link} to={"/login"} color="white">
              Login
            </Button>
            
        </Menu.Item>
      </Menu.Menu>
    </div>
  );
}
