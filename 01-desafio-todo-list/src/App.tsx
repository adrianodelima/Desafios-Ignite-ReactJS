import styles from './App.module.css';
import {Header} from './components/Header';
import {ToDoList} from './components/ToDoList';

import {ITask} from './components/Task';

import './global.css';

const tasks: ITask[] = [
  {
    id: 1,
    content: 'Levar o lixo.',
    concluded: false,
  },
  {
    id: 2,
    content: 'Estudar.',
    concluded: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <ToDoList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
