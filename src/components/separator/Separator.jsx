import "./separator.css";

export function Separator({ variant = "wave1", flip = false, gradient = true }) {
  const variants = {
    wave1: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="separator-svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgba(26, 115, 232, 0.6)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "rgba(245, 158, 11, 0.5)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgba(16, 185, 129, 0.6)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={gradient ? "url(#gradient1)" : "rgba(255, 255, 255, 0.5)"}
          className="separator-fill"
        />
      </svg>
    ),
    wave2: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="separator-svg"
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgba(245, 158, 11, 0.6)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "rgba(16, 185, 129, 0.5)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgba(26, 115, 232, 0.6)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={gradient ? "url(#gradient2)" : "rgba(255, 255, 255, 0.5)"}
          className="separator-fill"
        />
      </svg>
    ),
    wave3: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="separator-svg"
      >
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgba(16, 185, 129, 0.6)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "rgba(26, 115, 232, 0.5)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgba(245, 158, 11, 0.6)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill={gradient ? "url(#gradient3)" : "rgba(255, 255, 255, 0.5)"}
          className="separator-fill"
        />
      </svg>
    ),
    curve: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="separator-svg"
      >
        <defs>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgba(26, 115, 232, 0.5)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "rgba(245, 158, 11, 0.6)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgba(26, 115, 232, 0.5)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill={gradient ? "url(#gradient4)" : "rgba(255, 255, 255, 0.5)"}
          className="separator-fill"
        />
      </svg>
    ),
    tilt: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="separator-svg"
      >
        <polygon
          points="1200,120 0,0 0,120"
          className="separator-fill"
        />
      </svg>
    ),
    arrow: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="separator-svg"
      >
        <path
          d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
          className="separator-fill"
        />
        <path
          d="M1200 120L0 0 0 120z"
          className="separator-fill"
        />
      </svg>
    ),
    triangle: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="separator-svg"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="separator-fill"
        />
      </svg>
    ),
    split: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="separator-svg"
      >
        <path
          d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
          className="separator-fill"
        />
      </svg>
    ),
  };

  return (
    <div className={`separator ${flip ? "separator-flip" : ""}`}>
      {variants[variant] || variants.wave1}
    </div>
  );
}
