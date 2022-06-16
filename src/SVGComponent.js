import { useState } from 'react';
import {ReactComponent as Dog } from './angrybulldog.svg'
import { ReactComponent as ReactLogo } from "./logo.svg";
export default function SVGComponent({part, style, click}) {
  const [toggled, setToggled] = useState(false)

  const parts = {
    'dog': Dog,
    'logo': ReactLogo,
  }

  const clickHandler = (ev) => {
    setToggled(!toggled)
  }

  const Component = parts[part]
  return <Component style={{...style, stroke: toggled ? 'red' : style?.stroke ?? 'black'}} onClick={click ?? clickHandler}/>
}