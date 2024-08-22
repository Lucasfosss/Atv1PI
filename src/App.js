import './App.css';
import Products from './componentes/Products';

const products = [
  {
  "id": 1,
  "title": "Placa de Vídeo RTX 4060",
  "description": "A placa de vídeo Gigabyte RTX 4060 é uma ótima opção para quem busca um setup high-end de entrada.",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F470987%2Fplaca-de-video-rtx-4060-eagle-oc-gigabyte-nvidia-geforce-8gb-gdrr6-dlss-ray-tracing-gv-n4060eagle-oc-8gd_1687981181_g.jpg&w=640&q=100"
  },
  {
  "id": 2,
  "title": "Memória RAM Kingston Fury Beast",
  "description": "Com um visual agressivo e luzes RGB* no comprimento do módulo com os efeitos incríveis",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F480538%2Fmemoria-kingston-fury-beast-rgb-8gb-3600mhz-ddr4-cl17-preto-kf436c17bb2a-8_1698351604_g.jpg&w=640&q=100"
  },
  {
  "id": 3,
  "title": "Placa de Vídeo GTX 1660 TI",
  "description": "Mergulhe em seus jogos favoritos com a potência da GTX 1660 TI. ",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F616771%2Fplaca-de-video-gtx-1660-ti-pcyes-nvidia-geforce-6gb-gddr6-192-bit-branco-pvgtx1660ti6gbbr_1724162952_m.jpg&w=256&q=75"
  },
  {
  "id": 4,
  "title": "Monitor Gamer LG UltraGear 27",
  "description": "Complete seu setup gamer com o monitor LG Ultragear",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F444038%2Fmonitor-gamer-lg-ultragear-27-full-hd-144hz-1ms-ips-hdmi-e-displayport-hdr-10-99-srgb-freesync-premium-vesa-27gn65r_1712149543_g.jpg&w=640&q=100"
  },
  {
  "id": 5,
  "title": "Water Cooler Rise Mode Gamer Black",
  "description": "Domine seus jogos com o Water Cooler Rise Mode Black RGB 240mm. ",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F130043%2Fwater-cooler-rise-mode-gamer-black-rgb-240mm-preto-rm-wcb-02-rgb_1663776681_g.jpg&w=640&q=100"
  },
  {
  "id": 6,
  "title": "Processador AMD Ryzen 9 9950X",
  "description": "O AMD Ryzen 9 9950X é a escolha perfeita para entusiastas que buscam o máximo desempenho em suas máquinas",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F609951%2Famd-ryzen-9-9950x-16-core_1723553287_g.jpg&w=640&q=100"
  },
  {
  "id": 7,
  "title": "SSD 1 TB Corsair Force MP600 PRO XT",
  "description": "O SSD M.2 NVMe 1.4 PCIe de 4ª geração x4 Corsair MP600 PRO XT oferece um excelente desempenho de armazenamento, utilizando a tecnologia PCIe ",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F232237%2Fssd-corsair-force-mp600-pro-xt-1tb-m-2-pcie-nvme-leituras-7100mb-s-e-gravacoes-6800mb-s-cssd-f1000gbmp600pxt_1632338556_g.jpg&w=640&q=100"
  },
  {
  "id": 8,
  "title": "Monitor Gamer Samsung Odyssey G5 34",
  "description": "Monitor gamer samsung odyssey g5 34” uwqhd, tela curva ultrawide,",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F602367%2FMonitor-Gamer-Samsung-Odyssey-G5-34-Uwqhd-Tela-Curva-Ultrawide-Painel-Va-165hz-1ms-Hdr10-HDMI-Dp-Freesync-Premium-Preto_1723665735_g.jpg&w=640&q=100"
  },
  {
  "id": 9,
  "title": "Notebook Gamer Asus Rog Strix G16",
  "description": "O novo ROG Strix G16 traz a 13ª geração de processadores Intel Core i9-13980HX,",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F467613%2Fnotebook-gamer-asus-rog-strix-g16-rtx-4060-16gb-ram-brinde-controle-ps4-g614jv-n3094w_1721229589_g.jpg&w=640&q=100"
  },
  {
  "id": 10,
  "title": "Fone de Ouvido Hercules HDP DJ45",
  "description": "O Hercules HDP DJ45 é o fone de ouvido perfeito para o ajudar a dar os primeiros passos como DJ",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F134919%2Ffone-de-ouvido-hercules-hdp-dj45-4780898_1609275008_g.jpg&w=640&q=100"
  },
  {
  "id": 11,
  "title": "Monitor Gamer Curvo KBM! GAMING MG700 27",
  "description": "O Monitor Gamer KBM! GAMING MG700 é a escolha perfeita para quem busca imersão e desempenho nos jogos",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F471917%2Fmonitor-gamer-kbm-gaming-mg700-27-led-full-hd-240hz-1ms-hdmi-e-displayport-96-srgb-adaptive-sync-ajuste-de-altura-kgmg70027pt_1704462104_g.jpg&w=640&q=100"
  },
  {
  "id": 12,
  "title": "Cadeira Gamer KBM! GAMING Tempest CG600",
  "description": "Conheça a cadeira KBM! GAMING Tempest CG600! Tenha horas incríveis desfrutando seu gameplay de maneira confortável e aconchegante!",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F471928%2Fcadeira-gamer-kbm-gaming-cg600-cinza-claro-com-almofadas-descanso-para-pernas-retratil-reclinavel-kgcg600cz_1700662493_g.jpg&w=640&q=100"
  },
  {
  "id": 13,
  "title": "Placa Mãe ASRock B450M Steel Legend",
  "description": "Placa-mãe ASRock B450M Steel Legend AMD DDR4 Resistente como aço, verdadeira lenda a Steel Legend representa o estado filosófico da sólida durabilidade e irresistível estética.",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F100672%2Fplaca-mae-asrock-b450m-steel-legend-amd-am4-matx-ddr4-90-mxb9y0-a0uayz_placa-mae-asrock-b450m-steel-legend-amd-am4-matx-ddr4-90-mxb9y0-a0uayz_1552586908_g.jpg&w=640&q=100"
  },
  {
  "id": 14,
  "title": "Placa de Vídeo RX 6750XT Gaming XFX",
  "description": "A placa de vídeo AMD Radeon RX 6750 XT, alimentada pela arquitetura AMD RDNA 2,",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F528811%2Fplaca-de-video-rx-6750xt-gaming-graphics-card-amd-radeon-12gb-gddr6-ray-tracing-fidelity-fx-rx-675tmbaf9_1712004223_g.jpg&w=640&q=100"
  },
  {
  "id": 15,
  "title": "Teclado Mecânico Gamer HyperX Alloy Rise GKBD 75",
  "description": "Com placas superiores, emblemas e botões giratórios que podem ser trocados sem ferramentas, você terá diversas maneiras de exibir seu próprio estilo individual. Revele-se!",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F612823%2Fteclado-mecanico-gamer-hyperx-alloy-rise-gkbd-75-rgb-switch-linear-layout-75-anti-ghosting-preto-7g7a4aa_1723120220_g.jpg&w=640&q=100"
  },
  {
  "id": 16,
  "title": "Gabinete Gamer MSI MAG Pano M100R PZ",
  "description": "O Micro-ATX Tower é a solução ideal para quem busca um gabinete que combina eficiência e estilo. Com suporte para placas-mãe M-ATX e ITX",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F531831%2Fgabinete-gamer-msi-mag-pano-m100r-pz-mini-tower-m-atx-preto-306-7g24r21-809_1723581128_g.jpg&w=640&q=100"
  },
  {
  "id": 17,
  "title": "Headset Gamer Havit",
  "description": "Headset Gamer Havit H2002D Aparência e textura proporcionais, simples e generosas. Jaqueta de liga leve com frente e superfície de plástico com revestimento de piano. Design Gamer em preto",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F102770%2Fheadset-gamer-havit-drivers-53mm-hv-h2002d_headset-gamer-havit-drivers-53mm-hv-h2002d_1564056874_g.jpg&w=640&q=100"
  },
  {
  "id": 18,
  "title": "Gabinete Gamer Rise Mode Glass 06X",
  "description": "Os Gabinetes são a estrutura que une toda sua build, onde você vai querer algo que tenha flexibilidade para montagem da suas peças, garanta boa refrigeração dos componentes e que deixe tudo bonito",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F324516%2Fgabinete-gamer-rise-mode-glass-06x-lateral-em-vidro-fume-e-frontal-em-vidro-temperado-preto-rm-ca-06x-fb_1660589149_g.jpg&w=640&q=100"
  },
  {
  "id": 19,
  "title": "Mouse sem fio Logitech M170",
  "description": "O FUTURO É SEM FIO. Com o mouse sem fio Logitech M170, desfrute da confiabilidade de um mouse com fio com a conveniência do sem fio ",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F94224%2Fmouse-logitech-m170-sem-fio-preto-e-cinza-910-004940_1612878696_g.jpg&w=640&q=100"
  },
  {
  "id": 20,
  "title": "Pen Drive 128GB Kingston DataTraveler Exodia Onyx",
  "description": "unidade flash USB Kingston Exodia™ Onyx é uma unidade flash compatível com USB 3.2 Gen 1",
  "imageUrl": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F442197%2Fpen-drive-128gb-kingston-datatraveler-exodia-onyx-usb-3-2-dtxon-128gb_1683660307_g.jpg&w=640&q=100"
  }
 ]







function App() {
  return (
    <div className="App">
      <h1>Fossito Gamer</h1>
      <Products products={products}/>
    </div>
  );
}

export default App;
