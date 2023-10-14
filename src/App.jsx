import { createRoutesFromElements, 
  createBrowserRouter,
  RouterProvider, 
  Route 
} from "react-router-dom"
import Layout from "./components/Layout"
import Welcome from "./Pages/Welcome"
import Login from "./Pages/Login"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Board from "./Pages/Board"
import { ThemeProvider } from "./Context/themeContext"
import FaqPage from "./Pages/FaqPage"
import NotesBoard from "./components/NotesBoard"
import { NoteProvider } from "./Context/noteContext"
import FavNotes from "./components/FavNotes"
import Contact from "./Pages/Contact"
import PasswordReset from "./components/PasswordReset"


const routes = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Layout />}>
    <Route index element={<Welcome />} />
    <Route path="faqs" element={<FaqPage />} />
    <Route path="contact" element={<Contact />} />
    <Route path="signup" element={<Login />}>
      <Route index element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="pswrd-reset" element={<PasswordReset />} />
    </Route>
  </Route>
  <Route path="/board" element={<Board />}>
    <Route 
    index 
    element={<NotesBoard />} 
    />
    <Route path="favorites" element={<FavNotes />} />
  </Route>
  </>
))


function App() {
  return(
    <ThemeProvider>
      <NoteProvider>
        <RouterProvider router={routes} />
      </NoteProvider>
    </ThemeProvider>
  )
}

export default App;
