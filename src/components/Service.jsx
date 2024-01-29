

import { Cog8ToothIcon, HeartIcon, LifebuoyIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Professionelle Montage und Wartung',
    description:
      'Profitieren Sie von unserem Expertenteam und modernster Technologie für Montage und Wartung Ihrer Reifen und Felgen!',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Umfassendes Sortiment an Reifen und Felgen',
    description:
      'Entdecken Sie unser breites Angebot an hochwertigen Reifen und Felgen für alle Fahrzeugtypen.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Spezialisiert auf Felgenreparatur',
    description:
      'Bei uns sind Ihre Felgen in sicheren Händen. Von kleineren Schönheitsreparaturen bis hin zu umfangreichen Restaurierungen!',
    icon: Cog8ToothIcon,
  },
  {
    name: 'Individuelle Beratung und Kundenservice',
    description:
      'Wir bieten persönliche Beratung, um sicherzustellen, dass Sie genau das finden, was Sie brauchen.',
    icon: HeartIcon,
  },
]
export function Service() {
    return (
        <div className="bg-white  mt-64 mb-14">
          <div className="mx-auto max-w-7xl px-8 lg:px-8">
            <div className="mx-auto max-w-4xl lg:text-center">
              <h2 className="text-base font-thin  leading-7 text-600-600">Reifenhandel Eckmann</h2>
              <p className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-4xl">
              Wir kümmerns um Sie!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Bei uns finden Sie die perfekte Kombination aus Qualität und Leistung
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-thin leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 font-sans font-semibold text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )
}
