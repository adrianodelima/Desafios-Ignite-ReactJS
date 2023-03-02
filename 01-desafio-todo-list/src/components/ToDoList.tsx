import {PlusCircle} from 'phosphor-react';
import styles from './ToDoList.module.css';
import clipboardImage from '../assets/clipboard.svg';
import {Task} from './Task';

import {ITask} from './Task';
import {ChangeEvent, FormEvent, InvalidEvent, useEffect, useState} from 'react';

interface TaskListProps {
  tasks: ITask[];
}

export function ToDoList(taskList: TaskListProps) {
  const [createdTaskList, setCreatedTaskList] = useState(taskList.tasks);
  const [newCreatedTaskText, setNewCreatedTaskText] = useState('');
  const [concludedTaskNumber, setConcludedTaskNumber] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newCreatedTask = {
      content: newCreatedTaskText,
      concluded: false,
      id:
        createdTaskList.length > 0
          ? createdTaskList[createdTaskList.length - 1].id + 1
          : 1,
    };

    setCreatedTaskList([...createdTaskList, newCreatedTask]);
    setNewCreatedTaskText('');
  }

  function handleNewCreatedTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewCreatedTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTask(taskToDeleteId: number) {
    const tasksWithoutDeletedOne = createdTaskList.filter((task) => {
      return task.id !== taskToDeleteId;
    });

    setCreatedTaskList(tasksWithoutDeletedOne);
  }

  function toggleStatusTask(taskToConcludeId: number) {
    let taskListWithChangedStatusTask = createdTaskList;
    const indexChangedStatusTask = taskListWithChangedStatusTask.findIndex(
      (task) => task.id === taskToConcludeId
    );
    taskListWithChangedStatusTask[indexChangedStatusTask].concluded =
      !taskListWithChangedStatusTask[indexChangedStatusTask].concluded;

    setCreatedTaskList([...taskListWithChangedStatusTask]);
  }

  useEffect(() => {
    const concludedTasks = createdTaskList.filter((task) => {
      return task.concluded === true;
    });

    setConcludedTaskNumber(concludedTasks.length);
  });

  const isNewTaskEmpty = newCreatedTaskText.length === 0;
  const totalNumberTasks = createdTaskList.length;

  return (
    <div className={styles.toDoList}>
      <form onSubmit={handleCreateNewTask}>
        <div className={styles.insertNewTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newCreatedTaskText}
            onChange={handleNewCreatedTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button
            type="submit"
            disabled={isNewTaskEmpty}
          >
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </div>
      </form>

      <div className={styles.listContent}>
        <header>
          <div className={styles.createdTaskNumber}>
            Tarefas criadas
            <span>{totalNumberTasks}</span>
          </div>

          <div className={styles.concludedTaskNumber}>
            Concluídas
            {totalNumberTasks > 0 ? (
              <span>
                {concludedTaskNumber} de {totalNumberTasks}
              </span>
            ) : (
              <span>0</span>
            )}
          </div>
        </header>
        {totalNumberTasks > 0 ? (
          <div className={styles.taskList}>
            {createdTaskList.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  concluded={task.concluded}
                  onDeleteTask={deleteTask}
                  onToggleStatusTask={toggleStatusTask}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.noTaskRegistered}>
            <img
              height={56}
              width={56}
              src={clipboardImage}
            />
            <div>
              <span>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
