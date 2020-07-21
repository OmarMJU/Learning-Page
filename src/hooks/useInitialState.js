import { useEffect, useState } from "react";

const useInitialState = (API) => {
    // Se agrega el estado.
    // - videos: El valor del estado.
    // - setVideos: Función que permite actulizar el estado.
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    // Se agrega el ciclo de vida.
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data));
    }, []);

    return videos;
}

export default useInitialState;