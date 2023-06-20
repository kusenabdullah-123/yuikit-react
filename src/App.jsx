import * as component from "./index"
import { useState } from "react"

const App = () => {
  const [toogle, setToogle] = useState(true)
  const head = ["No", "Nama", "Action"];
  const body = [["1", "kusen"], ["2", "kusena"], ["3", "kusenadev"], ["4", "kusendev"]]
  const action = [{ url: "", icon: "mdi:pencil" }, { url: "", icon: "mdi:trash" }]
  return <>
    <component.Wrapper>
      <component.Sidebar toogled={+toogle}>
        <component.SidebarHeading>Admin</component.SidebarHeading>
        <component.SidebarList>
          <component.SidebarItem>
            <component.SidebarIcon icon="maki:home" width="20" height="20" title="home" />
          </component.SidebarItem>
          <component.SidebarItem>
            <component.SidebarIcon icon="material-symbols:logout" width="20" height="20" title="Logout" />
          </component.SidebarItem>
        </component.SidebarList>
      </component.Sidebar>
      <component.ContentPage>
        <component.TopBar>
          <component.ToogleButton icon="charm:menu-hamburger" onClick={() => {
            setToogle(!toogle);
          }} />
        </component.TopBar>
        <component.Container>
          <component.TitleTable>Data Kelas</component.TitleTable>
          <component.FloatingButton icon="mdi:plus"height="25" width="25" />
          {/* <component.Table head={head} body={body} action={action} /> */}
          {/* <form action="">
            <component.FormInput id="nama" textinput name="nama" labelname="Nama" />
            <component.FormInput id="password" passwordinput name="password" labelname="Password" />
            <component.FormInput id="makanan" name="makanan" cols={8} rows={5} labelname="Makanan" />
          </form> */}
        </component.Container>
      </component.ContentPage>
    </component.Wrapper>
  </>
}

export default App
