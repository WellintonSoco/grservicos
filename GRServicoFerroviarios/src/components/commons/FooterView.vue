<template>
    <!-- Footer -->
    <footer class="footer-container">
      <div class="footer-content">
        <!-- Redes sociais -->

        <!-- Contatos -->
        <div class="footer-center">
          <p><i class="mdi mdi-phone"></i> Telefone: (41) 997203167 / (67) 992267706</p>
          <p><i class="mdi mdi-email"></i> E-mail: contato@grservicosferroviarios.com</p>
        </div>

          <!-- Contatos -->
          <div class="footerLogo">
            <img src="/img/logo.png" alt="">       
          </div>


        <!-- Endereço -->
        <div class="footer-right">
          <p><i class="mdi mdi-map-marker"></i> Endereço:</p>
          <p>Rua Manoel Pedro de Campos, 2717</p>
          <p>Três Lagoas/MS</p>
          <p>CEP: 79620-040</p>
        </div>
      </div>

      <!-- Direitos reservados -->
      <div class="footer-bottom">
        <p>© 2024 GR Serviços Ferroviários. Todos os direitos reservados.</p>
      </div>
    </footer>
</template>

<style scoped>
/* Estilos do Footer */
.footer-container {
  background-color: #333; /* Fundo escuro */
  color: #fff; /* Texto claro */
  padding: 20px 40px;
  font-size: 14px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Garantir responsividade */
  gap: 20px;
}

.footer-left,
.footer-center,
.footer-right {
  flex: 1; /* Garantir proporção igual */
  text-align: center;
}

.footer-left {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.social-icon img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.social-icon:hover img {
  transform: scale(1.1); /* Aumentar o tamanho no hover */
}

.footer-center p,
.footer-right p {
  margin: 5px 0;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2); /* Linha separadora */
  padding-top: 10px;
  color: rgba(255, 255, 255, 0.8);
}
.footerLogo img {
  max-width: 100px; 
  object-fit: contain; 
  border-radius: 8px;
}


</style>