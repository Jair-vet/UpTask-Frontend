import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { ProjectFormData } from 'types'
import ErrorMessage from '../ErrorMessage'

type ProjectFormProps = {
    register: UseFormRegister<ProjectFormData>
    errors: FieldErrors<ProjectFormData>
}

export const ProjectForm = ({errors, register} : ProjectFormProps) => {
  return (
    <>
        <div className="mb-5 space-y-3">
                <label htmlFor="projectName" className="text-green-500 text-sm uppercase font-bold">
                    Nombre del Proyecto
                </label>
                <input
                    id="projectName"
                    className="input_formulario"
                    type="text"
                    placeholder="Nombre del Proyecto"
                    {...register("projectName", {
                        required: "El Titulo del Proyecto es obligatorio",
                    })}
                />

                {errors.projectName && (
                    <ErrorMessage>{errors.projectName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="clientName" className="text-green-500 text-sm uppercase font-bold">
                    Nombre Cliente
                </label>
                <input
                    id="clientName"
                    className="input_formulario"
                    type="text"
                    placeholder="Nombre del Cliente"
                    {...register("clientName", {
                        required: "El Nombre del Cliente es obligatorio",
                    })}
                />

                {errors.clientName && (
                    <ErrorMessage>{errors.clientName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="description" className="text-green-500 text-sm uppercase font-bold">
                    Descripción
                </label>
                <textarea
                    id="description"
                    className="input_formulario"
                    placeholder="Descripción del Proyecto"
                    {...register("description", {
                        required: "La descripción del proyecto es obligatoria"
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>
    </>
  )
}
