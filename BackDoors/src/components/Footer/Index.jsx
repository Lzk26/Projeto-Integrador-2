import './Footer.css';

export default function Footer() {
    return (
      <footer className="relative w-full bg-gradient-to-t from-[#1a0033] to-[#3a0ca3] text-white py-12 px-8 md:px-20 overflow-hidden">
  
        {/* Efeito de fundo pixelado */}
        <div className="absolute inset-0 bg-[url('/src/assets/footer-bg.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>
  
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
  
          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Seguir a Trapdoor</h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <a href="#" className="hover:text-purple-300 transition-colors"></a>
              <a href="#" className="hover:text-purple-300 transition-colors"></a>
              <a href="#" className="hover:text-purple-300 transition-colors"></a>
              <a href="#" className="hover:text-purple-300 transition-colors"></a>
              <a href="#" className="hover:text-purple-300 transition-colors"></a>
              <a href="#" className="hover:text-purple-300 transition-colors"></a>
            </div>
          </div>
  
          {/* Institucional */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Seu jogo na Trapdoor</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Segurança</a></li>
            </ul>
          </div>
  
          {/* Ajuda */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Ajuda</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
  
          {/* Logo e idioma */}
          <div className="flex flex-col gap-4 items-start text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 cursor-pointer hover:text-purple-300">
                🌐 Português
              </span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-purple-300">
                🇧🇷 Brasil
              </span>
            </div>
  
            <img
              src="/src/assets/logoTrapdoor.png"
              alt="Trapdoor Logo"
              className="w-14 h-14 object-contain mt-2"
            />
  
            <p className="text-gray-300">© 2024 - 2025 Trapdoor Ltda.</p>
            <p className="text-gray-400 leading-snug text-xs">
              Rua Rodrigo, nº 10 sala A204 - Caraguatatuba, São Paulo - SP<br />
              CNPJ 11.111.111/0000-00
            </p>
          </div>
        </div>
  
        {/* Linha final */}
        <div className="relative z-10 border-t border-purple-500/30 mt-10 pt-4 text-center text-xs text-gray-400">
          Desenvolvido por <span className="text-purple-300 font-medium"></span>
        </div>
      </footer>
    );
  }
  