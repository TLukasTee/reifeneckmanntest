
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logo1 from '@/images/KundenLogos/Kunden (1).png'
import logo2 from '@/images/KundenLogos/Kunden (2).png'
import logo3 from '@/images/KundenLogos/Kunden (3).png'
import logo4 from '@/images/KundenLogos/Kunden (5).png'
import logo5 from '@/images/KundenLogos/Kunden (6).png'
import logo6 from '@/images/KundenLogos/Kunden (7).png'
import logo7 from '@/images/KundenLogos/Kunden (8).png'
import logo8 from '@/images/KundenLogos/Kunden (9).png'
import Image from 'next/image'


export function Hero() {
  return (
    <Container   className="lg:text-center lg:mt-64 md:mt-40 sm:mt-42 mt-40 text-center" >
      <h1 className="mx-auto max-w-4xl  mb-8 font-display font-medium tracking-tight text-slate-900 text-5xl lg:text-6xl   md:text-5xl sm:text-4xl ">
        REIFEN ECKMANN </h1>
      <span className="relative text-cyan-500    lg:text-2xl text-base font-extralight tracking-tight  ">Wir sind die Kraft zwischen Auto und Straße</span>

      
      <div className="mt-10 flex justify-center  gap-x-6  ">
        <Button href="/terminkalender" className='bg-slate-900 text-md font-semibold font-sans f tracking-wider px-14 py-4 rounded-xl uppercase'>Termin vereinbaren</Button>
       
      </div>
       <div className="mt-36 lg:mt-44">
        <p className="font-display text-2xl text-slate-900">
          Unsere Partner
        </p>
      <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col   sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Partner ', logo: logo1 },
              { name: 'Partner', logo: logo2 },
              { name: 'Partner', logo: logo3 },
              { name: 'Partner', logo: logo4 },
            ],
            [
              { name: 'Partner', logo: logo5 },
              { name: 'Partner', logo: logo6 },
              { name: 'Partner', logo: logo7 },
              { name: 'Partner', logo: logo8 },
            ]
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center lg:pt-12 lg:p-0 lg:flex-row lg:gap-x-8 lg:gap-y-5  gap-y-14 sm:p-8 p-8 sm:flex-row sm:gap-x-12 sm:gap-y-12 "
              >
                {group.map((company) => (
                  <li key={company.name} className="flex grayscale hover:grayscale-0 hover:transition ease-in-out delay-150">
                    <Image  src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
