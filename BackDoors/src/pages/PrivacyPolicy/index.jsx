export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-wrapper">
        <h1 className="privacy-title">Política de Privacidade</h1>
        <p className="privacy-intro">
          Na <strong>Trapdoor</strong>, respeitamos a sua privacidade e estamos
          comprometidos em proteger os seus dados pessoais. Esta Política explica
          como coletamos, usamos e protegemos suas informações durante o uso de
          nossos serviços e plataformas.
        </p>

        {/* Seção 1 */}
        <section className="privacy-section">
          <h2>1. Informações que Coletamos</h2>
          <p>
            Podemos coletar dados pessoais fornecidos diretamente por você, como
            nome, e-mail, endereço, CPF, informações de pagamento e histórico de
            compras. Também coletamos automaticamente dados técnicos, como tipo
            de dispositivo, navegador, endereço IP e comportamento de navegação
            dentro da loja.
          </p>
        </section>

        {/* Seção 2 */}
        <section className="privacy-section">
          <h2>2. Como Utilizamos seus Dados</h2>
          <p>
            Utilizamos suas informações para processar pedidos, oferecer suporte,
            melhorar sua experiência e enviar comunicações relevantes, como
            promoções e atualizações. Seus dados nunca serão vendidos a terceiros.
          </p>
        </section>

        {/* Seção 3 */}
        <section className="privacy-section">
          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Compartilhamos dados apenas com parceiros de confiança, como
            processadores de pagamento e serviços de entrega, estritamente quando
            necessário para a execução do serviço.
          </p>
        </section>

        {/* Seção 4 */}
        <section className="privacy-section">
          <h2>4. Cookies e Tecnologias Semelhantes</h2>
          <p>
            Utilizamos cookies para armazenar preferências, entender como você
            interage com o site e oferecer recomendações personalizadas. Você pode
            desativar cookies nas configurações do navegador, mas algumas funções
            podem ser afetadas.
          </p>
        </section>

        {/* Seção 5 */}
        <section className="privacy-section">
          <h2>5. Direitos do Usuário</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir seus dados pessoais,
            bem como solicitar a limitação do uso ou retirada do consentimento.
            Para exercer seus direitos, entre em contato pelo e-mail{" "}
            <span className="highlight">suporte@trapdoor.com</span>.
          </p>
        </section>

        {/* Seção 6 */}
        <section className="privacy-section">
          <h2>6. Segurança dos Dados</h2>
          <p>
            Adotamos medidas técnicas e organizacionais rigorosas para proteger
            seus dados contra acesso não autorizado, perda ou alteração. No
            entanto, nenhum sistema é totalmente imune a riscos.
          </p>
        </section>

        {/* Seção 7 */}
        <section className="privacy-section">
          <h2>7. Alterações nesta Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente para refletir
            mudanças em nossas práticas. A data da última atualização será sempre
            indicada abaixo.
          </p>
        </section>

        {/* Seção 8 */}
        <section className="privacy-section">
          <h2>8. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em
            contato conosco através do e-mail{" "}
            <span className="highlight">privacidade@trapdoor.com</span>.
          </p>
        </section>

        <p className="privacy-date">Última atualização: Novembro de 2025</p>
      </div>
    </div>
  );
}
