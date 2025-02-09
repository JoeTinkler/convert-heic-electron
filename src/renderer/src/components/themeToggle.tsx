import { themeContext } from "@renderer/providers/theme"
import { useContext } from "react"
import { ToggleIcon } from "./ui/toggle";
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(themeContext);
  const toggleTheme = () => setTheme(theme.name === 'light' ? 'dark' : 'light');
  const checked = theme.name === 'dark';

  return (<ToggleIcon src={checked ? moon : sun} onClick={toggleTheme}  />);
}