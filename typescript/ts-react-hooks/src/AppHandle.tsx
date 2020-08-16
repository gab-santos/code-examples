import React, { useRef, useImperativeHandle } from 'react';

import Form from './Form'

const AppHandle: React.FC = () => {
  const formRef = useRef(null);
  return (
    <Form ref={formRef} />
  );
}
