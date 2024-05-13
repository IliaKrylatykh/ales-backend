import { ProductDto } from '../src/product/dto/product.dto';

export const ProductsDB: ProductDto[] = [
  {
    id: 1,
    name: 'Chipmunk',
    slug: 'chipmunk',
    description:
      'Adorn your outfit with this charming handmade chipmunk brooch. Crafted with meticulous attention to detail, this delightful accessory features realistic colors and textures, mimicking the lively spirit of a chipmunk. Perfect for adding a touch of nature-inspired whimsy to any ensemble, this brooch is ideal for both casual wear and special occasions.',
    price: 60,
    images: ['1-1.png', '1-2.png', '1-3.png', '1-4.png', '1-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 2,
    name: 'Red panda',
    slug: 'red-panda',
    description:
      'Enhance your wardrobe with this enchanting handmade red panda brooch. This unique accessory captures the adorable essence of a red panda with its rich, fiery hues and detailed facial features. Crafted with precision and care, it serves as a standout piece that adds a playful yet sophisticated touch to any outfit. Ideal for animal lovers and fashion enthusiasts alike, this brooch is sure to spark conversations and admiration.',
    price: 60,
    images: ['2-1.png', '2-2.png', '2-3.png', '2-4.png', '2-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 3,
    name: 'Ferret',
    slug: 'ferret',
    description:
      'Showcase your love for unique wildlife with this exquisite handmade ferret brooch. Designed with intricate details and lifelike colors, this brooch captures the sleek and playful nature of a ferret. It is the perfect accessory to add a touch of whimsy and elegance to any attire, making it a fabulous choice for both everyday flair and special occasions. A must-have for ferret enthusiasts and style connoisseurs alike.',
    price: 60,
    images: ['3-1.png', '3-2.png', '3-3.png', '3-4.png', '3-5.png', '3-6.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 4,
    name: 'Penguin',
    slug: 'penguin',
    description:
      'Embrace the charm of winter with this delightful handmade penguin brooch, complete with a cozy blue hat. This adorable accessory showcases a penguin dressed in vivid contrast against its traditional black and white colors, adding a playful and heartwarming touch. The intricate detailing and cheerful blue hat make it a perfect addition to your winter wardrobe, offering a unique and stylish way to celebrate the season. Ideal for both casual and festive occasions, this brooch is sure to bring smiles and compliments your way.',
    price: 40,
    images: ['4-1.png', '4-2.png', '4-3.png', '4-4.png', '4-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 5,
    name: 'Hedgehog',
    slug: 'hedgehog',
    description:
      'Enhance your accessory collection with this exquisite handmade brooch, featuring an elegantly embroidered hedgehog. Using the smooth satin stitch technique, this brooch brings to life the adorable features and textured spines of a hedgehog with rich, natural colors. Perfect for adding a sophisticated yet playful touch to any outfit, this brooch is ideal for those who cherish unique craftsmanship and the enchanting allure of nature',
    price: 45,
    images: ['5-1.png', '5-2.png', '5-3.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 6,
    name: 'Blue bird',
    slug: 'blue-bird',
    description:
      'Adorn your attire with this stunning handmade brooch, artfully embroidered to depict a charming blue bird. This accessory beautifully captures the essence of the bird in flight, with vibrant shades of blue and skillful stitching that accentuates its delicate wings and poised demeanor. Ideal for adding a touch of elegance and nature-inspired beauty to any ensemble, this brooch is perfect for those who appreciate exquisite craftsmanship and the serene grace of birds.',
    price: 45,
    images: ['6-1.png', '6-2.png', '6-3.png', '6-4.png', '6-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {
      youtube: 'https://youtube.com/actioncams',
      instagram: 'https://instagram.com/actioncams'
    }
  },
  {
    id: 7,
    name: 'Among us',
    slug: 'among-us',
    description:
      'Show off your gamer flair with this vibrant handmade brooch, featuring characters from the popular video game Among Us. Each brooch is meticulously embroidered in an array of bold colors, capturing the distinct, minimalist design of the games crewmates. Available in multiple colors, these brooches allow you to personalize your look or match your favorite in-game character. Perfect for gaming events, casual wear, or as a gift for fans of Among Us, these brooches add a playful and colorful touch to any outfit.',
    price: 15,
    images: ['7-1.png', '7-2.png', '7-3.png', '7-4.png', '7-5.png'],
    quantity: 11,
    typeId: 1,
    categoryIds: [3],
    socialLinks: {}
  },
  {
    id: 8,
    name: 'Pansy flowers',
    slug: 'pansy-flowers',
    description:
      'Beautify your wardrobe with this exquisite handmade brooch, adorned with intricately embroidered pansy flowers. Available in a spectrum of vibrant colors, each brooch captures the delicate beauty and unique pattern of pansy petals. The detailed stitching enhances the natural appearance, making each flower seem almost alive. Perfect for adding a touch of springtime elegance to any outfit, this pansy brooch is ideal for floral enthusiasts and anyone looking to infuse their look with a pop of natural charm.',
    price: 15,
    images: [
      '8-1.png',
      '8-2.png',
      '8-3.png',
      '8-4.png',
      '8-5.png',
      '8-6.png',
      '8-7.png',
      '8-8.png',
      '8-9.png',
      '8-10.png'
    ],
    quantity: 6,
    typeId: 1,
    categoryIds: [2],
    socialLinks: {}
  },
  {
    id: 9,
    name: 'Tulip',
    slug: 'tulip',
    description:
      'Embrace the elegance of spring with this beautifully handmade brooch, showcasing a delicately embroidered tulip. This charming accessory features vibrant colors and exquisite detail, capturing the sleek and graceful form of the tulip flower. Perfect for adding a touch of floral sophistication to any attire, this brooch is a splendid choice for those who appreciate the art of embroidery and the timeless beauty of tulips.',
    price: 20,
    images: ['9-1.png', '9-2.png', '9-3.png', '9-4.png', '9-5.png', '9-6.png'],
    quantity: 3,
    typeId: 1,
    categoryIds: [2],
    socialLinks: {}
  },
  {
    id: 10,
    name: 'Pumpkin',
    slug: 'pumpkin',
    description:
      'Welcome the autumn season with this charming handmade brooch, beautifully embroidered with a vibrant pumpkin design. This brooch features rich, warm colors and detailed satin stitching that highlights the pumpkins round shape and iconic ribs. Perfect for festive occasions or adding a seasonal touch to everyday wear, this pumpkin brooch is a delightful accessory for anyone who loves the cozy allure of fall',
    price: 45,
    images: ['10-1.png', '10-2.png', '10-3.png', '10-4.png', '10-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [4],
    socialLinks: {}
  },
  {
    id: 11,
    name: 'Four-leaf clover',
    slug: 'four-leaf-clover',
    description:
      'Carry a symbol of luck wherever you go with this unique handmade brooch-pin, adorned with a beautifully embroidered four-leaf clover. This versatile accessory combines the functionality of a pin and the aesthetic appeal of a brooch, featuring lush green colors and detailed stitching that brings out the charm of the clover. Perfect for St. Patricks Day or as a lucky charm for everyday wear, this brooch-pin is a wonderful gift for anyone who appreciates a touch of whimsy and fortune.',
    price: 25,
    images: ['11-1.png', '11-2.png', '11-3.png', '11-4.png', '11-5.png'],
    quantity: 2,
    typeId: 1,
    categoryIds: [2],
    socialLinks: {}
  },
  {
    id: 12,
    name: 'Little fox',
    slug: 'little-fox',
    description:
      'Add a touch of woodland whimsy to your ensemble with this captivating handmade fox brooch. This charming accessory is intricately embroidered, showcasing the vibrant orange hues and playful demeanor of a fox. Detailed with keen eyes and a bushy tail, this brooch brings a lively and mischievous spirit to any outfit. Perfect for animal lovers and those who appreciate the artistry of embroidery, it is a delightful addition to your accessory collection.',
    price: 45,
    images: ['12-1.png', '12-2.png', '12-3.png', '12-4.png', '12-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 13,
    name: 'Lilac',
    slug: 'lilac',
    description:
      'Infuse your attire with the delicate charm of spring with this exquisite handmade brooch, beautifully embroidered to depict a lilac flower. This piece captures the soft purple hues and fine details of lilac blossoms, evoking the fresh scent and tranquil beauty of a spring garden. Perfect for adding a touch of floral elegance and a pop of color to any outfit, this lilac brooch is ideal for those who appreciate the intricate craft of embroidery and the timeless allure of flowers.',
    price: 30,
    images: ['13-1.png', '13-2.png', '13-3.png', '13-4.png', '13-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [2],
    socialLinks: {}
  },
  {
    id: 14,
    name: 'Calcifer',
    slug: 'calcifer',
    description:
      'Light up your wardrobe with this enchanting handmade brooch, inspired by the fiery spirit of Calcifer from the beloved anime. This brooch is intricately embroidered, capturing the vivid orange and red flames that define Calcifers lively character. With his mischievous eyes and playful expression, this accessory brings a touch of magic and warmth to any outfit. Perfect for anime fans and those who love unique, handcrafted accessories, it is a charming addition to any collection.',
    price: 30,
    images: ['14-1.png', '14-2.png', '14-3.png', '14-4.png', '14-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [3],
    socialLinks: {}
  },
  {
    id: 15,
    name: 'Sheep',
    slug: 'sheep',
    description:
      'Embrace the rustic charm of the countryside with this delightful handmade sheep brooch. Crafted with care, this accessory features detailed embroidery that captures the fluffy texture and gentle expression of a sheep. Its soft white and subtle gray tones bring a touch of calm and warmth, making it a perfect addition to any casual or outdoor ensemble. Ideal for animal lovers and those who appreciate handcrafted artistry, this sheep brooch is a cozy and charming accessory for your collection.',
    price: 30,
    images: ['15-1.png', '15-2.png', '15-3.png', '15-4.png', '15-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 16,
    name: 'Owl',
    slug: 'owl',
    description:
      'Add a touch of wisdom and elegance to your style with this exquisite handmade owl brooch. This accessory showcases detailed embroidery, capturing the majestic stance and piercing gaze of an owl. Rendered in earthy tones with highlights that mimic the natural feather pattern, this brooch is perfect for those who appreciate the beauty of wildlife and the intricate skill of embroidery. It’s an ideal piece for both day-to-day sophistication and evening wear.',
    price: 40,
    images: ['16-1.png', '16-2.png', '16-3.png', '16-4.png', '16-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 17,
    name: 'Parrot with flower',
    slug: 'parrot-with-flower',
    description:
      'Bring a splash of tropical vibrancy to your attire with this stunning handmade brooch, featuring a brightly colored parrot perched beside a blooming flower. This exquisite accessory is crafted with detailed embroidery, highlighting the vivid greens, blues, and reds of the parrots feathers and the delicate petals of the flower. Perfect for adding an exotic and playful element to any outfit, this parrot and flower brooch is ideal for those who love bold, nature-inspired designs and expert craftsmanship.',
    price: 40,
    images: [
      '17-1.png',
      '17-2.png',
      '17-3.png',
      '17-4.png',
      '17-5.png',
      '17-6.png'
    ],
    quantity: 1,
    typeId: 1,
    categoryIds: [1, 2],
    socialLinks: {}
  },
  {
    id: 18,
    name: 'Clownfish',
    slug: 'clownfish',
    description:
      'Dive into the vibrant world of marine life with this eye-catching handmade brooch, beautifully embroidered to resemble a clownfish. This accessory captures the striking orange and white stripes of the clownfish, paired with intricate details that bring this lively sea creature to life. Perfect for ocean enthusiasts or anyone looking to add a splash of color and whimsy to their wardrobe, this clownfish brooch is a delightful nod to the wonders of the underwater world.',
    price: 20,
    images: ['18-1.png', '18-2.png', '18-3.png', '18-4.png', '18-5.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [1],
    socialLinks: {}
  },
  {
    id: 19,
    name: 'Avocado',
    slug: 'avocado',
    description:
      'Showcase your love for healthy eating and quirky style with this charming handmade avocado brooch. This unique accessory features detailed embroidery, depicting the rich green hues and creamy texture of an avocado, complete with a brown pit at its center. Perfect for food enthusiasts or anyone who appreciates playful and distinctive designs, this avocado brooch adds a fun and fresh touch to any outfit, making it a delightful conversation starter.',
    price: 20,
    images: ['19-1.png', '19-2.png', '19-3.png', '19-4.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [4],
    socialLinks: {}
  },
  {
    id: 20,
    name: 'Lemons',
    slug: 'lemons',
    description:
      'Add a zest of style to your jewelry collection with this refreshing set of handmade earrings and a necklace pendant, each adorned with an embroidered lemon. These vibrant accessories capture the bright yellow color and textured peel of fresh lemons, bringing a splash of summer to any outfit. Perfect for those who love unique, nature-inspired designs, this lemon-themed set offers a delightful way to infuse your daily look with a bit of cheer and charm.',
    price: 20,
    images: ['20-1.png', '20-2.png', '20-3.png', '20-4.png'],
    quantity: 1,
    typeId: 2,
    categoryIds: [4],
    socialLinks: {}
  },
  {
    id: 21,
    name: 'Red Queen',
    slug: 'red-queen',
    description:
      'Rule your style kingdom with this striking handmade brooch, featuring an intricately embroidered portrait of the Red Queen from Alice in Wonderland. This commanding accessory showcases the Queens iconic fiery red hair and her imperious expression, set against a regal backdrop of rich colors. Perfect for fans of classic literature and whimsical designs, this Red Queen brooch adds a touch of dramatic flair to any ensemble, ensuring you stand out with royal elegance.',
    price: 35,
    images: ['21-1.png', '21-2.png', '21-3.png', '21-4.png'],
    quantity: 1,
    typeId: 1,
    categoryIds: [2],
    socialLinks: {}
  },
  {
    id: 22,
    name: 'Hairpin with fruit',
    slug: 'hairpin-with-fruit',
    description:
      'Add a burst of natures bounty to your hairstyle with this delightful handmade hair clip, adorned with an array of embroidered fruits and plants. Featuring a colorful medley of designs, from juicy strawberries to lush green leaves, this clip captures the essence of a garden in full bloom. Each element is crafted with detailed stitching, offering a vibrant and playful addition to your accessory collection. Perfect for garden parties or everyday wear, this fruit and plant-themed hair clip brings a fresh and cheerful touch to any look.',
    price: 15,
    images: ['22-1.png', '22-2.png', '22-3.png', '22-4.png', '22-5.png'],
    quantity: 3,
    typeId: 3,
    categoryIds: [2, 4],
    socialLinks: {}
  }
];
