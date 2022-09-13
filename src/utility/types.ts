//interfaz para el agente que envia, puede ser un cliente, un remitente o un recipiente
export interface Agent {
  code: number;
  personalId: number;
  mode: string;
  name: string;
  address: string;
  phoneNumber: number[];
}

// interfaz para el destino y remitente
interface GtUsa {
  sender: "GT";
  recipient: "USA";
}

interface UsaGt {
  sender: "USA";
  recipient: "GT";
}

interface Dollar {
  symbol: "$";
}
interface Quetzal {
  symbol: "Q";
}

export type PackageWay = GtUsa | UsaGt;
export type Currency = Dollar | Quetzal;

// definicion de la interfaz de una sucursal
export interface Subsidiary {
  location: Location;
  phoneNumber?: number;
}

// definicion de una location
interface Location {
  country: string;
  city: string;
  stateProvinceRegion: string;
  zipCode?: string;
  address1?: string;
  address2?: string;
  coordinate?: string;
}
// definicion de la interfaz de un paquete
export interface Package {
  id: string;
  origin: Location;
  destination: Location;
  way: PackageWay;
  sender: Agent;
  recipient: Agent;
  client: Agent;
  weight: number;
  description: string;
  payment: number;
  packageValue: number;
  currency: Currency;
  subsidiary: Subsidiary;
  receivedDate: Date;
  insurance: boolean;
  qrCode?: any;
}
