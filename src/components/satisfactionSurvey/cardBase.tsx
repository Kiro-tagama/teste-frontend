export function CardBase({data}:any) {
  console.log(data);
  
  return(
    <div className="flex items-center flex-col">
      <div className="w-full max-w-[648px]">
      <h1 className=" text-white font-semibold text-[40px] mb-6">Pesquisa de satisfação</h1>
      <div className="bg-white rounded-2xl p-8">
        {[0,0,0,0,0,0].map((item, index) => 
          <div key={index}>
            <p>{item}</p>
          </div>
        )}
        <br />
        <button>Enviar</button>
      </div>
      </div>
    </div>
  )
}