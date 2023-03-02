import { ChangeEvent, FC, FormEventHandler } from "react"
import React, { useState } from 'react';
import { supabase } from "@/supabaseClient";

const Form: FC<{}> = ({ }) => {
    //const classStyle: string = "my-2 px-2 py-1 md:mx-4 md:rounded-xl lg:mx-5 " + className

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    // const [localidad, setLocalidad] = useState('');
    const [localidad, setLocalidad] = useState("");


    const handleLocalidadChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLocalidad(event.target.value);
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

    // const handleAsistenciaChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setAsistencia(event.target.value);
    // };

     const handleSubmit: FormEventHandler<HTMLFormElement> = async (event ) => {
         event.preventDefault();
         console.log(`
           Nombre: ${nombre}
           Apellidos: ${apellidos}
           Email: ${email}
           Teléfono: ${telefono}
           Localidad: ${localidad}
         `);
         await supabase.from("personas").insert({
             nombre, apellidos, email, telefono, lugar: localidad
         })
     };

    return (
        <>
            <h2 className="text-center uppercase text-2xl ">formulario de asistencia:</h2>
            {/* <div className="mx-5 text-red-400 text-center">
                En proceso de creación
            </div> */}
            <div className=" p-4">
                <form className="border-red-300 border-2 p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2">
                        <div className="mb-4 mx-2">
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
                                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4 md:mx-2">
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
                    <div className="grid grid-cols-2">
                        <div className="mb-4 md:mx-2">
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
                        <div className="mb-4 md:mx-2">
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

                    <div className="mb-4">
                        <span className="block font-bold mb-2">
                            ¿En qué localidades estás interesado/a?
                        </span>
                        <label htmlFor="localidades-lucena" className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                id="localidades-lucena"
                                name="localidad"
                                value={"lucena"}
                                checked={localidad === "lucena"}
                                onChange={handleLocalidadChange}
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2">Lucena</span>
                        </label>
                        <label htmlFor="localidades-malaga" className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                id="localidades-malaga"
                                name="localidad"
                                value={"malaga"}
                                checked={localidad === "malaga"}
                                onChange={handleLocalidadChange}
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2">Málaga</span>
                        </label>
                        <label htmlFor="localidad" className="inline-flex items-center">
                            <input
                                type="radio"
                                id="localidades-ambas"
                                name="localidad"
                                value={"ambas"}
                                checked={localidad === "ambas"}
                                onChange={handleLocalidadChange}
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 ">Ambas</span>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-yellow-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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