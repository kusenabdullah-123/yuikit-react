import * as component from "./index";
import { useForm, Controller } from "react-hook-form";

const Insert = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <component.Container>
        <component.TitleTable>Data Kelas</component.TitleTable>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="nama"
            defaultValue=""
            control={control}
            render={({ field }) => <component.FormInput {...field} id="nama"  textinput labelname="Nama" />}
          />
          {/* <component.FormInput id="nama" textinput name="nama" labelname="Nama" />
            <component.FormInput id="password" passwordinput name="password" labelname="Password" />
            <component.FormInput id="makanan" name="makanan" cols={8} rows={5} labelname="Makanan" />
            <component.FormFile name="image" id="image" /> */}
            <component.FloatingButton
          icon="mdi:plus"
          height="25"
          width="25"
          color="red"
        />
        </form>
      </component.Container>
    </>
  );
};

export default Insert;
