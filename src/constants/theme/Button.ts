export const theme = {
    cwrap: {
        core: {
            fontFamily: 'system-ui',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '48px',
            color: '#FFF',
            padding: '0px 16px',
            backgroundColor: '#008eff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
            border: 'none',
            borderRadius: '12px',

            '&:hover': {
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4), 0 0px 4px inset rgba(255, 255, 255, 0.2)',
                backgroundColor: '#0c93ff',
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
};

export default theme;
