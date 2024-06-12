import { useLocation, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNote } from "@/api/NoteAPI"
import { toast } from "react-toastify"
import { NoteFormData } from "@/types/index"
import ErrorMessage from "../ErrorMessage"


export const AddNoteForm = () => {

    const params = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)

    const projectId = params.projectId!
    const taskId = queryParams.get('viewTask')!

    const initialValues : NoteFormData = {
        content: ''
    }

    const { register, handleSubmit, reset, formState: {errors} } = useForm({defaultValues: initialValues})

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: createNote,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({queryKey: ['task', taskId]})
        }
    })
    const handleAddNote = (formData: NoteFormData) => {        
        mutate({projectId, taskId, formData})
        reset()
    }

  return (
    <form
        onSubmit={handleSubmit(handleAddNote)}
        className="space-y-3"
        noValidate
    >
        <div className="flex flex-col gap-2">
            <label className="font-bold text-white" htmlFor="content">Crear Nota</label>
            <input
                id="content"
                type="text"
                placeholder="Contenido de la nota"
                className="input_formulario"
                {...register('content', {
                    required: 'El Contenido de la nota es obligatorio'
                })}
            />
            {errors.content && (
                <ErrorMessage>{errors.content.message}</ErrorMessage>
            )}
        </div>

        <input
            type="submit"
            value='Crear Nota'
            className=" bg-green-600 hover:bg-green-700 w-full p-2 uppercase rounded-lg text-white font-black cursor-pointer"
        />
    </form>
  )
}
