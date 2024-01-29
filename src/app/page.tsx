import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react';
import { Krona_One } from "next/font/google";
import Link from 'next/link';
const inter = Krona_One({  weight: '400',
subsets: ['latin'], });
const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description:
      'Get your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: 'For the Planet',
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className={inter.className}>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl lg:mt-32 md:mt-40 sm:mt-42 mt-40'>
        <h1 className="{mx-auto max-w-4xl   mb-8 font-display font-medium tracking-tight text-slate-900 text-5xl lg:text-5xl   md:text-5xl sm:text-4xl ">
        REIFEN ECKMANN </h1>
        <span className="relative text-cyan-500    lg:text-1xl text-base font-extralight tracking-tight  ">Wir sind die Kraft zwischen Auto und Straße</span>

          <div className='flex flex-col sm:flex-row gap-4 mt-6 mx-12'>
            <Link
              href='/terminkalender'
              className={`bg-slate-900 hover:bg-slate-950 text-sm  ${inter.className} font-semibold   tracking-wider px-14 py-4 rounded-xl uppercase text-white `}>
              Termin Vereinbaren
            </Link>
           
          </div>
        </div>

        
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}