import { useWindowSize } from '../../hooks/useWindowSize';
import CloseSvg from '../../images/svg-images/CloseSvg';
import DotIconSVG from '../../images/svg-images/DotIconSvg';
import displayImage from '../../images/display.png';
import style from './top.module.css';
import ArrowSvg from '../../images/svg-images/ArrowSvg';

export default function TopBanner() {
    const { width } = useWindowSize();
    const isTablet = width <= 1000;
    const isMobile = width <= 768;

    return (
        <div className={style.container}>
            {isMobile ? null : <img className={style.image} src={displayImage} alt="presents" />}
            <div className={style.textContainer}>
                <p><span className={style.boldText}>Black Friday,</span>  {isTablet ? null : <> 24-27 Nov</>}</p>
                {isMobile ? null : <DotIconSVG />}
                <span className={style.subtext}>10%OFF</span>
                {isMobile ? null : <DotIconSVG />}
                {isMobile ? null : <>
                    <p>Use code <span className={style.subtext}>10FRIDAY</span> {isTablet ? null : ' at checkout'}</p>
                </>}
            </div>
            <div className={style.buttons}>
                {isMobile
                    ? <div className={style.pointer}><ArrowSvg /></div>
                    : <>
                        <button className={style.button}>Shop now</button>
                        {isTablet ? null : <div className={style.pointer}><CloseSvg /></div>}
                    </>
                }
            </div>
        </div>
    )
}
