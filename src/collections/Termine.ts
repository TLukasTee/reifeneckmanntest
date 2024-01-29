import { CollectionConfig } from 'payload/types';

const Termine: CollectionConfig = {
    slug: 'termine',
    fields: [
        {
            name: 'datum',
            type: 'date',
            required: true,
        },
        {
            name: 'uhrzeit',
            type: 'text', // oder 'time', falls dieses Format unterstützt wird
            required: true,
        },
        {
            name: 'verfuegbar',
            type: 'checkbox', // Ändern Sie 'boolean' zu 'checkbox'
            required: true,
        },
    ],
};

export default Termine;
