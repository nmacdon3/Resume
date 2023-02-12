import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';

import { jobs } from '~/store/store-backup';
import { db } from '~/contexts/FirebaseContext';

export interface JobType {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

export function useJobs() {
  return useQuery<JobType[]>(['jobs'], () =>
    getDocs(collection(db, 'jobs')).then(
      (r) => r.docs.map((doc) => doc.data()) as JobType[],
      () => jobs
    )
  );
}
