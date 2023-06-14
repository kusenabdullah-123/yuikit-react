import * as component from "./index"
import { useState } from "react"
import { Table } from "./components/Content/Table"
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
          <Table head={head} body={body} action={action} />
        </component.Container>
      </component.ContentPage>
    </component.Wrapper>
  </>
}

export default App
