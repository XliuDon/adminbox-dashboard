import React from 'react'
import {Toast} from '@syncfusion/ej2-notifications'
import { useStateContext } from '../contexts/ContextProvider';

function Notification() {
  const { currentColor } = useStateContext();

  const toast = new Toast({
    title:'Notification',
    content: 'This is a notification',
    timeOut: 3000,
    showCloseButton: true,
    position: { X: "Right", Y: "Bottom" }
  });
  toast.appendTo("#notification");
  toast.show();
  return (
    <div />
  )
}

export default Notification