import { readFileSync } from 'fs'
import React from 'react'
import styles from '../../styles/LAyout.module.css'

const MainLayout = ({children}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default MainLayout