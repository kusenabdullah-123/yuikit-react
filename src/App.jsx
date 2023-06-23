import * as component from "./index";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [toogle, setToogle] = useState(true);
  return (
    <>
      <component.Wrapper>
        <component.Sidebar toogled={+toogle}>
          <component.SidebarHeading>Admin</component.SidebarHeading>
          <component.SidebarList>
            <component.SidebarItem go="/">
              <component.SidebarIcon
                icon="maki:home"
                width="20"
                height="20"
                title="home"
              />
            </component.SidebarItem>
            <component.SidebarItem go="/logout">
              <component.SidebarIcon
                icon="material-symbols:logout"
                width="20"
                height="20"
                title="Logout"
              />
            </component.SidebarItem>
            <component.SidebarItem go="/kelas">
              <component.SidebarIcon
                icon="ph:users"
                width="20"
                height="20"
                title="Kelas"
              />
            </component.SidebarItem>
          </component.SidebarList>
        </component.Sidebar>
        <component.ContentPage>
          <component.TopBar>
            <component.ToogleButton
              icon="charm:menu-hamburger"
              onClick={() => {
                setToogle(!toogle);
              }}
            />
          </component.TopBar>
          <component.Container>
            <component.TitleTable>Home</component.TitleTable>
            <Outlet></Outlet>
          </component.Container>
        </component.ContentPage>
      </component.Wrapper>
    </>
  );
};

export default App;
