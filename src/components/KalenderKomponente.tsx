'use client'
import { eachDayOfInterval, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';
import { de } from 'date-fns/locale';
import React, { useState } from 'react';

interface KalenderKomponenteProps {
    waehleDatum: (datum: Date) => void;
}

const KalenderKomponente: React.FC<KalenderKomponenteProps> = ({ waehleDatum }) => {
    const [ausgewaehltesDatum, setAusgewaehltesDatumIntern] = useState(new Date());

    function generiereKalender() {
        const startMonat = startOfMonth(ausgewaehltesDatum);
        const endeMonat = endOfMonth(startMonat);
        const startWoche = startOfWeek(startMonat);
        const endeWoche = endOfWeek(endeMonat);

        const daten = eachDayOfInterval({ start: startWoche, end: endeWoche });
        return daten;
    }

    const kalenderDaten = generiereKalender();

    const datumAuswaehlen = (datum: Date) => {
        setAusgewaehltesDatumIntern(datum);
        waehleDatum(datum);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-7 gap-2">
                {kalenderDaten.map((datum, index) => {
                    const istVergangen = datum < new Date();
                    const istHeute = format(datum, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');

                    return (
                        <button 
                            key={index}
                            className={`p-2 border rounded ${istVergangen ? 'bg-gray-300' : istHeute ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            onClick={() => !istVergangen && datumAuswaehlen(datum)}
                            disabled={istVergangen}
                        >
                            {format(datum, 'd', { locale: de })}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default KalenderKomponente;
