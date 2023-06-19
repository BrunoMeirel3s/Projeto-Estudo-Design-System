import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ContainerTooltip } from './styles'

export function Ignite() {
  return (
    <ContainerTooltip>
      <TooltipRadix.Provider>
        <TooltipRadix.Root>
          <TooltipRadix.Trigger asChild>
            <button className="IconButton">Teste</button>
          </TooltipRadix.Trigger>
          <TooltipRadix.Portal>
            <TooltipRadix.Content className="TooltipContent" sideOffset={5}>
              Adicionar a biblioteca
            </TooltipRadix.Content>
          </TooltipRadix.Portal>
        </TooltipRadix.Root>
      </TooltipRadix.Provider>
    </ContainerTooltip>
  )
}
