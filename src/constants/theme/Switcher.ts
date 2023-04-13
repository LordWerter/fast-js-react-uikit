export const theme = {
    CWrap: {
        core: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'auto',

            '&.isOn': {
                color: '#e91e63',
                fontSize: '18px',
                fontWeight: 600,
            },
            '&.isOff': {
                color: '#ffb700',
                fontSize: '16px',
                fontWeight: 600,
            },
            '&.isDisabled': {
                color: '#ffb700',
                fontSize: '16px',
                fontWeight: 600,
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    track: {
        core: {
            position: 'relative',
            width: '150px',
            height: '48px',
            borderRadius: '24px',
            border: '2px solid',
            borderColor: 'yellow',
            backgroundColor: '#ccc',
            boxSizing: 'border-box',
            overflow: 'hidden',

            '&.isOn': {
                borderColor: 'green',
            },
            '&.isOff': {
                borderColor: 'red',
            },
            '&.isDisabled': {
                borderColor: 'grey',
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    roller: {
        core: {
            position: 'absolute',
            top: '-1px',
            bottom: '-1px',
            borderRadius: '24px',
            width: '48px',
            height: '48px',
            border: 'none',
            boxSizing: 'border-box',

            '&.isOn': {
                backgroundColor: 'green',
                right: '-1px',
            },
            '&.isOff': {
                backgroundColor: 'red',
                left: '-1px',
            },
            '&.isDisabled': {
                backgroundColor: 'grey',
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    leftLabel: {
        core: {
            display: 'flex',
            alignItems: 'center',
            padding: '8px',

            '&.isOn': {
                color: '#CCC',
                fontSize: '18px',
                fontWeight: 600,
            },
            '&.isOff': {
                color: '#ffb700',
                fontSize: '16px',
                fontWeight: 600,
            },
            '&.isDisabled': {
                color: '#ffb700',
                fontSize: '16px',
                fontWeight: 600,
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
    rightLabel: {
        core: {
            display: 'flex',
            alignItems: 'center',
            padding: '8px',

            '&.isOn': {
                color: 'green',
                fontSize: '18px',
                fontWeight: 600,
            },
            '&.isOff': {
                color: '#ffb700',
                fontSize: '16px',
                fontWeight: 600,
            },
            '&.isDisabled': {
                color: '#ffb700',
                fontSize: '16px',
                fontWeight: 600,
            },
        },
        mobile: {},
        tablet: {},
        desktop: {},
    },
};

export default theme;
