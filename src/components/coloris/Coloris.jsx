import { useTheme } from "../../context/ThemeContext";
import "./coloris.css";

export function Coloris() {
  const { currentTheme, changeTheme, themes } = useTheme();

  return (
    <div className="coloris-page">
      <div className="coloris-container">
        <div className="coloris-header">
          <h1>Personnalisez Votre Expérience</h1>
          <p>Choisissez le thème de couleurs qui vous correspond</p>
        </div>

        <div className="themes-grid">
          {Object.entries(themes).map(([key, theme]) => (
            <div
              key={key}
              className={`theme-card ${currentTheme === key ? 'theme-card-active' : ''}`}
              onClick={() => changeTheme(key)}
            >
              <div className="theme-preview">
                <div
                  className="theme-color-primary"
                  style={{ background: theme.preview.primary }}
                />
                <div
                  className="theme-color-secondary"
                  style={{ background: theme.preview.secondary }}
                />
                <div
                  className="theme-color-accent"
                  style={{ background: theme.preview.accent }}
                />
              </div>

              <div className="theme-info">
                <h3>{theme.name}</h3>
                {currentTheme === key && (
                  <div className="theme-active-badge">
                    <span className="checkmark">✓</span> Actif
                  </div>
                )}
              </div>

              <div className="theme-gradient-preview" style={{
                background: `linear-gradient(135deg, ${theme.preview.primary}, ${theme.preview.secondary}, ${theme.preview.accent})`
              }} />
            </div>
          ))}
        </div>

        <div className="coloris-footer">
          <p>Votre choix est automatiquement sauvegardé</p>
        </div>
      </div>
    </div>
  );
}
