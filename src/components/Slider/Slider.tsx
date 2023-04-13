import React from 'react';

import { CWrap } from './Slider.styles';

export interface IProps {
    config?: any;
    data: any;
    lang?: any;
}

export const Slider: React.FC<IProps> = (props): JSX.Element => {
    const { data = null, config = null, lang = 'ru' } = props;
    console.log(config, data, lang);

    return <CWrap>Slider</CWrap>;
};

export default Slider;
