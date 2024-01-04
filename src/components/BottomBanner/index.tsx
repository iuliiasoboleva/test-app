import { useWindowSize } from '../../hooks/useWindowSize';
import CloseSvg from '../../images/svg-images/CloseSvg';
import style from './bottom.module.css';

export default function TopBanner() {
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    return (
        <div className={style.container}>
                <div className={style.textContainer}>
            <div className={style.close}><CloseSvg /></div>
                <p className={style.title}>Black Friday</p>
                <span className={style.subtitle}>10%OFF</span>
                <p className={style.text}>Use code <span>10FRIDAY</span> at checkout</p>
            <button className={style.button}>Shop now {isMobile ? null : 'through Monday'}</button>
            </div>
        </div>
    )
}
