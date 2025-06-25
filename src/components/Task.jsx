import React from 'react';
import './task.css';

const Task = ({ taskObj, onComplete }) => {
  return (
    <div className="task rounded-md bg-white leading-normal mt-4 shadow-[0_4px_5px_0_rgba(0,0,0,0.1)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline text-xs pt-1">
        son teslim: <span className="px-2 py-1 rounded-sm inline-block">{taskObj.deadline}</span>
      </div>
      <p className="pt-2 pb-3 px-0 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-md rounded-sm border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
