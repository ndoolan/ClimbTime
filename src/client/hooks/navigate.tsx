import { useNavigate } from 'react-router-dom';

type handleNavigation = (
  event: React.MouseEvent<HTMLButtonElement>,
  url: string
) => void;

export const handleNavigation: handleNavigation = (event, url: string) => {
  const navigate = useNavigate();
  event.preventDefault();
  navigate(url);
};
