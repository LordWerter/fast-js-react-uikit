export const theme = {
    cwrap: {
        core: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'system-ui',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '18px',
            color: '#737373',
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    curnum: {
        core: {
            paddingRight: '2px',

            '&.isInvalid': {
                color: '#e91e63',
                fontSize: '18px',
                fontWeight: 600,
            },
            '&.isWarning': {
                color: '#ffb700',
                fontSize: '16px',
                fontWeight: 600,
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    maxnum: {
        core: {
            paddingLeft: '2px',
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
};

export default theme;
