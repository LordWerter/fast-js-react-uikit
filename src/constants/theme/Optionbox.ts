import {
    RADIO_BTN__ACTIVE,
    RADIO_BTN__PASSIVE,
} from './imgs';

export const theme = {
    cwrap: {
        core: {
            display: 'flex',
            fontFamily: 'system-ui',
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    radiobtn: {
        core: {},
        mobile: {},
        tablet: {},
        desktop: {},
    },
    radioicon: {
        core: {
            width: '16px',
            height: '16px',
            marginRight: '8px',
            backgroundSize: '16px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'transparent',
            backgroundImage: `url('${RADIO_BTN__PASSIVE}')`,
            borderRadius: '2px',
            overflow: 'hidden',

            '&.isActive': {
                backgroundImage: `url('${RADIO_BTN__ACTIVE}')`,
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
