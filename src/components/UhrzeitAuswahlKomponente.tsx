'use client'
import React from 'react';

interface UhrzeitAuswahlProps {
    gewaehltesDatum: Date;
    waehleUhrzeit: (uhrzeit: string) => void;
}

const UhrzeitAuswahlKomponente: React.FC<UhrzeitAuswahlProps> = ({ gewaehltesDatum, waehleUhrzeit }) => {
    const uhrzeiten = [];
    for (let stunde = 8; stunde <= 16; stunde++) {
        uhrzeiten.push(`${stunde < 10 ? '0' + stunde : stunde}:00`);
        uhrzeiten.push(`${stunde < 10 ? '0' + stunde : stunde}:30`);
    }

    return (
        <div className="flex flex-col">
            {uhrzeiten.map((uhrzeit, index) => (
                <button 
                    key={index}
                    className="p-2 border rounded bg-white hover:bg-blue-500 hover:text-white"
                    onClick={() => waehleUhrzeit(uhrzeit)}
                >
                    {uhrzeit}
                </button>
            ))}
        </div>
    );
};

export default UhrzeitAuswahlKomponente;
