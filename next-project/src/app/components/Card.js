export default function Card({ image, title }) {
  return (
    <div className="flex-grow w-96 bg-grey-60 flex flex-col rounded-lg hover:scale-105 transition-all shadow-lg">
      <img className="rounded-t-lg" src={image} alt="Playa de la Misericordia, Spain" />
      <div className="flex flex-col gap-y-4 px-8 py-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maxime quod a eius veniam sequi atque
          quaerat omnis sed ea sint. Eaque consequatur delectus tenetur, culpa possimus debitis autem voluptatum?
        </p>
        <div className="flex gap-x-4">
          <span className="bg-blue-300 py-2 px-4 rounded-full hover:bg-blue-400 transition-all cursor-pointer active:bg-purple-400">
            #Super Hero
          </span>
          <span className="bg-blue-300 py-2 px-4 rounded-full hover:bg-blue-400 transition-all cursor-pointer active:bg-purple-400">
            #Comic Book
          </span>
          <span className="bg-blue-300 py-2 px-4 rounded-full hover:bg-blue-400 transition-all cursor-pointer active:bg-purple-400">
            #Action
          </span>
        </div>
      </div>
    </div>
  )
}
