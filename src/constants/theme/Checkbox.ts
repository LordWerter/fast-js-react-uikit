import { CHECKBOX_MAP } from './imgs';

export const theme = {
    cwrap: {
        core: {
            display: 'flex',
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    checkbtn: {
        core: {},
        mobile: {},
        tablet: {},
        desktop: {},
    },
    checkicon: {
        core: {
            width: '16px',
            height: '16px',
            marginRight: '8px',
            backgroundSize: 'auto 16px',
            backgroundPosition: '0 center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'transparent',
            backgroundImage: `url('${CHECKBOX_MAP}')`,
            borderRadius: '2px',
            overflow: 'hidden',

            '&.isChecked': {
                backgroundPosition: '-47px center',
            },

        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    label: {
        core: {},
        mobile: {},
        tablet: {},
        desktop: {},
    },
};

export default theme;
