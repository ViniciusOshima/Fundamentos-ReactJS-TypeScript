import style from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean;
  author: string;
  alt?: string
}

export function Avatar ({hasBorder = true, author}:AvatarProps) {
  return (
    <img className={hasBorder ? style.avatarWithBorder : style.avatar} src={author}/>
  )
}