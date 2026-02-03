import { useEffect } from 'react';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | Built Rite Creations` : 'Built Rite Creations';

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
