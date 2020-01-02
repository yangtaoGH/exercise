import React from "react";
import direcStyles from './Direc.module.scss';
import logo from 'asset/imgs/yay.jpg';

const Direc = () => {
    return (
        <ul className={direcStyles.box}>
            {/* 旋转的角度，顺时针为正角度 */}
            {/* 内部6个 */}
            <li className={`${direcStyles.inRight} ${direcStyles.inner}`}>1</li>
            <li className={`${direcStyles.inLeft} ${direcStyles.inner}`}>2</li>
            <li className={`${direcStyles.inTop} ${direcStyles.inner}`}>3</li>
            <li className={`${direcStyles.inBottom} ${direcStyles.inner}`}>4</li>
            <li className={`${direcStyles.inFront} ${direcStyles.inner}`}>5</li>
            <li className={`${direcStyles.inBack} ${direcStyles.inner}`}>6</li>

            {/* 外面6个 */}
            <li className={`${direcStyles.outRight} ${direcStyles.outer}`}>
                <img src={logo} alt=""/>
            </li>
            <li className={`${direcStyles.outLeft} ${direcStyles.outer}`}>
                <img src={logo} alt=""/>
            </li>
            <li className={`${direcStyles.outTop} ${direcStyles.outer}`}>
                <img src={logo} alt=""/>
            </li>
            <li className={`${direcStyles.outBottom} ${direcStyles.outer}`}>
                <img src={logo} alt=""/>
            </li>
            <li className={`${direcStyles.outFront} ${direcStyles.outer}`}>
                <img src={logo} alt=""/>
            </li>
            <li className={`${direcStyles.outBack} ${direcStyles.outer}`}>
                <img src={logo} alt=""/>
            </li>
        </ul>
    )
}

export default Direc;