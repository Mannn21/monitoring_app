import styled from "./index.module.css"

const Activity = () => {
    return (
        <div className={styled.container}>
            <div className={styled.now}>
                <h4 className={styled.header}>Now</h4>
                <span className={styled.title}>Bahasa Indonesia</span>
                <span className={styled.time}>09:00 - 11:00</span>
            </div>
            <div className={styled.waiting}>
                <h4 className={styled.header}>Waiting</h4>
                <span className={styled.title}>Fisika</span>
                <span className={styled.time}>12:00 - 14:00</span>
            </div>
        </div>
    )
}

export default Activity