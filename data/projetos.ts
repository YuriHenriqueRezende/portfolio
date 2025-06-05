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
    titulo: "Competidor da Oliempiadas Brasileira de Robotica",
    descricao: "Durante meu ultimo ano no ensino medio em 2022, descidi criar um time do zero com o mesmo nome da antiga equipe que se formou, chamada StarDust",
    capa: "/images/OBR-2022/robo.jpg",
    tecnologias: "https://skillicons.dev/icons?i=git,github,c,cpp,arduino",
    timeline: [
      {
        ano: "Começo",
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
    titulo: "Competidor da Oliempiadas Brasileira de Robotica",
    descricao: "Durante meu ultimo ano no ensino medio em 2022, descidi criar um time do zero com o mesmo nome da antiga equipe que se formou, chamada StarDust",
    capa: "/images/OBR-2022/robo.jpg",
    tecnologias: "https://skillicons.dev/icons?i=git,github,c,cpp,arduino",
    timeline: [
      {
        ano: "Começo",
        titulo: "Início da nova equipe StarDust no Sesi Limeira",
        descricao: "Equipe nova, com uniforme customizado e preparado",
        imagem: "/images/OBR-2022/time.jpg"
      },
    ]
  },
]