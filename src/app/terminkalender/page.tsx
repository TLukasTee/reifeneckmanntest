'use client'
import KalenderKomponente from '@/components/KalenderKomponente';
import UhrzeitAuswahlKomponente from '@/components/UhrzeitAuswahlKomponente';
import React, { useState } from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';


const TerminKalenderSeite: React.FC = () => {
  const [ausgewaehltesDatum, setAusgewaehltesDatum] = useState<Date | null>(null);
  const [ausgewaehlteUhrzeit, setAusgewaehlteUhrzeit] = useState<string>('');

  const waehleDatum = (datum: Date) => {
      setAusgewaehltesDatum(datum);
      setAusgewaehlteUhrzeit(''); // Uhrzeit zurücksetzen bei Datumswechsel
  };

  const waehleUhrzeit = (uhrzeit: string) => {
      setAusgewaehlteUhrzeit(uhrzeit);
  };

    return (
      <MaxWidthWrapper>
        <div className='m-40'>
            <h1 className="text-2xl font-bold flex justify-center mb-5">Terminbuchung</h1>
            <div className="mr-4">
                <KalenderKomponente waehleDatum={waehleDatum} />
            </div>
            {ausgewaehltesDatum && (
                <UhrzeitAuswahlKomponente gewaehltesDatum={ausgewaehltesDatum} waehleUhrzeit={waehleUhrzeit} />
            )}
            {/* Hier können Sie später die Uhrzeitauswahl einfügen */}
        </div>
        </MaxWidthWrapper>
    );
};

export default TerminKalenderSeite;
