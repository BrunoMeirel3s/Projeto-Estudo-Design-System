import { styled } from '../../styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'
export const ContainerTooltip = styled('div', {
  button: {
    all: 'unset',
  },
  '.IconButton': {
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: '35px',
    width: '35px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--violet11)',
    backgroundColor: 'white',
    'box-shadow': '0 2px 10px var(--blackA7)',
  },
  '.IconButton:focus': {
    boxShadow: '0 0 0 2px black',
  },

  '@keyframes slideUpAndFade': {
    from: {
      opacity: '0',
      transform: 'translateY(2px)',
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },

  '@keyframes slideRightAndFade': {
    from: {
      opacity: '0',
      transform: 'translateX(-2px)',
    },
    to: {
      opacity: '1',
      transform: 'translateX(0)',
    },
  },

  '@keyframes slideDownAndFade': {
    from: {
      opacity: '0',
      transform: 'translateY(-2px)',
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },

  '@keyframes slideLeftAndFade': {
    from: {
      opacity: '0',
      transform: 'translateX(2px)',
    },
    to: {
      opacity: '1',
      transform: 'translateX(0)',
    },
  },
})

export const TooltipRadixContent = styled(TooltipRadix.Content, {
  borderRadius: '4px',
  padding: '10px 15px',
  fontSize: '15px',
  lineHeight: '1',
  color: '$gray200',
  backgroundColor: '$gray600',
  'box-shadow':
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  'user-select': 'none',
  'animation-duration': '400ms',
  'animation-timing-function': 'cubic-bezier(0.16, 1, 0.3, 1)',
  'will-change': 'transform, opacity',

  '&[data-state="delayed-open"][data-side="top"]': {
    'animation-name': 'slideDownAndFade',
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    'animation-name': 'slideLeftAndFade',
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    'animation-name': 'slideUpAndFade',
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    'animation-name': 'slideRightAndFade',
  },

  '.TooltipArrow': {
    fill: '$gray700',
  },
})
