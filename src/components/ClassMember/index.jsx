import styled from "./index.module.css"

const ClassMember = () => {
    return (
        <div className={styled.container}>
            <h4 className={styled.header}>Todays Tasks</h4>
            <div className={styled.taskWrapper}>
                <div className={styled.tasks}>
                    <span className={styled.total}>10</span>
                    <span className={styled.task}>All Tasks</span>
                </div>
                <div className={styled.tasks}>
                    <span className={styled.total}>3</span>
                    <span className={styled.task}>Done</span>
                </div>
            </div>
        </div>
    )
}

export default ClassMember