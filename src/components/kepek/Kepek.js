import Kep from "../kep/Kep";
import './Kepek.css';

function Kepek({ kepekAdat, setAktKep, aktKep }) {
  return (
    <div className="kepek">
      {kepekAdat.map((kep, index) => {
        return <Kep kepAdat={kep} key={index} setAktKep={setAktKep} aktKep={aktKep} />;
      })}
    </div>
  );
}
export default Kepek;
