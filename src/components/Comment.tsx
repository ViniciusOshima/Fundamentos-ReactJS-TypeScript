import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import style from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment:string) => void
}

export function Comment ({content, onDeleteComment}:CommentProps) {
  const [likeCount, setLikecount] = useState(0)

  function handleDeleteComment () {
    onDeleteComment(content)
  }

  function handleLikeCount () {
    setLikecount(likeCount + 1)
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} author="https://github.com/ViniciusOshima.png" alt="" />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='15 de março às 17:22h'>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}