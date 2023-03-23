import {Header} from './components/header'
import {Post} from './components/Post'
import {Sidebar} from './components/sidebar'

import style from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ViniciusOshima.png',
      name: 'Vinícius Oshima',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: ' Fala galeraa 👋 '},
      {type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: 'jane.design/doctorcare'}
    ], 
    publishedAt: new Date('2023-02-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/RafaelOshima.png',
      name: 'Rafael Oshima',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: ' Fala galeraa 👋 '},
      {type: 'paragraph', content: ' lorem agua uma substancia essencial para vida humana é um bem comum para muitas pessoas mas para outras não 🚀 '},
      {type: 'link', content: 'jane.design/doctorcare'}
    ], 
    publishedAt: new Date('2023-02-10 20:00:00')
  },

]

  export function App() {
    return (
      <div>
        <Header />

        <div className={style.wrapper}>
          <Sidebar />

          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author= {post.author}
                  content= {post.content}
                  publishedAt= {post.publishedAt} 
                />
              )
            })}
          </main>
        </div>
      </div>
        
    )
  }
