import { ChangeEvent, FC } from "react"
import React, { useState } from 'react';

const Form: FC<{}> = ({ }) => {
    //const classStyle: string = "my-2 px-2 py-1 md:mx-4 md:rounded-xl lg:mx-5 " + className

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [asistencia, setAsistencia] = useState('');

     const handleNombreChange = (event: ChangeEvent<HTMLInputElement>) => {
         setNombre(event.target.value);
       };
    
    //   const handleApellidosChange = (event) => {
    //     setApellidos(event.target.value);
    //   };
    
    //   const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    //   };
    
    //   const handleTelefonoChange = (event) => {
    //     setTelefono(event.target.value);
    //   };
    
    //   const handleLocalidadChange = (event) => {
    //     setLocalidad(event.target.value);
    //   };
    
    //   const handleAsistenciaChange = (event) => {
    //     setAsistencia(event.target.value);
    //   };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(`
    //       Nombre: ${nombre}
    //       Apellidos: ${apellidos}
    //       Email: ${email}
    //       Teléfono: ${telefono}
    //       Localidad: ${localidad}
    //       Asistencia: ${asistencia}
    //     `);
    // };


    return (
        <>
            <h2 className="text-center uppercase text-2xl ">formulario de asistencia:</h2>
            {/* <div className="mx-5 text-red-400 text-center">
                En proceso de creación
            </div> */}
            <div className=" p-4">
                <form className="border-red-300 border-2 p-4 rounded-lg shadow-md">
                    <div className="grid grid-cols-2">
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
                    <div className="mb-4 mx-2">
                        <label htmlFor="apellidos" className="block font-bold mb-2">
                            Apellidos:
                        </label>
                        <input
                            type="text"
                            id="apellidos"
                            name="apellidos"
                            value={apellidos}
                            // onChange={handleApellidosChange}
                            placeholder="Escribe tus apellidos"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        </div>
                        </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            // onChange={handleEmailChange}
                            placeholder="Escribe tu email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telefono" className="block text-gray-700 font-bold mb-2">
                            Teléfono:
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={telefono}
                        />
                    </div>

                <input type="submit" value="Enviar" />
                </form>
            </div>
        </>
    )
}

export default Form