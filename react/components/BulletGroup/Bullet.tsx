import React from 'react'
import { LinkProps } from './BulletType';
import { Link } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles'
import "./style.css"

type Props = {
  src : string,
  titleBullet : string,
  link : LinkProps
}

const Bullet = ({src, titleBullet, link}: Props) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--title",
    "bullet__item--image",
    "bullet__item--link"
  ]

  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div 
    className={handles.bullet__item}
    //className={handles["bullet__item"]} se puede colocar sin ninguna limitacion
    >
      <Link to={link.url} className={`${handles["bullet__item--link"]} extenalClass`}>
      <img className={handles["bullet__item--image"]} src={src} alt={titleBullet} />
      <p  className={handles["bullet__item--title"]} >{titleBullet}</p>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title : "Buller",
  type : "object",
  properties : {
    src : {
      title : "imagen de Bullet",
      type : "string",
      widget : {
        "ui:widget" : "image-uploader"
      }
    }
  }
}

export default Bullet;