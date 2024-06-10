import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { TaskProject } from "@/types/index"
import { useNavigate, useParams } from 'react-router-dom'

type TaskCardProps = {
    task: TaskProject
}

export const TaskCard = ({ task }: TaskCardProps) => {

    const navigate = useNavigate()
    const params = useParams()

    // const style = transform ? {
    //     transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    //     padding: "1.25rem",
    //     backgroundColor: '#FFF',
    //     width: '300px',
    //     display: 'flex',
    //     borderWidth: '1px',
    //     borderColor: 'rgb(203 213 225 / var(--tw-border-opacity))'
    // } : undefined


  return (
    <li className="p-5 bg-slate-900 rounded-lg border-2 border-green-400 shadow-2xl flex justify-between gap-3">
        <div 
        // {...listeners}
        // {...attributes}
        // ref={setNodeRef}
        // style={style}
        className=" min-w-0 flex flex-col gap-y-4">
            <p
                className="text-xl font-bold text-green-400 text-left"
            >{task.name}</p>
            <p className="text-white">{task.description}</p>
        </div>

        <div className="flex shrink-0  gap-x-6">
            <Menu as="div" className="relative flex-none">
                <Menu.Button className="-m-4 block p-2.5 text-green-500 hover:text-white">
                    <span className="sr-only">opciones</span>
                    <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
                </Menu.Button>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items
                        className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-700 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                        <Menu.Item>
                            <button
                                type='button'
                                className='input_modal_botton text-green-500 hover:border-y-green-500'
                                onClick={() => navigate(location.pathname + `?viewTask=${task._id}`)}
                            >
                                Ver Tarea
                            </button>
                        </Menu.Item>

                        <>
                            <Menu.Item>
                                <button
                                    type='button'
                                    className='input_modal_botton text-blue-500 hover:border-y-blue-500'
                                    onClick={() => navigate(location.pathname + `?editTask=${task._id}`)}
                                >
                                    Editar Tarea
                                </button>
                            </Menu.Item>

                            <Menu.Item>
                                <button
                                    type='button'
                                    className='input_modal_botton hover:border-y-red-500 text-red-500'
                                    // onClick={() => mutate({ projectId, taskId: task._id })}
                                >
                                    Eliminar Tarea
                                </button>
                            </Menu.Item>
                        </>


                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    </li>
  )
}
