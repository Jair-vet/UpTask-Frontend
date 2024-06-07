import { FieldErrors, UseFormRegister } from "react-hook-form"
import { TaskFormData } from "@/types/index";

type TaskFormProps = {
    errors: FieldErrors<TaskFormData>
    register: UseFormRegister<TaskFormData>
}

export const TaskForm = ({errors, register} : TaskFormProps) => {
  return (
    <>
      <div className="space-y-5 bg-gray-700 p-6 rounded-md">

        <div className="flex flex-col gap-1">
            <label
                className="text-green-500 text-sm uppercase font-bold"
                htmlFor="name"
            >Nombre de la tarea</label>
            <input
                id="name"
                type="text"
                placeholder="Nombre de la tarea"
                className="input_formulario"
                {...register("name", {
                    required: "El nombre de la tarea es obligatorio",
                })}
            />
            {/* {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
            )} */}
        </div>

        <div className="flex flex-col gap-1">
            <label
                className="text-green-500 text-sm uppercase font-bold"
                htmlFor="description"
            >Descripción de la tarea</label>
            <textarea
                id="description"
                placeholder="Descripción de la tarea"
                className="input_formulario"
                {...register("description", {
                    required: "La descripción de la tarea es obligatoria"
                })}
            />
            {/* {errors.description && (
                <ErrorMessage>{errors.description.message}</ErrorMessage>
            )} */}
        </div>
      </div>
    </>
  )
}
