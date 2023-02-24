import { FC } from "react"

const Card: FC<{titulo: string}> = ({titulo}) => {
    return (
        <>
            <h1>{titulo}</h1>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem harum perferendis laborum excepturi consequatur impedit, libero velit, sint, quod magni adipisci consectetur! Harum ratione sapiente consectetur consequuntur, quisquam excepturi.
            </div>

        </>

    )
}

export default Card