import React from 'react';
import './task.css';

const Task = ({ taskObj, onComplete }) => {
  return (
    <div className="task rounded-md bg-white leading-normal mt-4 shadow-[0_4px_5px_0_rgba(0,0,0,0.1)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span>{taskObj.deadline}</span>
      </div>
      <p className="">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
