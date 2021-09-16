import Loadable from "react-loadable";
import { Loading } from "../../components";

const Home = Loadable({
    loader: () => import("../../containers/Home"),
    loading: Loading
});

export default Home;
