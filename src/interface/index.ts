export interface AppState {
  name: string;
  formOpen: boolean;
  heroes: Heroe[];
	selectedHeroe: Heroe | null;
}

export interface Heroe {
  body: string;
  category: string;
  image: string;
  title: string;
  _id: string;
}
