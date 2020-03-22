export default function Project({ title, description, image, link }) {
  return (
    <a href={link} target="_blank" rel="noopener">
      <div className="relative mx-4 mb-6 text-center shadow-2xl mx:px-0">
        <img
          src={image}
          className="w-full h-auto rounded object-fit"
          alt={"Imagem do projeto " + title}
        />
        <div
          className="absolute bottom-0 w-full p-4"
          style={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(5,5,5,0.5)",
            borderBottomLeftRadius: "0.25rem",
            borderBottomRightRadius: "0.25rem"
          }}
        >
          <h2 className="text-xl font-semibold text-gray-100 md:text-3xl">
            {title}
          </h2>
          <p className="text-xs font-thin text-gray-100 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}
