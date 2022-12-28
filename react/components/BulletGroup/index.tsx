import React, { PropsWithChildren } from 'react'
import { BulletsSchema } from './BulletType'
import { useDevice } from 'vtex.device-detector';
import {  useListContext, ListContextProvider } from "vtex.list-context"
//import PropTypes from 'prop-types';
import { getBulletsAsTSXList } from './modules/bulletsAsList';
import { useCssHandles } from 'vtex.css-handles'
import "./style.css"

export interface BulletGroupProps {
  bullets: BulletsSchema
}


const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const {isMobile} = useDevice()
  const {list} = useListContext() || []
  const bulletsContent = getBulletsAsTSXList(bullets)
  const newListContextValue = list.concat(bulletsContent)

  const CSS_HANDLES = ["bullet__container"]
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <ListContextProvider list={newListContextValue}>
      {isMobile
      ?
        <div className={handles.bullet__container} >{bulletsContent}</div>
      :
      children
    }
    </ListContextProvider >
  )
}

// BulletGroup.propTypes = {
//   bullets: PropTypes.array,
//   children: PropTypes.element,
// }

// BulletGroup.defaultProps = {
//   bullets: [{
//     image: "",
//     titleBullet: ""
//   }],
// }

export default BulletGroup