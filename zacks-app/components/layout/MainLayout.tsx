import { readFileSync } from 'fs'
import React from 'react'
import styles from '../../styles/Layout.module.css'

const MainLayout = ({children}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>
                    Hello there, folks!
                </h1>
                {children}
            </main>
        </div>
    )
}

export default MainLayout