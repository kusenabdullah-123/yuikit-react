import * as component from "./index"
import { useState } from "react"

const Kelas = () => {
    const [toogle, setToogle] = useState(true)
    const head = ["No", "Nama", "Action"];
    const body = [["1", "kusen"], ["2", "kusena"], ["3", "kusenadev"], ["4", "kusendev"]]
    const action = [{ url: "", icon: "mdi:pencil" }, { url: "", icon: "mdi:trash" }]
    return <>
        <component.Container>
            <component.TitleTable>Data Kelas</component.TitleTable>
            <component.FloatingButton icon="mdi:plus" height="25" width="25" />
            <component.Table head={head} body={body} action={action} />
        </component.Container>

    </>
}

export default Kelas
