import {
    ICON__MINUS,
    ICON__PLUS,
} from './imgs';

export const theme = {
    CWrap: {
        core: {
            fontFamily: 'system-ui',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',

            position: 'relative',
            width: '72px',
            height: '36px',
            border: '0px',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 0px 4px inset rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.4)',
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    Btn: {
        core: {
            display: 'flex',
            position: 'absolute',
            top: 0,
            bottom: 0,
            zIndex: 1,
            width: '22px',
            height: '100%',
            overflow: 'hidden',
            backgroundSize: '10px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000',


            boxShadow: '0 0px 3px rgb(0 0 0 / 80%)',
            border: 'none',

            '&.isIncrement': {
                right: 0,
                backgroundImage: `url('${ICON__PLUS}')`,
            },
            '&.isDecrement': {
                left: 0,
                backgroundImage: `url('${ICON__MINUS}')`,
            },
            '&.isDisabled': {
                backgroundColor: '#CCC',
                boxShadow: '0 0px 2px inset rgba(0, 0, 0, 0.2)',
            }
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    Value: {
        core: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 0,
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            padding: '0 28px',
            overflow: 'hidden',


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
