import * as component from "./index"

const Insert = () => {
  return <>
        <component.Container>
          <component.TitleTable>Data Kelas</component.TitleTable>
          <component.FloatingButton icon="mdi:plus"height="25" width="25" color="red" />
          <form action="">
            <component.FormInput id="nama" textinput name="nama" labelname="Nama" />
            <component.FormInput id="password" passwordinput name="password" labelname="Password" />
            <component.FormInput id="makanan" name="makanan" cols={8} rows={5} labelname="Makanan" />
            <component.FormFile name="image" id="image" />
          </form>
        </component.Container>
  </>
}

export default Insert
