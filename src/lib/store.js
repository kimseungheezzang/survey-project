import {configureStore} from "@reduxjs/toolkit";
import cardReducer from "@/lib/features/alcohol/alcoholSlice"
import locationReducer from "@/lib/features/location/locationSlice"
import placeReducer from "@/lib/features/place/placeSlice"
export default configureStore({
    reducer: {
        card: cardReducer,
        place: locationReducer,
        objectPlace: placeReducer
    }
});