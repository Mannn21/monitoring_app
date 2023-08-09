import styled from "./index.module.css";
import TasksMap from "@/components/Table";
import React from "react";

const List = () => {
    return (
        <div className={styled.container}>
            <table className={styled.table}>
                <thead className={styled.header}>
                    <tr className={styled.tr}>
                        <th className={styled.title}>Title</th>
                        <th className={styled.member}>Members</th>
                        <th className={styled.status}>Status</th>
                        <th className={styled.start}>Start Time</th>
                        <th className={styled.run}>Run Time</th>
                    </tr>
                </thead>
                <tbody className={styled.scrollableBody}>
                    <TasksMap />
                </tbody>
            </table>
        </div>
    );
};

export default List;
