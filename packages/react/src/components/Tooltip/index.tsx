import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ContainerTooltip, TooltipRadixContent } from './styles'

export interface TooltipProps {}
export function Tooltip() {
  return (
    <ContainerTooltip>
      <TooltipRadix.Provider>
        <TooltipRadix.Root>
          <TooltipRadix.Trigger asChild>
            <button className="IconButton">Teste</button>
          </TooltipRadix.Trigger>
          <TooltipRadix.Portal>
            <TooltipRadixContent sideOffset={5}>
              Adicionar a biblioteca
              <TooltipRadix.Arrow className="TooltipArrow" />
            </TooltipRadixContent>
          </TooltipRadix.Portal>
        </TooltipRadix.Root>
      </TooltipRadix.Provider>
    </ContainerTooltip>
  )
}
