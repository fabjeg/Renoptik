import "./button.css";

export function ButtonContact() {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="btn-contact"
      onClick={handleClick}
    >
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="none"
              d="M0 0h24v24H0z"
            />
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            />
          </svg>
        </div>
      </div>
      <span>Contact</span>
    </button>
  );
}
