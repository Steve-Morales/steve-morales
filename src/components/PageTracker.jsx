import { usePageTracking } from '../hooks/usePageTracking';

export default function PageTracker({ children }) {
  usePageTracking();
  return children;
}
