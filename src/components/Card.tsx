import { FC } from "react"

const Card: FC<{titulo: string, description: string}> = ({titulo,description}) => {
    return (
        <>
            <h1>{titulo}</h1>
            <div>
                {description}
            </div>

        </>

    )
}

export default Card