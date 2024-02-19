"use client"

export default function HomePage(){

    return <section className="p-4">
    <h1 className="text-2xl font-bold mb-4">Hola mundo</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
        alert('Viene del Frontend')
    }}>
        Click
    </button>
</section>


}