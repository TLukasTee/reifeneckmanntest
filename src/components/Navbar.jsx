import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid'
import {
  Bars3Icon,
  CalendarDaysIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'

import Logo_Black from '@/images/Logos/Logo_Eckmann_Schwarz.png'
import Image from 'next/image'

const service = [
  { name: 'Montage', description: 'Professionelle Montage und Wartung', href: '/products?category=ui_kits', icon: Cog8ToothIcon },
  { name: 'Felgenreperatur', description: 'Von  Schönheitsreparaturen bis hin zu umfangreichen Restaurierungen!', href: 'products?category=icons', icon: WrenchScrewdriverIcon },

]

const products = [
  { name: 'Felgen', description: 'Professionelle Montage und Wartung', href: 'products?category=icons', icon: Cog8ToothIcon },
  { name: 'Reifen', description: 'Von  Schönheitsreparaturen bis hin zu umfangreichen Restaurierungen!', href: '/products?category=ui_kits', icon: WrenchScrewdriverIcon },

]
const callsToAction = [
  { name: 'Termin Buchen', href: '#', icon: CalendarDaysIcon },
  { name: 'Anrufen', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About us', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Support', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Blog', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export  function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mt-2" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/#" className="-m-1.5 p-1.5 ">
            <span className="sr-only">Reifenhandel Eckmann </span>
            <Image src={Logo_Black} width="100"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        
        <Popover.Group className="hidden lg:flex lg:gap-x-12 mt-1 ">
          <Popover className="relative border-0">
            <Popover.Button className="flex items-center gap-x-1 text-md font-extalight leading-6 text-gray-900 border-3 outline-none border-none  tracking-tight">
              Unser Service
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-1 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-1 scale-95"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {service.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-cyan-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-normal text-sm text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm  tracking-tighter leading-6 text-gray-900 hover:bg-gray-100 font-normal text-sm "
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400 hover:text-cyan-500" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative border-0">
            <Popover.Button className="flex items-center gap-x-1 text-md font-extalight leading-6 text-gray-900 border-3 outline-none border-none  tracking-tight">
              Sortiment
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-1 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-1 scale-95"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-cyan-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-normal text-sm text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              
              </Popover.Panel>
            </Transition>
          </Popover>

        
          <a href="#" className="text-md  font-extalight leading-6 text-gray-900   tracking-tight">
            Team
          </a>

          <a href="#" className="text-md  font-extalight leading-6 text-gray-900   tracking-tight">
            Über uns
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-md  font-extalight leading-6 text-gray-900 bg-slate-800 p-2 hover:bg-cyan-500 rounded-md px-5 text-white text-sm  tracking-tight">
            Kontakt 
          </a>
        </div>
      </nav>
      
      <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 "  />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 mt-2 transition ease-out duration-300 transform">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Reifenhandel Eckmann</span>
              <Image src={Logo_Black} width="100"/>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menü schließen</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
                        Unser Service
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Transition
                         enter="transition duration-300 ease-out"
  enterFrom="transform scale-95 opacity-0"
  enterTo="transform scale-100 opacity-100"
  leave="transition duration-200 ease-in"
  leaveFrom="transform scale-100 opacity-100"
  leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...service].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-light leading-7 text-gray-900 hover:bg-gray-50 tracking-tight"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
                        Sortiment
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Transition
                         enter="transition duration-300 ease-out"
  enterFrom="transform scale-95 opacity-0"
  enterTo="transform scale-100 opacity-100"
  leave="transition duration-200 ease-in"
  leaveFrom="transform scale-100 opacity-100"
  leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-light leading-7 text-gray-900 hover:bg-gray-50 tracking-tight"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>

                
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50 tracking-tight"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50 tracking-tight"
                >
                  Über Uns
                </a>
              </div>
              <div className="flex justify-start py-6 ">
                <a
                  href="#"
                  className="-hover:bg-gray-50 text-sm bg-cyan-400 text-display font-light p-2 hover:bg-cyan-500 rounded-md  px-5  "
                >
                  Termin  Buchen
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
