import { FC } from "react"

const Card: FC<{ titulo: string, description: string, className: string }> = ({ titulo, description, className }) => {
    const classStyle: string = "px-2 md:mx-2 md:rounded-md " + className
    return (
        <div className={classStyle}>
            <h1 className="text-xl text-center">{titulo}</h1>
            <div>
                {description}
            </div>

        </div>
    )
}

export default Card