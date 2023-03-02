import { FC } from "react"

const Card: FC<{ titulo: string, description: string, className: string }> = ({ titulo, description, className }) => {
    const classStyle: string = "my-2 px-5 py-1 sm:mx-4 sm:rounded-xl md:py-2 lg:mx-5 " + className
    return (
        <div className={classStyle}>
            <h1 className="text-xl text-center">{titulo}</h1>
            <div className="text-justify">
                {description}
            </div>
        </div>
    )
}

export default Card