export default function Project({ title, description, image }) {
  return (
    <div className="px-4 pb-6 text-center mx:px-0">
      <img
        src={image}
        className="w-full rounded shadow-lg"
        alt={"Imagem do projeto " + title}
      />
      <h2 className="mt-4 text-3xl font-semibold text-gray-100">{title}</h2>
      <p className="font-thin text-gray-100">{description}</p>
    </div>
  )
}
