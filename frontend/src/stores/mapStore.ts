import { create } from "zustand";
import { MarkerType } from "../types/marker";
import { Location } from "../types/Location";

interface MapStore {
  map: google.maps.Map | null;
  setMap: (map: google.maps.Map) => void;
  userLocation: Location | null;
  setUserLocation: (location: Location) => void;
  centerMapOnMarker: (marker: MarkerType) => void;
}

export const useMapStore = create<MapStore>((set, get) => ({
  map: null,
  setMap: (map) => set({ map }),

  userLocation: null,
  setUserLocation: (location) => {
    set({ userLocation: location })
  },

  centerMapOnMarker: (marker) => {
    const map = get().map;
    if (map) {
      const position = new google.maps.LatLng(marker.latitude, marker.longitude);
      map.setCenter(position);
      map.setZoom(18); // Define o nível de zoom do mapa.
    }
  },
}));
