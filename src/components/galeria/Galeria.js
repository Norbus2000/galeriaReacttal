import Kepek from "../kepek/Kepek";
import FoKep from "../fokep/FoKep";
import { useState } from "react";
import "./Galeria.css";

function Galeria() {
  const kepek = [
    {
      id: 0,
      cim: "A szép erdő",
      eleresiUt: "kepek/kep1.jpg",
    },
    {
      id: 1,
      cim: "A nagyon szép erdő",
      eleresiUt: "kepek/kep2.jpg",
    },
    {
      id: 2,
      cim: "Az átlagos erdő",
      eleresiUt: "kepek/kep3.jpg",
    },
    {
      id: 3,
      cim: "Az erdő",
      eleresiUt: "kepek/kep4.jpg",
    },
    {
      id: 4,
      cim: "A suttogó erdő",
      eleresiUt: "kepek/kep5.jpg",
    },
  ];

  const [aktKep, setAktKep] = useState(0);

  const handleBalra = () => {
    setAktKep((aktKep) =>
    aktKep === 0 ? kepek.length - 1 : aktKep - 1
    );
  };
  const handleJobbra = () => {
    setAktKep((aktKep) =>
      aktKep === kepek.length - 1 ? 0 : aktKep + 1
    );
  };
  return (
    <div className="galeria">
      <h1 className="udvozles">Üdvözöllek egy erdő galériában!</h1>
      <FoKep
        kepekAdat={kepek[aktKep]}
        handleJobbra={handleJobbra}
        handleBalra={handleBalra}
        aktKep={aktKep}
        setAktKep={setAktKep}
      />
      <Kepek kepekAdat={kepek} setAktKep={setAktKep} aktKep={aktKep} />
    </div>
  );
}
export default Galeria;
