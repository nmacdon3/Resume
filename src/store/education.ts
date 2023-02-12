import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';

import { education } from '~/store/store-backup';
import { db } from '~/contexts/FirebaseContext';

export interface EducationType {
  title: string;
  subTitle: string;
  school: string;
  duration: string;
}

export function useEducation() {
  return useQuery<EducationType[]>(['education'], () =>
    getDocs(collection(db, 'education')).then(
      (r) => r.docs.map((doc) => doc.data()) as EducationType[],
      () => education
    )
  );
}
