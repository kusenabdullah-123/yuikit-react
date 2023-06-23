import * as component from "./index";

const Kelas = () => {
  const head = ["No", "Nama", "Action"];
  const body = [
    ["1", "kusen"],
    ["2", "kusena"],
    ["3", "kusenadev"],
    ["4", "kusendev"],
  ];
  const action = [
    { url: "/kelas/insert", icon: "mdi:pencil", type: "link" },
    { icon: "mdi:trash", type: "button" },
  ];
  return (
    <>
      <component.Container>
        <component.TitleTable>Data Kelas</component.TitleTable>
        <component.Button name="Baru" />
        {/* <component.FloatingButton icon="mdi:plus" height="25" width="25" bg="red" /> */}
        <component.Table head={head} body={body} action={action} />
      </component.Container>
    </>
  );
};

export default Kelas;
