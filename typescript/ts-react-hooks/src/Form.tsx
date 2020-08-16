import React, { forwardRef } from 'react'

const Form: React.FC = (props, ref) => {
  function submit() {
    alert('Submit')
  }

  return (
    <form action="">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  )
}

export default forwardRef(Form);