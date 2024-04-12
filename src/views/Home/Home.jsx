import { Avatar, AvatarFallback, AvatarImage } from "../../components/Avatar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="pt-8 px-10">
        <Avatar className="w-16 h-16 mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-slate-500"></AvatarFallback>
        </Avatar>
        <div className="mt-2">
          <h1 className="text-md text-gray-500 font-semibold dark:text-gray-400">
            Juan Da Rosa
          </h1>
          <p className="text-sm  my-4">
            Reserva tu corte en el horario disponible que más cómodo te quede.
            ¡Te espero!
          </p>
        </div>
      </div>
      <Link
        to="/corte de pelo/calendar"
        className="border-t pt-6 py-10 w-full px-10 font-bold hover:bg-gray-200"
      >
        <button className="flex items-center">
          <div className=" rounded-full w-6 h-6 bg-violet-600 mr-4 "></div>
          <p className="text-black text-lg text-left">Corte de pelo</p>
        </button>
      </Link>
    </div>
  );
};

export default Home;
