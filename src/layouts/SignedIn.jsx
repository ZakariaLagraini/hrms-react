import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Menu>
        <Menu.Item>
          <Image
            avatar
            spaced="right"
            src="https://www.reshot.com/preview-assets/icons/5YL68ZXUKB/user-5YL68ZXUKB.svg"
          />

          <Dropdown text={window.sessionStorage.getItem('username')} pointing="top right">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={signOut}
                text="Sign-out"
                icon="sign-out"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </div>
  );
}
