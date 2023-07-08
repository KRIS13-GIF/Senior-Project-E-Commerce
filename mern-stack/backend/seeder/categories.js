const categories = [
 {
    name: "Books",
    description:
      "We Have a Vast Selection Of Books In Hardcover, Paperback and Audiobook Formats. Enjoy Great Deals and Discounts On an Array Of Products From Various Brands.",
    image: "/images/books-category.png",
    attrs: [{ key: "genre", value: ["movie", "comedy", "thriller"] }],
  },
  {
    name: "Tablets",
    description:
      "Shop a wide selection of Tablets",
    image: "/images/tablets-category.png",
    attrs: [
      { key: "Storage", value: ["124 GB", "256 GB", "500 GB"] },
      { key: "Color", value: ["blue", "red", "green", "black"] },
    ],
  },
  {
    name: "Laptops",
    description:
      "Shop a wide selection of Laptops including 2 in 1 and traditional laptops",
    image: "/images/laptops-category.png",
    attrs: [
      { key: "SSD", value: ["1 TB", "2 TB", "4 TB"] },
      { key: "color", value: ["blue", "red", "green", "black"] },
    ],
  },
  {
    name: "Games",
    description:
      "Play your favorite games on devices you already own right away.",
    image: "/images/games-category.png",
    attrs: [
      { key: "Console", value: ["PS4", "Xbox", "PC"] },
    ],
  },
]

module.exports = categories