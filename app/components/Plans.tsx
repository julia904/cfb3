'use client'
export default function Plans() {
  return (
    <section
  id="planos"
  className="bg-[#0a0a0a] text-white py-20 px-6"
>
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-[#A91D31] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Nossos Planos
          </h2>
          <div className="w-20 h-1 bg-[#A91D31] mx-auto"></div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* MENSAL */}
          <div className="bg-[#161616] border border-gray-800 rounded-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-6 text-gray-300">
              Mensal
            </h3>

            <div className="mb-6">
              <span className="text-4xl font-extrabold">R$ 245</span>
              <span className="text-gray-500 block text-sm mt-2">
                Valor mensal
              </span>
            </div>

            <a
              href="https://wa.me/5514997709326?text=Oi!%20Me%20interessei%20pelo%20plano%20mensal%20da%20CFB3.%20Como%20faço%20para%20começar?"
              target="_blank"
              className="w-full py-2.5 rounded-full border border-[#A91D31] text-[#A91D31] font-bold hover:bg-[#A91D31] hover:text-white transition uppercase text-xs tracking-widest"
            >
              Selecionar
            </a>
          </div>

          {/* SEMESTRAL */}
          <div className="bg-[#1c1c1c] border-2 border-[#A91D31] rounded-lg p-7 flex flex-col items-center text-center relative shadow-xl shadow-red-900/20 md:scale-110">

            <div className="absolute -top-3 bg-[#A91D31] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
              Recomendado
            </div>

            <h3 className="text-2xl font-bold mb-6">
              Semestral
            </h3>

            <div className="mb-6">
              <span className="text-5xl font-black text-[#A91D31]">
                R$ 200
              </span>
              <span className="text-gray-400 block text-sm mt-2">
                Valor mensal
              </span>
            </div>

            <a
              href="https://wa.me/5514997709326?text=Oi!%20Me%20interessei%20pelo%20plano%20semestral%20da%20CFB3.%20Como%20faço%20para%20começar?"
              target="_blank"
              className="w-full py-2.5 rounded-full bg-[#A91D31] text-white font-black hover:bg-[#8a1728] transition uppercase tracking-widest text-sm"
            >
              Selecionar
            </a>
          </div>

          {/* TRIMESTRAL */}
          <div className="bg-[#161616] border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-6 text-gray-300">
              Trimestral
            </h3>

            <div className="mb-6">
              <span className="text-4xl font-extrabold">R$ 225</span>
              <span className="text-gray-500 block text-sm mt-2">
                Valor mensal
              </span>
            </div>

            <a
              href="https://wa.me/5514997709326?text=Oi!%20Me%20interessei%20pelo%20plano%20trimestral%20da%20CFB3.%20Como%20faço%20para%20começar?"
              target="_blank"
              className="w-full py-2.5 rounded-full border border-[#A91D31] text-[#A91D31] font-bold hover:bg-[#A91D31] hover:text-white transition uppercase text-xs tracking-widest"
            >
              Selecionar
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}