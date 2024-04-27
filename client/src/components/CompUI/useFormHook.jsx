import React from "react";
import { Controller, useForm } from "react-hook-form";

const UseFormHook = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      age: 18,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const error = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, error)}>
      <input type="text" {...register("name", { required: true })} />
      {/*<input type="number" {...register("age")} />*/}
      <Controller
        name="age"
        control={control}
        render={({ field }) => <input {...field} />}
      />
      <button>Отправить</button>
      <button type="button" onClick={() => reset({ age: 0, name: "" })}>
        Очистить форму
      </button>
    </form>
  );
};

export default UseFormHook;
