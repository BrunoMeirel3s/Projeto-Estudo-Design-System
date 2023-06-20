import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return <>{Story()}</>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}
