import { useState } from "react"
import { useEffect } from "react"
import { calcPercentage } from "../utilis"

const TaskPercentage = ({returnQuantify, idTask, total, totalDone, returnQuantifyDone}) => {

    useEffect(() => {
        returnQuantify()
        returnQuantifyDone()

    },[idTask])

    const totalQuantify = total.filter(x => x?.idTask === idTask).map(x => x?.totalSubtasks)[0]
    const totalQuantifyDone = totalDone.filter(x => x?.idTask === idTask).map(x => x?.totalSubtasksDone)[0] || 0

    return (
        <span> {calcPercentage(totalQuantifyDone, totalQuantify)|| 0}% concluído</span>
    )
}

export default TaskPercentage