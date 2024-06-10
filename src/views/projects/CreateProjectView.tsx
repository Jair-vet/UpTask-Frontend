import { ProjectForm } from "@/components/projects/ProjectForm"
import { createProject } from "@/api/ProjectAPI"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { ProjectFormData } from "types"
import { toast } from "react-toastify"
import { useMutation } from "@tanstack/react-query"

export const CreateProjectView = () => {

  const navigate = useNavigate()
  const initialValues : ProjectFormData = {
      projectName: "",
      clientName: "",
      description: ""
      
  }
  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues})

  const { mutate } = useMutation({
    mutationFn: createProject,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      navigate('/')
    }
  })

  // Realizar la mutacion enviandole el parametro que recibe
  const handleForm =  (formData : ProjectFormData) => mutate(formData)
    

  return (
    <>
      <div className="max-w-3xl mx-auto">
       <h1 className="text-3xl font-black text-white uppercase md:text-left text-center">Create Projects</h1>
        <p className="text-xl font-light text-emerald-500 mt-5 md:text-left text-center">fill out form to create a project</p>

        <nav className="my-5">
            <Link
                className="bg-purple-500 hover:bg-purple-600 px-10 py-3 rounded-lg
                 text-white text-xl font-bold cursor-pointer transition-colors "
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
              value='Create Project'
              className=" bg-green-500 hover:bg-green-600 rounded-md w-full p-3 text-white 
                  uppercase font-bold cursor-pointer transition-colors"
          />
        </form> 
      </div>
    </>
  )
}


