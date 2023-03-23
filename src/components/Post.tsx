import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar'
import {Comment} from './Comment'

import style from './Post.module.css'

export function Post ({author, publishedAt, content}) {
  const [comment, setComment] = useState([
    'Post muito bacana em?!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted= format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

  function handleCreateNewComment() {
    event.preventDefault()

    setComment([...comment, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange () {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment (commentToDelete) {
    const commentsWithoutDeleteOne = comment.filter(comment => {
      return comment !== commentToDelete
    })

    setComment(commentsWithoutDeleteOne)
  }

  function handleNewCommentInvalid () {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={style.Post}>
      <header>
        <div className={style.author}>
          <Avatar author= {author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={style.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment' 
          onChange={handleNewCommentChange} 
          value={newCommentText} 
          placeholder='Deixe um comentário'
          required
          onInvalid={handleNewCommentInvalid} />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comment.map(comment => {
          return <Comment key={comment} content= {comment} onDeleteComment= {deleteComment} />
        } )}
      </div>

    </article>
  )
}