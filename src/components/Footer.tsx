import { RocketseatLogo } from "./RocketseatLogo";

export function Footer(){
  return(
    <div className="p-8 border-t-[1px] border-gray-600 flex items-center justify-between">
    <p className="flex items-center gap-4 text-base text-gray-300">
      <RocketseatLogo /> Rocketseat - Todos os direitos reservados
    </p>
    <span className="text-base text-gray-300">
      Políticas de privacidade
    </span>
  </div>
  )
}