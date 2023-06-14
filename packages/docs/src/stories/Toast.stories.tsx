import type { StoryObj, Meta } from '@storybook/react'
import { ToastIgnite as Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {},
  onClick: {
    action: 'click',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}
