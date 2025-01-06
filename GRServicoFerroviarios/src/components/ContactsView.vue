<template>
  <headerView />
  <!-- Parallax com Conteúdo -->
  <v-parallax src="/img/imgH1.jpeg" height="500">
    <div class="parallax-overlay"></div>
    <div class="d-flex flex-column align-center text-white">
      <h1 class="text-h1 font-weight-bold mb-4">
        Entre em contato com a gente!
      </h1>
    </div>
  </v-parallax>

  <!-- Cards sobrepostos à imagem -->
  <div class="cards-container">
    <div class="contact-card">
      <img style="width: 70px;" src="/img/telefone.png" alt="Foto 1" />
      <h3>Telefones</h3>
      <p>(41) 997203167 / (67) 992267706</p>
    </div>
    <div class="contact-card">
      <img style="width: 80px;" src="/img/email.png" alt="Foto 1" />
      <h3>E-mail</h3>
      <p>contato@grservicosferroviarios.com</p>
    </div>
    <div class="contact-card">
      <img style="width: 80px;" src="/img/wpp.png" alt="Foto 1" />
      <h3>WhatsApp</h3>
      <p>+55 11 98888-8888</p>
    </div>
    <div class="contact-card">
      <img style="width: 80px;" src="/img/endereco.png" alt="Foto 1" />
      <h3>Endereço</h3>
      <p>Rua Manoel Pedro de Campos, 2717 - Santos Dumont - Três Lagoas/MS - 79620-040</p>
    </div>
  </div>
</template>

<script setup>
import headerView from './commons/headerView.vue';
</script>

<style scoped>
.cards-container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: -100px;
  padding: 20px;
  z-index: 3;
}

.contact-card {
  width: 22%;
  min-width: 250px;
  height: auto; 
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word; /* Quebra palavras longas */
}

.contact-card img {
  margin-bottom: 20px;
  max-width: 80px;
  align-self: center;
}

.contact-card h3 {
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
}

.contact-card p {
  font-size: 18px;
  color: #555;
  line-height: 1.5;
  word-break: break-word;
}

/* Cabeçalho fixo em cima do parallax */
.header-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  z-index: 20;
}

/* Estilo da parallax */
.v-parallax {
  position: relative;
}

.v-parallax .d-flex {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  text-align: center;
}

.v-parallax .d-flex h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

.v-parallax .d-flex h4 {
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 300;
}

.v-parallax .d-flex .v-btn {
  margin-top: 20px;
}

/* Parallax Overlay */
.parallax-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

/* Media Queries para Responsividade */
@media (max-width: 1024px) {
  .cards-container {
    gap: 15px;
  }

  .contact-card {
    width: 45%; /* Ajusta o tamanho dos cards em telas médias */
  }

  .contact-card h3 {
    font-size: 20px;
  }

  .contact-card p {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .v-parallax .d-flex h1 {
    font-size: 32px;
  }

  .v-parallax .d-flex h4 {
    font-size: 16px;
  }

  .cards-container {
    gap: 10px;
  }

  .contact-card {
    width: 100%; 
    max-width: 400px; 
  }

  .contact-card h3 {
    font-size: 18px;
  }

  .contact-card p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .v-parallax .d-flex h1 {
    font-size: 24px;
  }

  .v-parallax .d-flex h4 {
    font-size: 14px;
  }

  .contact-card {
    width: 100%; 
    padding: 15px;
  }

  .contact-card h3 {
    font-size: 16px;
  }

  .contact-card p {
    font-size: 12px;
  }

  .cards-container {
    margin-top: -50px; 
  }
}
</style>
