import Card from "./Card";
import Flex from "./Flex";

const cards = [
  {
    title: 'Spider Man',
    img: "https://preview.redd.it/j2sxlmpk85091.jpg?width=640&crop=smart&auto=webp&s=745e8b3e339b0fa059eedfe0325b21593624a181",
  },
  {
    title: 'Superman',
    img: "https://preview.redd.it/redownloaded-reddit-just-to-say-that-no-character-in-v0-f2ufmu6atvl91.jpg?width=640&crop=smart&auto=webp&s=6eb7e2d0938601816528b411599dbde0f4fad8ee",
  },
  {
    title: 'Hellboy',
    img: "https://static.wikia.nocookie.net/hellboy/images/0/08/Hellboy_2.jpg/revision/latest?cb=20080103220603",
  }
]

export default function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => <Card key={index} title={card.title} image={card.img} />)}
      </div>
      <Flex className="bg-purple-600 pd-16 text-purple-100">
        <span>Child tag one</span>

        <span>Child tag two</span>

        <span>Child tag three</span>
      </Flex>
    </main>
  );
}