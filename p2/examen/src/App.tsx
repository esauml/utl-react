import { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Participantes, Registrar } from "./pages";
import EditarPage from "./pages/Editar/Editar";
import Reducer from "./reducers/ContactosReducer";
import ProtectedRoute from "./routing/ProtectedRoute";
import { Contacto } from "./types/Contacto";
import { getLocalStorage } from "./utilities/localstorage.utility";

const initialState: Contacto[] = [];
const initState = () => JSON.parse(getLocalStorage('asistentes') as string) || initialState;

const App = () => {

  const [state, dispatch] = useReducer(Reducer, initState, initState);
  console.log('state', state);

  useEffect(() => {
    localStorage.setItem('asistentes', JSON.stringify(state));
  }, [state]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Participantes state={state} dispatch={dispatch} />} />
        <Route path="/participantes" element={<Participantes state={state} dispatch={dispatch} />} />
        <Route path="/registro" element={<Registrar state={state} dispatch={dispatch} />} />

        <Route path="/editar/:id" element={
          <ProtectedRoute state={state}>
            <EditarPage state={state} dispatch={dispatch} />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
