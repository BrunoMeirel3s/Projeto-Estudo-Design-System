import { useState } from 'react'
import { ToastContainer } from './styles'
import * as Toast from '@radix-ui/react-toast'

export interface ToastProps {}
export function ToastIgnite() {
  const [open, setOpen] = useState(false)

  return (
    <ToastContainer>
      <Toast.Provider swipeDirection="right">
        <button
          onClick={() => {
            setOpen(true)
          }}
        >
          Abrir modal
        </button>
        <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
          <Toast.Title className="ToastTitle">
            Agendamento realizado
          </Toast.Title>
          <Toast.Description asChild>
            <span className="ToastDescription">
              Quarta-feira, 23 de Outubro às 16h
            </span>
          </Toast.Description>
          <Toast.Action
            className="ToastAction"
            asChild
            altText="Goto schedule to undo"
          >
            <button className="Button small green">Undo</button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </ToastContainer>
  )
}
