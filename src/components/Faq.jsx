'use client'
import { Disclosure, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Welche Arten von Reifen und Felgen bieten Sie an?",
    answer:
      "Wir bieten eine breite Palette von Reifen und Felgen für verschiedene Fahrzeugtypen und Fahrbedingungen an. Unser Sortiment umfasst Sommerreifen, Winterreifen, Ganzjahresreifen sowie eine Vielfalt an Felgen in verschiedenen Größen und Designs. Wir führen Produkte führender Marken, um die beste Qualität und Leistung zu gewährleisten.",
  },{
    question: "Bieten Sie auch Montage- und Auswuchtungsservices an?",
    answer:
      "Ja, wir bieten professionelle Montage- und Auswuchtungsdienstleistungen für Reifen und Felgen. Unser erfahrenes Team verwendet modernste Ausrüstung, um sicherzustellen, dass Ihre Reifen und Felgen korrekt montiert und ausgewuchtet werden, für optimale Fahreigenschaften und Langlebigkeit.",
  },
  {
    question: "Kann ich bei Ihnen auch Felgenreparaturen durchführen lassen?",
    answer:
      "Selbstverständlich! Wir bieten umfassende Felgenreparaturdienste an, einschließlich Schadensbeurteilung, Schweißen, Richten und Refinish. Unsere Experten können eine Vielzahl von Schäden an Ihren Felgen reparieren, um das Erscheinungsbild und die Sicherheit Ihres Fahrzeugs wiederherzustellen.",
  },

  {
    question: "Wie kann ich die richtige Reifen- und Felgengröße für mein Fahrzeug finden?",
    answer:
      "Unsere Fachleute helfen Ihnen gerne dabei, die richtige Größe und den Typ von Reifen und Felgen für Ihr Fahrzeug zu bestimmen. Sie können auch unsere Website nutzen, um die kompatible Reifen- und Felgengröße basierend auf Ihrem Fahrzeugmodell und -typ zu suchen.",
  }
  // More questions...
]

export  function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Häufig gestellte Fragen</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-medium leading-7 tracking-wide">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                                            enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-in"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                        >
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-8 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel></Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
