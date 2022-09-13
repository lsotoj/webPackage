import Dashboard from "./views/screens/Dashboard";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addPackage } from "./features/package/packageSlice";
import RegisterPackage from "./views/screens/Packages/views/RegisterPackage";

function App() {
  const packages = useAppSelector((state) => state.packages.list);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    console.log("onDispatch");
    dispatch(
      addPackage({
        id: "697521",
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
        receivedDate: new Date(),
        insurance: false,
      })
    );
  };

  return (
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Dashboard />
    </>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
