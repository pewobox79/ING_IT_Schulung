import Header from "../components/Header"
import { PageTypes } from '../types/types';
import styles from '../styling/BasicPageLayout.module.css'

const BasicPageLayout = ({ children }:PageTypes) => {
    return (
        <div id="wrapper" className={styles.wrapperLayout}>
            <Header />
            {children}
        </div>
    )
}

export default BasicPageLayout