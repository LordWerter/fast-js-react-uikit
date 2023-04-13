export const theme = {
    CWrap: {
        core: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            fontFamily: 'system-ui',
            fontSize: '14px',
            fontWeight: 400,
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    CurOption: {
        core: {
            padding: '0 24px 0 18px',
            textAlign: 'left',
            lineHeight: '42px',
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    ToggleBtn: {
        core: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '24px',
            height: '100%',
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    OptionsWrap: {
        core: {
            display: 'none',
            flexDirection: 'column',
            position: 'absolute',
            top: '42px',
            left: 0,
            right: 0,

            '&.isVisible': {
                display: 'flex',
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    OptionBtn: {
        CWrap: {
            core: {
                width: '100%',
                fontFamily: 'system-ui',
                fontSize: '14px',
                fontWeight: 400,
                textAlign: 'left',
                borderRadius: 0,
                padding: '0 18px',
                margin: 0,
            },
            mobile: {},
            tablet: {},
            desktop: {},
        },
    },
};

export default theme;
