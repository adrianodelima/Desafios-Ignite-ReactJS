import {Header} from './components/Header';
import {Post, PostType} from './components/Post';
import {Sidebar} from './components/Sidebar';
import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/adrianodelima.png',
      name: 'Adriano de Lima Pereira',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Tranquilo galera?'},
      {
        type: 'paragraph',
        content:
          'Mais um projeto pro meu portifólio. É um projeto que fiz no curso Ignite da Rocketseat, onde aprofundei e consolidei diversos fundamentos do React 🚀.',
      },
      {
        type: 'link',
        url: 'https://github.com/adrianodelima',
        content: 'Confira no GitHub',
      },
    ],
    publishedAt: new Date('2023-02-28 18:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.',
      },
      {
        type: 'link',
        url: 'janedesign/doctorcare',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-02-10 18:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
