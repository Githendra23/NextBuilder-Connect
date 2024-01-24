import { redirect, useRouter } from "next/navigation";

const Home = () => {
  redirect("/login");
};

export default Home;
