export interface TimelineEvent {
  ano: string
  titulo: string
  descricao: string
  imagem: string
}

export interface Projeto {
  id: string
  titulo: string
  descricao: string
  capa: string
  tecnologias: string
  timeline: TimelineEvent[]
}

export const projetos: Projeto[] = [
  {
    id: "1",
    titulo: "Competidor da Oliempiada Brasileira de Robotica",
    descricao: "Durante meu último ano no ensino médio, em 2022, decidi criar uma nova equipe do zero, mantendo o nome da antiga formação: StarDust. O campeonato consiste em construir um robô autônomo, capaz de cumprir tarefas de forma totalmente independente.",
    capa: "/images/OBR-2022/robo.jpg",
    tecnologias: "https://skillicons.dev/icons?i=git,github,cpp,arduino",
    timeline: [
      {
        ano: "Começo 2022",
        titulo: "Início da nova equipe StarDust no Sesi Limeira",
        descricao: "Equipe nova, com uniforme customizado e preparado",
        imagem: "/images/OBR-2022/time.jpg"
      },
      {
        ano: "Montagem",
        titulo: "Primeira Versão",
        descricao: "Para o hardware do robo foi usado Arduino Mega, Shield Motor, Motor de Lego, Sensor Ultrasonico, Regulador de Tensão, Servo Motor, Sensor de Cor e Sensor de Luz",
        imagem: "/images/OBR-2022/inicio.jpg"
      },
      {
        ano:"Etapa Regional",
        titulo:"Tudo Pronto",
        descricao:"A etapa regional foi em Araraquara-SP, disputar com outras escolas para a etapa estadual",
        imagem:"/images/OBR-2022/zoom.jpg",
      },
      {
        ano:"Sucesso",
        titulo:"Proxima etapa estadual",
        descricao:"Depois da etapa regional foi notado alguns bugs de programação e hardware",
        imagem:"/images/OBR-2022/autonomo.gif",
      },
      {
        ano:"Etapa Estadual",
        titulo:"Fim",
        descricao:"Ouve muitos autos e baixos no meio do campeonato mas o importante foi ter chegado longe com uma equipe nova e espirito coperativo e maker",
        imagem:"/images/OBR-2022/fei.jpg",
      },
    ]
  },
  {
    id: "2",
    titulo: "Orientador de equipe de garagem Oliempiada Brasileira de Robotica",
    descricao: "O campeonato é o mesmo, mas desta vez eu quis ser orientador, a equipe se chama Lotus, o nome e referente a segunda equipe de Ayrton Senna. Montei uma equipe e desenvolvemos um robô fora do convencional: utilizamos uma câmera para seguir a linha em vez de sensores.",
    capa: "/images/OBR-2024/capa.jpg",
    tecnologias: "https://skillicons.dev/icons?i=git,github,cpp,arduino,py,linux,raspberrypi",
    timeline: [
      {
        ano: "Começo 2024",
        titulo: "Robo de garagem",
        descricao: "O hardware do robo foi usado Arduino Mega, raspberry pi 5,  Shield CNC V3, Motor Nema, Sensor Ultrasonico, Regulador de Tensão e camera de webcam",
        imagem: "/images/OBR-2024/robo1.jpg"
      },
      {
        ano: "Pronto",
        titulo: "Top!!",
        descricao: "É muito legal usar câmera em vez de sensores simples para seguir linha, pois permite aplicar visão computacional e tornar o robô mais inteligente. Usar o Raspberry Pi e o Arduino juntos é uma combinação poderosa na OBR, pois o Arduino cuida dos comandos em tempo real dos motores e sensores, enquanto o Raspberry processa as imagens e toma decisões mais complexas.",
        imagem: "/images/OBR-2024/robo.gif"
      },
      {
        ano: "Fim",
        titulo: "O importe foi o aprendizado",
        descricao: "O campeonato foi realizado em São Carlos-SP. Apesar de não termos alcançado o sucesso esperado, enfrentamos desafios com a iluminação da arena e também com a carcaça do robô, que precisou de ajustes de última hora com cola quente. Mas o mais importante foi a força de vontade dos alunos, que estiveram presentes e deram o seu melhor. Todo o esforço para chegar até lá já foi uma grande conquista!",
        imagem: "/images/OBR-2024/dia.jpg",
      },
    ]
  },
  {
    id: "3",
    titulo: "Primeira Iniciação Cientifica",
    descricao: "",
    capa: "",
    tecnologias: "",
    timeline :[
      {
        ano:"",
        titulo: "",
        descricao: "",
        imagem: ""
      }
    ]
  },
]