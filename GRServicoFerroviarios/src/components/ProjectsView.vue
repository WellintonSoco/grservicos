<template>
  <headerView />
 <v-parallax src="/img/imgEquipe.jpg" height="500">
    <div class="parallax-overlay"></div>
    <div class="d-flex flex-column align-center text-white">
      <h1 class="text-h1 font-weight-bold mb-4">
       Conheça nossos projetos!
      </h1>
    </div>
  </v-parallax>  
  <div class="projects-container">
    <!-- Cards com fundo diferenciado -->
    <div
  v-for="(project, index) in projects"
  :key="index"
  class="background-section"
  :style="{ backgroundColor: project.bgColor }"
>
  <div class="project-section">
    <div class="project-images">
      <img :src="project.image" :alt="project.title" />
    </div>
    <div class="project-content" :class="{ 'reverse-order': index % 2 === 0 }">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </div>
  </div>
  </div>
</template>

<script setup>
import headerView from './commons/headerView.vue';

const projects = [
  {
    title: 'ALCANCE DA GR NACIONAL',
    description: 'A GR Servços ferroviários está presente em 512 cidades no território nacional E em 8 estados diferentes. Crescendo e expandindo a cada dia.',
    image: '/img/imgProject1.jpeg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'TRENS TURÍSTICOS',
    description: 'Cuidamos de toda a malha ferroviária em 3 estados, proporcionando passeios cada vez mais seguros para o turismo Brasileiro.',
    image: '/img/imgProject2.jpeg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'CONSTRUÇÃO E MANUTENÇÕES EM FERROVIAS',
    description: 'Com vasto conhecimento em montagem e manutenções, sejam periódicas, preventivas ou corretivas dos aparelhos de mudança de via, bitolas métricas, largas e mistas, nós da GR SERVIÇOS FERROVIÁRIOS contamos com técnicos especializados e maquinários específicos para execução.',
    image: '/img/imgH8.jpeg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'LEVANTAMENTO ABSOLUTO',
    description: 'Executamos o levantamento com aparelhos específicos para real geometria das vias, após a inspeção, a GR SERVIÇOS FERROVIÁRIOS irá apresentar um relatório detalhado com uma avaliação completa da sua linha. Estas informações são necessárias para prever o orçamento de manutenção da ferrovia e avaliar os cenários de reabilitação de via.',
    image: '/img/CapDeVias.png',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'CONSTRUÇÃO DE VIA PERMANENTE',
    description: 'Execução de construção de Via permanente com dormentes de concreto na região de Goiás.',
    image: '/img/imgLevantamentoAbsoluto.jpeg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'CAPACITAÇÃO DE COMUNICAÇÃO E VIA PERMANENTE',
    description: 'Capacitação, treinamento e cursos sobre Via Permanente e comunicação para parceiros prestadores de serviços de vias e terminais. O curso tem como objetivo, produzir conhecimento técnico sobre Via Permanente, no sentido de permitir conhecimento amplo sobre especificações técnicas, bem como, padronizações em anomalias preexistentes, novas, checklist e cotas, dentre outras especificações de vias. Conforme normas técnicas vigentes.',
    image: '/img/imgProject4.jpeg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'SOCADORAS, NIVELADORAS E ALINHADORAS',
    description: 'Executada com equipamentos mecanizados o nivelamento longitudinal e transversal para garantir a estabilização da via. As ferramentas de socaria penetram no lastro de cima para baixo e compactam a brita debaixo do dormente com um movimento de fechamento, denominado aperto. Dois fatores são decisivos: primeiro, todas as ferramentas de socaria trabalham com a mesma pressão; segundo, elas vibram com a frequência ideal de exatamente 35 Hz. Esta vibração linear e direcional, em combinação com o movimento assíncrono da ferramenta de socaria, cria um leito de lastro homogeneamente compactado.',
    image: '/img/imgSocadoras.jpg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'CAPACITAÇÃO DE PROJETOS',
    description: 'Percorremos o trecho especificado pelo cliente, avaliando visualmente a condição dos dormentes, trilhos, AMVs e acessórios de trilho da super e infraestrutura. Após a inspeção, a GR SERVIÇOS FERROVIÁRIOS irá apresentar um relatório detalhado com uma avaliação completa da sua linha. Estas informações são necessárias para prever o orçamento de manutenção da ferrovia e avaliar os cenários de reabilitação de via.',
    image: '/img/imgCapProsperacao.jpg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'SOLDAS ALUMINOTÉRMICAS',
    description: 'Especialistas em soldas aluminotérmicas de campo, aplicamos todas as técnicas necessárias para tal procedimento garantindo uma fusão total das partes. O processo envolve a fundição de aço derretido (produzido pela reação de óxido de ferro e alumínio) a uma temperatura que excede 3.500 ˚F (1.950 °C) em moldes refratários concebidos para a especificação do trilho. Oferecemos processos, porções, moldes e cadinhos concebidos para atender a diversas abordagens de soldagem global.',
    image: '/img/imgSoldas.jpg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'REVITALIZAÇÃO DE VIAS',
    description: 'Os serviços de manutenção e revitalização de superestrutura ferroviária objetivaram a revitalização das linhas através de manutenções corretivas e preventivas, garantindo a conservação das vias férreas. As atividades desenvolvidas englobam a troca dos dormentes danificados da grade, juntamente com a substituição mecanizada dos trilhos da grade. Para garantir a perfeita funcionalidade da via e permitir a passagem dos trens, nivelamento e alinhamento da linha.',
    image: '/img/imgRevitalizacaoVias.jpg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'PROSPECÇÃO DE VIA PERMANENTE',
    description: 'Escopo de prospecção total realizado e gerenciado por GR Serviços Ferroviários. Abrangendo toda Malha Ferroviária RUMO. Com total de 25.000 Mil Km.Levantamento com P.O. e homologação RUMO de equipes que executaram toda malha levantando trilhos ,dormentes e lastro. Processo todo eletrônico de registro pontual com históricos.',
    image: '/img/imgProsperacao.jpg',
    bgColor: 'rgb(0,1,42)',
  },
  {
    title: 'PROSPECÇÃO',
    description: 'Abrangendo toda Malha Ferroviária RUMO. Com total de 25.000 Mil Km.',
    image: '/img/imgProject3.jpeg',
    bgColor: 'rgb(0,1,42)',
  },
];

</script>

<style scoped>
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

.parallax-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.projects-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}

.title {
  text-align: center;
  font-size: 36px;
  margin: 30px 0;
  color:white;
}

.background-section {
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.project-content {
  flex: 1;
  padding: 20px;
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-content.reverse-order {
  order: -1;
}

.project-content h2 {
  font-size: 28px;
  color: #3dccc7;
  margin-bottom: 10px;
}

.project-content p {
  font-size: 18px;
  color: #fff;
  line-height: 1.6;
}

.project-images {
  flex: 1 1 35%;
  max-width: 850px;
  text-align: center;
}

.project-images img {
  max-width: 90%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.project-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 50px 100px;
  flex-wrap: wrap;
}

@media (max-width: 1200px) {
  .project-images {
    flex: 1 1 45%;
  }

  .project-content {
    flex: 1 1 50%;
  }

  .project-section {
    padding: 30px 50px;
  }

  .v-parallax .d-flex h1 {
    font-size: 36px;
  }

  .v-parallax .d-flex h4 {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .project-images {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }

  .project-content {
    flex: 1 1 100%;
  }

  .project-section {
    padding: 20px;
  }

  /* Garantir que imagem e texto sempre alternem corretamente */
  .project-section:nth-child(odd) .project-content {
    order: 1; 
  }

  .project-section:nth-child(even) .project-content {
    order: -1; 
  }

  .v-parallax .d-flex h1 {
    font-size: 28px;
  }

  .v-parallax .d-flex h4 {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .v-parallax .d-flex h1 {
    font-size: 24px;
  }

  .project-content h2 {
    font-size: 22px;  
  }

  .project-content p {
    font-size: 14px;  
  }

  .project-section {
    padding: 10px 15px; 
  }

  /* Alternando as ordens para telas pequenas */
  .project-section:nth-child(odd) .project-content {
    order: 1;  
  }

  .project-section:nth-child(even) .project-content {
    order: -1; 
  }

  /* Ajuste nas imagens para celulares */
  .project-images img {
    max-width: 100%;  
    height: auto;
  }
}

</style>
