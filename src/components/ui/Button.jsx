import React from 'react'

const Button = ({onClick, text}) => {
     return (
          <button className='
          bg-white 
          text-brand 
          p-2
          font-semibold 
          transition duration-500
          hover:bg-brand
          hover:text-white
          'onClick={onClick}>{text}</button>
     )
}

export default Button