import React from 'react';
import MyButton from "./UI/button/MyButton";

const TaskItem = (props) => {
    return (
            <div className="Task">
                <div className="Task_content">
                    <strong>{props.number}. {props.task.title}</strong>
                    <div>
                        {props.task.body}
                    </div>
                </div>
                <div>
                    <MyButton onClick={() => props.remove(props.task)}>удалить</MyButton>
                </div>
            </div>
    );
};

export default TaskItem;
