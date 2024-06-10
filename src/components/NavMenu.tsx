import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function NavMenu() {

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-purple-500">
        <Bars3Icon className='w-9 h-7 text-white ' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-3 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
          <div className="w-full lg:w-60 shrink text-center md:rounded-xl bg-gray-700 text-md font-semibold leading-6 shadow-lg ring-1 ring-gray-900/5">
            <p className='text-center text-white p-4'>Hola <span className='text-green-500'>Usuario</span> </p>
            <Link
              to='/profile'
              className='input_modal_botton text-purple-500 hover:border-y-purple-500'
            >Mi Perfil</Link>
            <Link
              to='/'
              className='input_modal_botton text-purple-500 hover:border-y-purple-500'
            >Mis Proyectos</Link>
            <button
              className='input_modal_botton text-red-500 hover:border-y-red-500'
              type='button'
              onClick={() => { }}
            >
              Cerrar Sesión
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}