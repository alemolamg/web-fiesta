import { ChangeEvent, FC, FormEventHandler } from "react"
import React, { useState } from 'react';
import { supabase } from "@/supabaseClient";

const Form: FC<{}> = ({ }) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [localidad, setLocalidad] = useState("");


    const handleLocalidadChange = (event: ChangeEvent<HTMLInputElement>) => {
        // setLocalidad(event.target.value)
        "lucena";
    };


    const handleNombreChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handleApellidosChange = (event: ChangeEvent<HTMLInputElement>) => {
        setApellidos(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleTelefonoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTelefono(event.target.value);
    };


    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        console.log(`
           Nombre: ${nombre}
           Apellidos: ${apellidos}
           Email: ${email}
           Teléfono: ${telefono}
           Localidad: Lucena
         `);
        await supabase.from("personas").insert({
            nombre, apellidos, email, telefono, lugar: "lucena"
        })

        var formInfo = document.getElementById("formInfo") as HTMLDivElement;
        formInfo.style.display = "block";

        setTimeout(() => {
            formInfo.style.display = "none";
        }, 4500); // Ocultar el div después de 2 segundos

    };

    return (
        <>
            <h2 className="text-center uppercase text-2xl mt-2">formulario de asistencia:</h2>
            {/* <div className="mx-5 text-red-400 text-center">
                En proceso de creación
            </div> */}
            <div className=" px-4 py-2">
                <form className=" p-4 rounded-lg" onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-2">
                        <div className="mb-4 mb:mx-2">
                            <label htmlFor="nombre" className="block font-bold mb-2">
                                Nombre:
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                onChange={handleNombreChange}
                                placeholder="Escribe tu nombre"
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4 lg:mx-2">
                            <label htmlFor="apellidos" className="block font-bold mb-2">
                                Apellidos:
                            </label>
                            <input
                                type="text"
                                id="apellidos"
                                name="apellidos"
                                value={apellidos}
                                onChange={handleApellidosChange}
                                placeholder="Escribe tus apellidos"
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2">
                        <div className="mb-4 md:mx-0">
                            <label htmlFor="email" className="block font-bold mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Escribe tu email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4 lg:mx-2">
                            <label htmlFor="telefono" className="block font-bold mb-2">
                                Teléfono:
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                placeholder="Escribe tu teléfono"
                                onChange={handleTelefonoChange}
                                value={telefono}
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    </div>

                    <h2 id="formInfo" className="hidden my-3 py-2 text-green-600 uppercase text-2xl text-center">Formulario Enviado</h2>

                    <div className="flex justify-center my-3 py-1">
                        <button
                            type="submit"
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Form