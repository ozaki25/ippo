import { useLocation } from 'react-router-dom';

function useTab() {
  const location = useLocation();
  return new URLSearchParams(location.search).get('tab') || null;
}

export default useTab;
