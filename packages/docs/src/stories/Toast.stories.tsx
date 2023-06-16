import type { StoryObj, Meta } from '@storybook/react'
import { Button, ToastIgnite as Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <Button variant="primary">Abrir modal</Button>
          {Story()}
        </>
      )
    },
  ],
  onClick: {
    action: 'click',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Segunda-feira, 19 de Junho às 17h',
  },
}
