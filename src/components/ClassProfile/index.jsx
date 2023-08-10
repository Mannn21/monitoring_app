import styled from "./index.module.css"

const ClassProfile = () => {
    return (
        <div className={styled.container}>
            <h3 className={styled.header}>Class XII</h3>
            <h4 className={styled.class}>MIPA 2</h4>
            <span className={styled.leader}>(Steven Januar)</span>
        </div>
    )
}

export default ClassProfile