import React from 'react'

const Button2 = ({onClick, text}) => {
     return (
          <button className='
          bg-brand 
          text-white 
          p-2
          font-semibold 
          transition duration-500
          hover:brightness-150 text-sm
          'onClick={onClick}>{text}</button>
     )
}

export default Button2