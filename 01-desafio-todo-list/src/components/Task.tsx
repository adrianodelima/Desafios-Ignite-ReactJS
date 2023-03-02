import {Trash} from 'phosphor-react';
import styles from './Task.module.css';

export interface ITask {
  id: number;
  content: string;
  concluded: boolean;
}

interface TaskProps extends ITask {
  onDeleteTask: (taskId: number) => void;
  onToggleStatusTask: (taskId: number) => void;
}

export function Task({
  content,
  concluded,
  id,
  onDeleteTask,
  onToggleStatusTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }
  function handleToggleStatusTask() {
    onToggleStatusTask(id);
  }

  return (
    <div
      key={id}
      className={styles.task}
    >
      <input
        checked={concluded}
        onChange={handleToggleStatusTask}
        type="checkbox"
      />
      <span>{content}</span>
      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
