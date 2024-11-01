import { RADIO_Btn__ACTIVE, RADIO_Btn__PASSIVE } from './imgs';

export const theme = {
    CWrap: {
        core: {
            display: 'flex',
            fontFamily: 'system-ui',
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    radioBtn: {
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
            backgroundImage: `url('${RADIO_Btn__PASSIVE}')`,
            borderRadius: '2px',
            overflow: 'hidden',

            '&.isActive': {
                backgroundImage: `url('${RADIO_Btn__ACTIVE}')`,
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    Label: {
        core: {},
        mobile: {},
        tablet: {},
        desktop: {},
    },
};

export default theme;
