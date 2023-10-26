import React from 'react'
import styles from "./Form.module.css"
import Button from '../Button/Button'
import { BsChatLeftDotsFill } from "react-icons/bs"
import { PiPhoneCallFill } from 'react-icons/pi'
import { HiMailOpen } from 'react-icons/hi'

const Form = () => {
    return (
        <section className={`${styles.container}`}>
            <div className={`${styles.form}`}>
                <div className={`${styles.top_btn}`}>
                    <Button
                        text='Via Support Chat'
                        icon={<BsChatLeftDotsFill size={24} />}
                    />
                    <Button
                        text='Via Call'
                        icon={<PiPhoneCallFill size={24} />}
                    />
                </div>
                <Button
                    isSecBtn={true}
                    text='Via Email Form'
                    icon={<HiMailOpen size={24} />}
                />
            </div>
            <div className={`${styles.image}`}></div>
        </section>
    )
}

export default Form