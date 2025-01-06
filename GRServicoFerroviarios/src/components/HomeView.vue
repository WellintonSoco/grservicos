<template>
  <headerView />
    <!-- Parallax com Conteúdo -->
    <v-parallax height="720">
  <!-- Máscara preta -->
  <div class="parallax-overlay"></div>
  <!-- Conteúdo do parallax -->
  <div class="d-flex flex-column align-center text-white">
    <h1 class="text-h1 font-weight-bold mb-4">
      GR Serviços Ferroviários
    </h1>
    <h4 class="subheading font-weight-light">
      Especialistas em soluções ferroviárias há mais de 15 anos!
    </h4>
    <h4 class="subheading font-weight-light">
      Solicite seu orçamento agora mesmo!
    </h4>
    <v-btn class="btn-orcamento" width="400" height="50" color="rgb(250,204,11)" dark>
      Solicitar Orçamento
    </v-btn>
  </div>
</v-parallax>


    <!-- Cards Centralizados -->
    <div class="cards-container">
      <div class="card">
        <h2>Sobre Nós</h2>
        <p>
          Como especialistas em serviços ferroviários há mais de 15 anos,
          participamos de projetos inovadores modernizando e simplificando processos.
        </p>
      </div>
      <div class="card">
        <h2>Projetos</h2>
        <p>
          Conheça nossos projetos realizados em diversos estados, sempre com foco em inovação e qualidade.
        </p>
      </div>
      <div class="card">
        <h2>Contato</h2>
        <p>
          Entre em contato conosco e faça seu orçamento personalizado. Atendemos com segurança e credibilidade.
        </p>
      </div>
    </div>

    <!-- Nova Seção Sobre Nós -->
    <div class="about-section">
      <div class="about-image">
        <img src="/img/imgCapProsperacao.jpg" alt="Equipe trabalhando em um projeto ferroviário" />
      </div>
      <div class="about-text">
        <h2>Sobre Nós</h2>
        <p>
          Como especialistas em serviços ferroviários há mais de 15 anos, participamos de projetos inovadores modernizando e 
          simplificando processos e obras, sem nunca perder de vista nossos clientes e parceiros. 
          Somos comprometidos com o crescimento de nossos colaboradores, parceiros e clientes
          A GR SERVIÇOS FERROVIÁRIOS está presente em diversos estados, para conseguir atender de forma clara, objetiva e individual cada cliente, 
          prezando sempre pela segurança, comprometimento e credibilidade 
        </p>
        <p>
          Nossos especialistas estão prontos para atender suas demandas e transformar seus projetos em
          realidade, com confiança e expertise.
        </p>
      </div>
    </div>

    <!-- Nova Seção Mural -->
    <div class="mural-section">
      <h2 class="mural-title">Mural</h2>
      <div class="mural-gallery">
        <img src="/img/imgH2.jpeg" alt="Foto 2" />
        <img src="/img/imgH3.jpeg" alt="Foto 3" />
        <img src="/img/imgH4.jpeg" alt="Foto 4" />
        <img src="/img/imgH8.jpeg" alt="Foto 5" />
        <img src="/img/imgH9.jpeg" alt="Foto 6" />
        <img src="/img/imgH7.jpeg" alt="Foto 1" />
        <img src="/img/imgSocadoras.jpg" alt="Foto 2" />
        <img src="/img/imgH1.jpeg" alt="Foto 3" />      
        <img src="/img/imgH11.jpeg" alt="Foto 3" />      
        <img src="/img/imgH12.jpeg" alt="Foto 3" />      
        <img src="/img/imgH13.jpeg" alt="Foto 3" />      
        <img src="/img/ferrovia.jpeg" alt="Foto 3" />      
      </div>
    <div class="clientes-section">
      <h2 class="clientes-title">Nossos parceiros e clientes!</h2>
      <div class="clientes-gallery">
        <img src="/img/imgTremRepublicano.png" alt="Cliente 1" />
        <img src="/img/imgRumo.png" alt="Cliente 2" />
        <img class="imgSerraVerdeExpress" src="/img/imgSerraVerdeExpress.png" alt="Cliente 3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import headerView from './commons/headerView.vue';

</script>

<style scoped>
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
  background: transparent;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
  object-fit: contain;
}

.tabs-container {
  display: flex;
  gap: 20px;
}

.tab {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  padding: 5px 10px;
  transition: color 0.3s ease;
}

.tab:hover .underline {
  width: 100%;
}

/* Estilo para o link ativo (selecionado) */
.tab.active {
  color: rgb(250,204,11);
}

.tab.active .underline {
  width: 100%;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: rgb(250,204,11);
  transition: width 0.3s ease;
}

.tab:hover .underline {
  width: 100%;
}

/* Parallax Overlay */
.parallax-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2;
}

.v-parallax {
  position: relative;
  background-image: url('/img/headerHome.jpeg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  min-height: 500px; /* Ajustável para telas menores */
}

.v-parallax .d-flex {
  position: relative;
  z-index: 3;
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

.btn-orcamento {
  color: #333 !important;


}

.btn-orcamento:hover {
  background-color: white !important;
  color: #333 !important;
}

/* Estilo dos cards */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: -150px;
  padding: 20px;
  z-index: 3;
}

.card {
  flex: 1 1 calc(33.333% - 40px);
  max-width: 500px;
  height: auto;
  z-index: 999;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  text-align: center;
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  background-color: rgb(0,1,42);
  color: #ffffff !important;
}

.card h2,
.card p {
  transition: color 0.3s ease;
}

.card:hover h2,
.card:hover p {
  color: #ffffff;
}

.card h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.card p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}

/* Estilo da seção Sobre Nós */
.about-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 100px 20px;
  margin-top: 40px;
  background-color: rgb(0,1,42);
}

.about-text {
  flex: 1 1 100%;
  max-width: 800px;
  text-align: center;
}

.about-text h2 {
  font-size: 32px;
  margin-bottom: 50px;
  color: white;
}

.about-text p {
  font-size: 20px;
  color: white;
  line-height: 1.8;
}

.about-image {
  flex: 1 1 100%;
  max-width: 650px;
  text-align: center;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Estilo da seção Clientes */
.clientes-section {
  padding: 60px 20px;
  background-color: #f0f0f0;
}

.clientes-title {
  text-align: center;
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
}

.clientes-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.clientes-gallery img {
  max-width: 150px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.imgSerraVerdeExpress {
  max-width: 120px !important;
}

/* Estilo da seção Mural */
.mural-section {
  padding: 60px 20px;
  background-color: #f0f0f0;
}

.mural-title {
  text-align: center;
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
}

.mural-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.mural-gallery img {
  width: calc(100% - 20px);
  max-width: 300px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.mural-gallery img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.mural-title,
.clientes-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.mural-title::before,
.mural-title::after,
.clientes-title::before,
.clientes-title::after {
  content: '';
  flex: 1;
  height: 2px;
  background-color: rgb(0,1,42);
}

.mural-title::before,
.clientes-title::before {
  margin-right: 20px;
}

.mural-title::after,
.clientes-title::after {
  margin-left: 20px;
}

/* Media Queries */
@media (max-width: 768px) {
  .v-parallax {
    min-height: 300px;
  }

  .v-parallax .d-flex h1 {
    font-size: 28px;
  }

  .v-parallax .d-flex h4 {
    font-size: 14px;
  }

  .card {
    flex: 1 1 calc(100% - 20px);
    max-width: 100%;
  }

  .about-text {
    text-align: center;
  }

  .clientes-gallery img {
    max-width: 100px;
  }

  .mural-gallery img {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .v-parallax .d-flex h1 {
    font-size: 24px;
  }

  .v-parallax .d-flex h4 {
    font-size: 12px;
  }

  .clientes-gallery img {
    max-width: 80px;
  }

  .mural-gallery img {
    max-width: 100%;
    height: auto;
  }
}
</style>
