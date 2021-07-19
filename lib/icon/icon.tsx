import React from 'react'
import './importIcons'
import './icon.scss'
interface IconProps {
  name:string
}

const Icon:React.FunctionComponent<IconProps> = (props)=>{
  return(
      <svg className='react-ui-icon'>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  )
}
export default Icon