import { PropsGET, PropsItens } from "@/hooks/useSatisfactionSurvey";
import { CustomInputs } from "../form/CustomInputs";
import { Dispatch, SetStateAction } from "react";

interface Props {
	data: PropsGET
	setData: Dispatch<SetStateAction<PropsGET>>
	handleSendPost:any
}

export function CardBase({ data,setData,handleSendPost}: Props) {
	return (
		<div className="flex items-center flex-col px-4">
			<div className="w-full max-w-[648px]">
				<h1 className=" text-white font-semibold text-[40px] mb-6">Pesquisa de satisfação</h1>
				<form className="bg-white rounded-2xl p-8 flex flex-col gap-10"
					onSubmit={handleSendPost}
				>
					{data == null ?
						<div className="flex flex-col items-center justify-center gap-2">
							<div className="h-10 w-10 border-yellow-500 border-t-transparent border-4 rounded-full animate-spin"/>
							<p>Carregando ...</p>
						</div>
						:
						<>
						{data.itens.map((item, index) =>
							<CustomInputs 
								key={index} index={index}
								primaryTitle="Primeiro Titulo"
								secondaryTitle="Secundario Titulo"
								type={item.typeQuestion} 
								data={item} setData={setData}
							/>
						)}
						<button >Enviar</button>
						</>
					}
				</form>
			</div>
		</div>
	)
}