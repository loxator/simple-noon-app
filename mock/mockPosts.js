const posts = [
  {
    id: 0,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 348,
    postImg: "https://picsum.photos/id/126/600",
    noOfLikes: 692,
    isFavorite: true,
  },
  {
    id: 1,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 699,
    postImg: "https://picsum.photos/id/318/600",
    noOfLikes: 788,
    isFavorite: true,
  },
  {
    id: 2,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 738,
    postImg: "https://picsum.photos/id/128/600",
    noOfLikes: 354,
    isFavorite: false,
  },
  {
    id: 3,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 502,
    postImg: "https://picsum.photos/id/379/600",
    noOfLikes: 348,
    isFavorite: true,
  },
  {
    id: 4,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 102,
    postImg: "https://picsum.photos/id/289/600",
    noOfLikes: 916,
    isFavorite: true,
  },
  {
    id: 5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 212,
    postImg: "https://picsum.photos/id/351/600",
    noOfLikes: 410,
    isFavorite: false,
  },
  {
    id: 6,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 728,
    postImg: "https://picsum.photos/id/365/600",
    noOfLikes: 318,
    isFavorite: false,
  },
  {
    id: 7,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 267,
    postImg: "https://picsum.photos/id/429/600",
    noOfLikes: 466,
    isFavorite: true,
  },
  {
    id: 8,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 217,
    postImg: "https://picsum.photos/id/232/600",
    noOfLikes: 803,
    isFavorite: false,
  },
  {
    id: 9,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 993,
    postImg: "https://picsum.photos/id/119/600",
    noOfLikes: 238,
    isFavorite: true,
  },
  {
    id: 10,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 750,
    postImg: "https://picsum.photos/id/399/600",
    noOfLikes: 403,
    isFavorite: true,
  },
  {
    id: 11,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 652,
    postImg: "https://picsum.photos/id/358/600",
    noOfLikes: 211,
    isFavorite: true,
  },
  {
    id: 12,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 177,
    postImg: "https://picsum.photos/id/469/600",
    noOfLikes: 792,
    isFavorite: false,
  },
  {
    id: 13,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 920,
    postImg: "https://picsum.photos/id/171/600",
    noOfLikes: 865,
    isFavorite: true,
  },
  {
    id: 14,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 774,
    postImg: "https://picsum.photos/id/421/600",
    noOfLikes: 211,
    isFavorite: true,
  },
  {
    id: 15,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 712,
    postImg: "https://picsum.photos/id/212/600",
    noOfLikes: 224,
    isFavorite: false,
  },
  {
    id: 16,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 508,
    postImg: "https://picsum.photos/id/371/600",
    noOfLikes: 738,
    isFavorite: false,
  },
  {
    id: 17,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 356,
    postImg: "https://picsum.photos/id/475/600",
    noOfLikes: 876,
    isFavorite: true,
  },
  {
    id: 18,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 120,
    postImg: "https://picsum.photos/id/187/600",
    noOfLikes: 870,
    isFavorite: false,
  },
  {
    id: 19,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 621,
    postImg: "https://picsum.photos/id/186/600",
    noOfLikes: 990,
    isFavorite: true,
  },
  {
    id: 20,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 207,
    postImg: "https://picsum.photos/id/200/600",
    noOfLikes: 384,
    isFavorite: true,
  },
  {
    id: 21,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 61,
    postImg: "https://picsum.photos/id/436/600",
    noOfLikes: 236,
    isFavorite: false,
  },
  {
    id: 22,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 965,
    postImg: "https://picsum.photos/id/202/600",
    noOfLikes: 530,
    isFavorite: true,
  },
  {
    id: 23,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 138,
    postImg: "https://picsum.photos/id/112/600",
    noOfLikes: 615,
    isFavorite: false,
  },
  {
    id: 24,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 161,
    postImg: "https://picsum.photos/id/193/600",
    noOfLikes: 191,
    isFavorite: true,
  },
  {
    id: 25,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 573,
    postImg: "https://picsum.photos/id/342/600",
    noOfLikes: 376,
    isFavorite: false,
  },
  {
    id: 26,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 688,
    postImg: "https://picsum.photos/id/288/600",
    noOfLikes: 409,
    isFavorite: true,
  },
  {
    id: 27,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 227,
    postImg: "https://picsum.photos/id/482/600",
    noOfLikes: 644,
    isFavorite: false,
  },
  {
    id: 28,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 847,
    postImg: "https://picsum.photos/id/260/600",
    noOfLikes: 478,
    isFavorite: true,
  },
  {
    id: 29,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 107,
    postImg: "https://picsum.photos/id/453/600",
    noOfLikes: 137,
    isFavorite: false,
  },
  {
    id: 30,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 583,
    postImg: "https://picsum.photos/id/329/600",
    noOfLikes: 665,
    isFavorite: false,
  },
  {
    id: 31,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 335,
    postImg: "https://picsum.photos/id/103/600",
    noOfLikes: 215,
    isFavorite: true,
  },
  {
    id: 32,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 991,
    postImg: "https://picsum.photos/id/469/600",
    noOfLikes: 610,
    isFavorite: false,
  },
  {
    id: 33,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 183,
    postImg: "https://picsum.photos/id/851/600",
    noOfLikes: 155,
    isFavorite: false,
  },
  {
    id: 34,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 944,
    postImg: "https://picsum.photos/id/250/600",
    noOfLikes: 236,
    isFavorite: false,
  },
  {
    id: 35,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 359,
    postImg: "https://picsum.photos/id/143/600",
    noOfLikes: 943,
    isFavorite: false,
  },
  {
    id: 36,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 471,
    postImg: "https://picsum.photos/id/321/600",
    noOfLikes: 647,
    isFavorite: true,
  },
  {
    id: 37,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 474,
    postImg: "https://picsum.photos/id/178/600",
    noOfLikes: 342,
    isFavorite: true,
  },
  {
    id: 38,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 898,
    postImg: "https://picsum.photos/id/251/600",
    noOfLikes: 700,
    isFavorite: false,
  },
  {
    id: 39,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 467,
    postImg: "https://picsum.photos/id/911/600",
    noOfLikes: 859,
    isFavorite: false,
  },
  {
    id: 40,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 435,
    postImg: "https://picsum.photos/id/373/600",
    noOfLikes: 732,
    isFavorite: false,
  },
  {
    id: 41,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 191,
    postImg: "https://picsum.photos/id/468/600",
    noOfLikes: 56,
    isFavorite: false,
  },
  {
    id: 42,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 714,
    postImg: "https://picsum.photos/id/165/600",
    noOfLikes: 630,
    isFavorite: true,
  },
  {
    id: 43,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 795,
    postImg: "https://picsum.photos/id/244/600",
    noOfLikes: 562,
    isFavorite: true,
  },
  {
    id: 44,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 467,
    postImg: "https://picsum.photos/id/157/600",
    noOfLikes: 887,
    isFavorite: true,
  },
  {
    id: 45,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 178,
    postImg: "https://picsum.photos/id/477/600",
    noOfLikes: 366,
    isFavorite: true,
  },
  {
    id: 46,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 288,
    postImg: "https://picsum.photos/id/204/600",
    noOfLikes: 343,
    isFavorite: false,
  },
  {
    id: 47,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 328,
    postImg: "https://picsum.photos/id/108/600",
    noOfLikes: 864,
    isFavorite: true,
  },
  {
    id: 48,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 518,
    postImg: "https://picsum.photos/id/434/600",
    noOfLikes: 233,
    isFavorite: false,
  },
  {
    id: 49,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: 450,
    postImg: "https://picsum.photos/id/118/600",
    noOfLikes: 8,
    isFavorite: true,
  },
];

export default posts;
