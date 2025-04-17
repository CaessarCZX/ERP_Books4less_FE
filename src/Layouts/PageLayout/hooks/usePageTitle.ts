// src/hooks/usePageTitle.ts
import { useEffect } from 'react';

export const usePageTitle = (
  title: string,
  baseTitle: string = 'Books4Less'
) => {
  useEffect(() => {
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
  }, [title, baseTitle]);
};
