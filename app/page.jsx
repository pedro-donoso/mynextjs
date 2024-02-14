"use client"

export default function HomePage(){

    return <section>
        <h1>Hola mundo</h1>
        <button onClick={() => {
            alert('Viene del Frontend')
        }}>
            Click
        </button>
    </section>

}