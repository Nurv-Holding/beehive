import { useState } from "react"
import { useEffect } from "react"


const TaskPercentage = ({returnQuantify, idTask, total}) => {


    useEffect(() => {
        returnQuantify()

    },[idTask])

    return (
        <span> {JSON.stringify(total)} 50% concluído</span>
    )
}

export default TaskPercentage