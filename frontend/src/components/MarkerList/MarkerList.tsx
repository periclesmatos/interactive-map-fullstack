import { deleteMarker } from '../../services/markerService';
import { useMarkerStore } from '../../stores/markerStore';
import { useMapStore } from '../../stores/mapStore';
import { calcularDistancia } from '../../utils/mapUtils'
import styles from './MarkerList.module.css';

const MarkerList = () => {
  const userLocation = useMapStore((state) => state.userLocation);
  const markers = useMarkerStore((state) => state.markers);
  const removeMarker = useMarkerStore((state) => state.removeMarker);
  const centerMapOnMarker = useMapStore((state) => state.centerMapOnMarker);

  // Função para lidar com a exclusão de um marcador
  const handleDelete = async (id: number) => {
    try {
      deleteMarker(id); // Chama a função de exclusão da API
      removeMarker(id); // Remove o marcador do store
    } catch (error) {
      console.error('Erro ao excluir o marcador:', error);
    }
  };

  const getDistanciaKm = (marker: (typeof markers)[0]) => {
    if (!userLocation) return undefined;
    return calcularDistancia(
      userLocation.lat,
      userLocation.lng,
      marker.latitude,
      marker.longitude
    );
  };

  const sortedMarkers = [...markers].sort((a, b) => {
    const distanciaA = getDistanciaKm(a) ?? Infinity;
    const distanciaB = getDistanciaKm(b) ?? Infinity;
    return distanciaA - distanciaB; // menor distância primeiro
  });

  return (
    <section className={styles.marker_list_container}>
      <h2 className={styles.header_list}>Marcadores</h2>
      <ul className={styles.marker_list}>
        {sortedMarkers.map((marker) => (
          <li key={marker.id} className={styles.marker_item}>
            <h3>{marker.titulo}</h3>
            <p>{marker.descricao}</p>
            <p>
              Distancia:
              {getDistanciaKm(marker) !== undefined
                ? ' ' + getDistanciaKm(marker)?.toFixed(2) + ' km'
                : 'calculando...'}
            </p>
            <div className='marker-buttons'>
              <button
                className='btn-ver'
                onClick={() => centerMapOnMarker(marker)}
              >
                Ver no Mapa
              </button>
              <button
                className='btn-excluir'
                onClick={() => handleDelete(marker.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MarkerList;
