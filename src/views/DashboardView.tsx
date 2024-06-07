import { deleteProject, getProjects } from "@/api/ProjectAPI"
import { useMutation, useQuery, QueryClient, useQueryClient } from '@tanstack/react-query';
import { Link } from "react-router-dom"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { toast } from "react-toastify"

export const DashboardView = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: deleteProject,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    }
  })

  if(isLoading) return 'Cargando...'

  if (data) return (
    <div className="p-5">
      <h1 className="text-3xl font-black text-white uppercase">My projects</h1>
      <p className="text-xl font-light text-emerald-500 mt-5">Manage your projects</p>

      <nav className="my-5 ">
          <Link
              className="bg-purple-500 hover:bg-purple-600 px-10 py-3 rounded-lg text-white text-xl font-bold cursor-pointer transition-colors"
              to={'/projects/create'}
          >New Project</Link>
      </nav>


      {data.length ? (
      <ul role="list" className="divide-y bg-slate-800 divide-gray-100 border rounded-md border-green-400 mt-10 shadow-lg">
        {data.map((project) => (
          <li key={project._id} className="flex justify-between gap-x-6 px-5 py-5">
              <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto space-y-2">
                      <Link to={`/projects/${project._id}`}
                          className="text-green-400 fius hover:underline text-2xl uppercase font-extrabold"
                      >{project.projectName}</Link>
                      <p className="text-sm text-white">
                        <span className="text-fuchsia-500">Cliente:</span> {project.clientName}
                      </p>
                      <p className="text-sm text-white">
                        <span className="text-fuchsia-500">Descripción:</span> {project.description}
                      </p>
                  </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-6">
                  <Menu as="div" className="relative flex-none">
                      <Menu.Button className="-m-2.5 block p-2.5 text-green-600 hover:text-white">
                          <span className="sr-only">opciones</span>
                          <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
                      </Menu.Button>
                      <Transition as={Fragment} enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95">
                          <Menu.Items
                              className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white py-3 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                          >
                                  <Menu.Item>
                                      <Link to={`/projects/${project._id}`}
                                          className='w-full block px-3 py-1 text-center text-sm leading-6 text-gray-900 hover:text-white hover:bg-purple-500'>
                                      Ver Proyecto
                                      </Link>
                                  </Menu.Item>
                                  <Menu.Item>
                                      <Link to={`/projects/${project._id}/edit`}
                                          className='w-full block px-3 py-1 text-center text-sm leading-6 text-gray-900 hover:text-white hover:bg-purple-500'>
                                      Editar Proyecto
                                      </Link>
                                  </Menu.Item>
                                  <Menu.Item>
                                      <button 
                                          type='button' 
                                          className='w-full block px-3 py-1 text-sm leading-6 text-red-500 hover:text-white hover:bg-red-500'
                                          onClick={() => mutate(project._id) }
                                      >
                                          Eliminar Proyecto
                                      </button>
                                  </Menu.Item>
                          </Menu.Items>
                      </Transition>
                  </Menu>
              </div>
          </li>
        ))}
    </ul>
      ) : (
        <p className="text-center py-20">No hay proyectos aún {''}
          <Link
            to='/projects/create'
            className=" text-fuchsia-500 font-bold"
          >Crear Proyecto</Link>
        </p>
      )}

    </div>
  )
}
