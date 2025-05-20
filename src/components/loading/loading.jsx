import "./loading.css";
import logo from "../../assets/logo-renoptik.jpg";

export function Loading() {
  return (
    <div className="loading">
      <img
        src={logo}
        alt="Rénoptik"
      />
    </div>
  );
}
