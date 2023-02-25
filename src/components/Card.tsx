import { FC } from "react"

const Card: FC<{ titulo: string, description: string, className: string }> = ({ titulo, description, className }) => {
    const classStyle: string = "my-2 px-2 py-1 md:mx-4 md:rounded-xl lg:mx-5 " + className
    return (
        <div className={classStyle}>
            <h1 className="text-xl text-center">{titulo}</h1>
            <div>
                {description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatem maiores, id pariatur laudantium repellat! Nemo cum dolor illum iste sint exercitationem, adipisci ipsam illo? Eveniet architecto expedita dolores debitis?
            </div>

        </div>
    )
}

export default Card