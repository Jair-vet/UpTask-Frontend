import { Project, ProjectFormData } from "@/types/index"
import { ProjectForm } from "./ProjectForm"
import { Link, useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProject } from "@/api/ProjectAPI"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"


type EditProjectFormProps = {
    data: ProjectFormData
    projectId: Project['_id']
}

export const EditProjectForm = ({data, projectId} : EditProjectFormProps) => {

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
        projectName: data.projectName,
        clientName: data.clientName,
        description: data.description
    }})
    
    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: updateProject,
        onError: (error) => {
           toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['projects']})
            queryClient.invalidateQueries({queryKey: ['editProject', projectId]})
            toast.success(data)
            navigate('/')
        }
    })

    const handleForm = (formData: ProjectFormData) => {
        const data = {
            formData,
            projectId
        }
        mutate(data)
    }

  return (
    <>
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-black text-white uppercase">Edit Project</h1>
            <p className="text-xl font-light text-emerald-500 mt-5">Fill Out the Form to edit</p>

            <nav className="my-5 ">
                <Link
                    className="bg-purple-500 hover:bg-purple-600 px-10 py-3 rounded-lg text-white text-xl font-bold cursor-pointer transition-colors"
                    to={'/'}
                >Back to Projects</Link>
            </nav>

            <form
                className="mt-10 bg-slate-500 shadow-lg p-10 rounded-lg"
                onSubmit={handleSubmit(handleForm)}
                noValidate
            >

                <ProjectForm 
                    register={register}
                    errors={errors}
                />
                
                <input
                    type="submit"
                    value='Guardar Cambios'
                    className=" bg-green-600 hover:bg-green-700 rounded-md w-full p-3 text-white 
                        uppercase font-bold cursor-pointer transition-colors"
                />
            </form>
        </div>
    </>
  )
}
