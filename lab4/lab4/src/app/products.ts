export interface Product {
  id: number;
  link: string;
  name: string;
  img: string | string[];
  price: number;
  description: string;
  rating: string;
}

export const products = [
  {
    id: 1,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h74/hf7/85118753931294.png?format=gallery-large","https://resources.cdn-kaspi.kz/img/m/p/hfe/hbf/84077662961694.png?format=gallery-medium"],
    name: 'Apple Vision Pro 512GB',
    price: 2697154,
    description: 'Internal memory capacity: 512.0 GB.Video recording: Yes.Battery capacity: 3166.0 match.Viewing angle: 110.0 degrees.Controls: touch panel,voice control.Approximate operating time: 5.0 hours',
    link: 'https://kaspi.kz/shop/p/apple-vision-pro-512-gb-116472619/?c=750000000',
    rating: '0/5',
  },
  {
    id: 2,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium"],
    name: 'MacBook Pro 14 MRX33 SSD:512GB RAM:18GB',
    price: 1034975,
    description: 'The Apple MacBook Pro 14 MRX33 is a sleek and high-performance black laptop, featuring a 14-inch display, powerful hardware, and the macOS operating system.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000',
    rating: '5/5',
  },
  {
    id: 3,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hb2/h44/64504718000158.jpg?format=gallery-medium"],
    name: 'Keychron K3 HotSwap Gateron Brown Switch ',
    price: 39990,
    description: 'Optical-mechanical keyboard with a classic design, designed for desktop computers, featuring wireless connectivity, and equipped with Gateron Brown mechanical switches.',
    link: 'https://kaspi.kz/shop/p/keychron-k3-hotswap-gateron-brown-switch-seryi-105986842/?c=750000000',
    rating: '5/5',
  },
  {
    id: 4,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h08/h5f/63839171149854.jpg?format=gallery-medium"],
    name: 'Ibanez GRG121DX-BKF Black',
    price: 134990,
    description: 'Electric guitar with 6 strings, superstrat body shape, not specifically designed for left-handed players.',
    link: 'https://kaspi.kz/shop/p/ibanez-grg121dx-bkf-black-14200417/?c=750000000',
    rating: '5/5',
  },{
    id: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h4c/h48/84690345918494.jpg?format=gallery-medium"],
    name: 'REALTECH 37455530 белый',
    price: 3000000,
    description: 'Windows 11 Pro system with Intel Core i9-14900KF, 64GB RAM, 2TB SSD, NVIDIA GeForce RTX 4090, 4TB HDD, housed in a Midi-Tower case.',
    link: 'https://kaspi.kz/shop/p/realtech-37455530-belyi-115260839/?c=750000000',
    rating: '5/5',
  },{
    id:6,
    img:["https://resources.cdn-kaspi.kz/img/m/p/heb/h8a/64496092479518.jpg?format=gallery-medium"],
    name:"Logitech MX Master 3S",
    price:49106,
    description:"Sensor Type: Optical LED, Connection Type: Wireless (USB, Bluetooth), Interface: USB, Bluetooth, Design: Right-handed, Gaming: No, Optical Sensor Resolution: 8000.0 dpi.",
    link:"https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006560-seryi-106172406/?c=750000000",
    rating: '5/5',
  },{
    id:7,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h03/h02/64026264174622.jpg?format=gallery-medium"],
    name:"Samsung Odyssey G9 C49G95TSSI LC49G95TSSIXCI",
    price:958898,
    description:"Diagonal: 48.9 inches, Resolution: 5120x1440, LCD Matrix Type: TFT *VA, Brightness: 420.0 cd/m², Response Time: 1.0 ms, Max Refresh Rate: 240.0 Hz, Inputs: HDMI, DisplayPort.",
    link:"https://kaspi.kz/shop/p/samsung-odyssey-g9-c49g95tssi-lc49g95tssixci-chernyi-belyi-101114775/?c=750000000",
    rating: '5/5',
  }
  ,{
    id:8,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h17/h7f/64441029918750.jpg?format=gallery-medium"],
    name:"Кварцевые Seiko SSE019J1",
    price:2251300,
    description:"Time Display: Analog (hands), Type: Quartz, Case Material: Titanium, For: Men, Color: Black.",
    link:"https://kaspi.kz/shop/p/kvartsevye-seiko-sse019j1-titan-104529276/?c=750000000",
    rating: '0/5',
  },{
    id:9,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h26/hc5/83559836745758.jpg?format=gallery-medium"],
    name:"Apple iPhone 15 Pro 1Tb",
    price:806704,
    description:"NFC Technology: Yes, Color: Blue, Screen Type: OLED, Super Retina XDR display, Diagonal: 6.1 inches, RAM Size: 8 GB, Processor: 6-core Apple A17 Pro, Internal Storage: 1024.0 GB, Battery Capacity: 3279.0 mAh.",
    link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-sinii-113138344/?c=750000000",
    rating: '5/5',
  },{
    id:10,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hf5/hf5/84077662830622.png?format=gallery-medium"],
    name:"Dyson Gen5detect",
    price:576482,
    description:"Type: Vertical, Cleaning: Dry, Dust Collector Type: Container, Power Consumption: 752.0 W, Power Source: Battery, Color: Purple.",
    link:"https://kaspi.kz/shop/p/dyson-gen5detect-fioletovyi-113592857/?c=750000000",
    rating: '5/5',
  }
];

