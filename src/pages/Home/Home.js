import { Header, Footer } from "../../layout";
import { MoviesList } from "../../components";
import { MovieProvider } from "./../../context";

const HomePage = () => (
  <MovieProvider>
    <Header />
    <MoviesList />
    <Footer />
  </MovieProvider>
);

export { HomePage };
