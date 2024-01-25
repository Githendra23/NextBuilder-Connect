import { redirect } from "next/navigation";
import "./globals.css";

const Home = () => {
  redirect("/login");
};

export default Home;
