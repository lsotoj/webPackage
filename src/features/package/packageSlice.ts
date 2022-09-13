import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import * as types from "../../utility/types";
import { v4 as uuidv4 } from "uuid";

const idInitialState = uuidv4();
const dateInitialState = new Date();

const initialState: { list: types.Package[] } = {
  list: [
    {
      id: idInitialState,
      origin: {
        country: "Guatemala",
        city: "Guatemala",
        stateProvinceRegion: "SJP",
        coordinate: "19065",
      },
      destination: {
        country: "United States",
        city: "New York",
        stateProvinceRegion: "SJP",
        coordinate: "36598",
      },
      way: { sender: "GT", recipient: "USA" },
      sender: {
        code: 2658,
        personalId: 212970045,
        mode: "sender",
        name: "Luis",
        address: "2 av 1-33",
        phoneNumber: [269877125],
      },
      recipient: {
        code: 2658,
        personalId: 212970045,
        mode: "sender",
        name: "Luis",
        address: "2 av 1-33",
        phoneNumber: [269877125],
      },
      client: {
        code: 2658,
        personalId: 212970045,
        mode: "sender",
        name: "Luis",
        address: "2 av 1-33",
        phoneNumber: [269877125],
      },
      weight: 25,
      description: "Comida",
      payment: 20,
      packageValue: 150,
      currency: { symbol: "$" },
      subsidiary: {
        location: {
          country: "Guatemala",
          city: "Guatemala",
          stateProvinceRegion: "SJP",
          coordinate: "19065",
        },
        phoneNumber: 369874,
      },
      receivedDate: dateInitialState,
      insurance: false,
    },
  ],
};

//creando el slice y reducers
export const PackageSlice = createSlice({
  name: "packages",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPackage: (state, action: PayloadAction<types.Package>) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addPackage } = PackageSlice.actions;

export const selectPackages = (state: RootState) => state.packages.list;
export default PackageSlice.reducer;
