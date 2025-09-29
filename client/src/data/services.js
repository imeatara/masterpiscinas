const services = [
  {
    title: "Limpieza con ácido",
    desc: "Restauración de superficies con incrustaciones, algas o manchas.",
    src: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5y93skdfj1rrct6sgkv94gz%2F1758731633_img_1.webp?st=2025-09-24T15%3A21%3A57Z&se=2025-09-30T16%3A21%3A57Z&sks=b&skt=2025-09-24T15%3A21%3A57Z&ske=2025-09-30T16%3A21%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=22TWOvwscglsiTRtKHJe4yBpQ4sg5PL92oBFMl9pYyE%3D&az=oaivgprodscus",
    alt: "Limpieza con ácido en pileta",
    slug: "limpieza-acido",
  },
  {
    title: "Desagote",
    desc: "Vaciado seguro y puesta a punto posterior.",
    src: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5y93skdfj1rrct6sgkv94gz%2F1758731633_img_1.webp?st=2025-09-24T15%3A21%3A57Z&se=2025-09-30T16%3A21%3A57Z&sks=b&skt=2025-09-24T15%3A21%3A57Z&ske=2025-09-30T16%3A21%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=22TWOvwscglsiTRtKHJe4yBpQ4sg5PL92oBFMl9pYyE%3D&az=oaivgprodscus",
    alt: "Desagote y bombeo de pileta",
    slug: "desagote",
  },
  {
    title: "Pintura",
    desc: "Sellos, preparación y aplicación según tipo de pileta.",
    src: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5y93skdfj1rrct6sgkv94gz%2F1758731633_img_1.webp?st=2025-09-24T15%3A21%3A57Z&se=2025-09-30T16%3A21%3A57Z&sks=b&skt=2025-09-24T15%3A21%3A57Z&ske=2025-09-30T16%3A21%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=22TWOvwscglsiTRtKHJe4yBpQ4sg5PL92oBFMl9pYyE%3D&az=oaivgprodscus",
    alt: "Pintura de pileta con rodillo",
    slug: "pintura",
  },
  {
    title: "Cambio de piedras / multiválvula",
    desc: "Reemplazo de medio filtrante y servicio sobre multiválvula.",
    src: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5y93skdfj1rrct6sgkv94gz%2F1758731633_img_1.webp?st=2025-09-24T15%3A21%3A57Z&se=2025-09-30T16%3A21%3A57Z&sks=b&skt=2025-09-24T15%3A21%3A57Z&ske=2025-09-30T16%3A21%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=22TWOvwscglsiTRtKHJe4yBpQ4sg5PL92oBFMl9pYyE%3D&az=oaivgprodscus",
    alt: "Filtro de arena y multiválvula",
    slug: "cambio-piedras-multivalvula",
  },
  {
    title: "Pulido de placas",
    desc: "Recuperación de brillo en bordes y solárium.",
    src: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5y93skdfj1rrct6sgkv94gz%2F1758731633_img_1.webp?st=2025-09-24T15%3A21%3A57Z&se=2025-09-30T16%3A21%3A57Z&sks=b&skt=2025-09-24T15%3A21%3A57Z&ske=2025-09-30T16%3A21%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=22TWOvwscglsiTRtKHJe4yBpQ4sg5PL92oBFMl9pYyE%3D&az=oaivgprodscus",
    alt: "Pulido de placas y bordes de piscina",
    slug: "pulido-placas",
  },
  {
    title: "Reparación en fibra / parches",
    desc: "Sellado de fisuras y parches localizados.",
    src: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5y93skdfj1rrct6sgkv94gz%2F1758731633_img_1.webp?st=2025-09-24T15%3A21%3A57Z&se=2025-09-30T16%3A21%3A57Z&sks=b&skt=2025-09-24T15%3A21%3A57Z&ske=2025-09-30T16%3A21%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=22TWOvwscglsiTRtKHJe4yBpQ4sg5PL92oBFMl9pYyE%3D&az=oaivgprodscus",
    alt: "Reparación de piscina de fibra de vidrio",
    slug: "reparacion-fibra-parches",
  },
];

export default services;
