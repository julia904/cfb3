import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

          {/* LOGO */}
          <div className="flex items-center">
  <img
    src="/logo.png"
    className="h-13 object-contain"
  />
</div>

          {/* MENU */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#inicio">Início</a>
            <a href="#coaches">Coaches</a>
            <a href="#horarios">Horários</a>
          </nav>

          {/* BOTÃO */}
          <div className="flex gap-3">

  <a
    href="#contato"
    className="border border-white px-4 py-2 rounded-full text-sm"
  >
    Contato
  </a>

  <a
  href="https://wa.me/5514997709326?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20CFB3"
  target="_blank"
  className="bg-[#9d172d] px-4 py-2 rounded-full text-sm"
>
  Consultar Planos
</a>

</div>

        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center text-center relative"
      >

        {/* IMAGEM DE FUNDO */}
        <div className="absolute inset-0">
          <img
            src="/t2b.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* CONTEÚDO */}
        <div className="z-10 px-6">

          <h1 className="text-4xl md:text-6xl font-bold italic mb-4">
            Supere seus <span className="text-[#9d172d]">Limites</span>
          </h1>

          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Muito mais que um box de Crossfit. Uma comunidade focada na sua melhor versão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* BOTÃO 1 */}
            <a
              href="#horarios"
              className="bg-[#9d172d] px-8 py-3 rounded font-bold"
            >
              Ver horários de aulas
            </a>

            {/* BOTÃO 2 */}
            <a
              href="#coaches"
              className="border border-white px-8 py-3 rounded"
            >
              Coaches
            </a>

          </div>
        </div>

      </section>

      {/* COACHES */}
      <section
  id="coaches"
  className="min-h-screen flex items-center justify-center bg-zinc-950 scroll-mt-20"
>
  <div className="text-center max-w-2xl px-6">

    <h2 className="text-3xl font-bold mb-6">Coaches</h2>

    <p className="text-gray-400 mb-8">
      Aqui, cada treino é uma oportunidade de evolução. Uma equipe dedicada a desenvolver força, confiança e a melhor versão de cada aluno.
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

      {/* RICARDO */}
      <div className="text-center">
        <img
          src="/RicardoCoach.png"
          alt="Ricardo Coach"
          className="w-40 h-40 object-cover rounded-xl mb-2"
        />
        <p className="font-semibold">Ricardo</p>
      </div>

      {/* CAROL */}
      <div className="text-center">
        <img
          src="/CarolCoach.png"
          alt="Carol Coach"
          className="w-40 h-40 object-cover rounded-xl mb-2"
        />
        <p className="font-semibold">Carol</p>
      </div>

    </div>

  </div>
</section>

      {/* HORÁRIOS */}
      <section
  id="horarios"
  className="min-h-screen flex justify-center bg-black text-white pb-20 scroll-mt-20"
>

  <div className="max-w-md w-full px-6 space-y-6 text-center">

    {/* TÍTULO */}
    <h2 className="text-2xl font-bold text-center">Horários de Aulas</h2>

    {/* SEGUNDA A SEXTA */}
    <div>
      <span className="text-xs font-bold uppercase text-red-500 bg-red-500/10 px-2 py-1 rounded">
        Segunda a Sexta
      </span>

      <div className="mt-4 space-y-3">

        {[
          { label: "Manhã", time: "06h às 07h" },
          { label: "Manhã", time: "07h às 08h" },
          { label: "Tarde", time: "12h às 13h" },
          { label: "Tarde", time: "17h30 às 18h30" },
          { label: "Noite", time: "18h30 às 19h30" },
          { label: "Noite", time: "19:30 às 20:30" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border-l-4 border-red-700 p-4 rounded-xl flex justify-between items-center"
          >
            <span className="text-gray-400">{item.label}</span>
            <span className="text-xl font-bold">
              {item.time.split("às")[0]}
              <span className="text-sm text-gray-500"> às </span>
              {item.time.split("às")[1]}
            </span>
          </div>
        ))}

      </div>
    </div>

    {/* SÁBADO */}
    <div className="bg-gradient-to-r from-red-600 to-red-700 p-[1px] rounded-xl">

  <div className="bg-black rounded-xl p-4 text-center">

    <h3 className="text-lg font-bold uppercase italic mb-1">
      Sábados
    </h3>

    <p className="text-gray-400 text-sm">
      Treinão às{" "}
      <span className="text-2xl font-bold text-white">
        09h
      </span>
    </p>

      </div>

    </div>

  </div>

</section>
<section
  id="contato"
  className="min-h-screen flex items-center justify-center bg-zinc-950 text-center px-6 scroll-mt-20"
>
  <div className="max-w-md">
<img
  src="/Cfb3Logo.png"
  alt="CFB3 Logo"
  className="w-16 mx-auto mb-4"
/>
    <h2 className="text-3xl font-bold mb-4">Contato</h2>

    <p className="text-gray-400 mb-6">
      A CFB3 nasceu para transformar vidas através do condicionamento físico extremo e do companheirismo. Junte-se!
    </p>

    <div className="flex justify-center gap-4">

      <a
        href="https://www.instagram.com/cfb_3?igsh=bXRwZjF4OXhtZXM2"
        target="_blank"
        className="bg-white/10 p-4 rounded-full hover:bg-[#9d172d] transition hover:scale-110"
      >
        <FaInstagram size={20} />
      </a>

      <a
        href="https://wa.me/5514997709326"
        target="_blank"
        className="bg-white/10 p-4 rounded-full hover:bg-[#9d172d] transition hover:scale-110"
      >
        <FaWhatsapp size={20} />
      </a>
      {/* GOOGLE MAPS */}
  <a
    href="https://maps.google.com/?q=R.+Wilson+Pedro+Speridião+3-142+Jardim+Vitória+Bauru+SP+17055-812"
    target="_blank"
    className="bg-white/10 p-4 rounded-full hover:bg-[#9d172d] transition hover:scale-110"
  >
    <FaLocationDot size={20} />
  </a>

    </div>

  </div>
</section>

    </main>
  );
}