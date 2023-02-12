import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '~/contexts/FirebaseContext';

export interface SkillType {
  skill: string;
}

export function useTechnicalSkills() {
  return useQuery(['skills', 'technical'], () =>
    getDocs(collection(db, 'skills_technical')).then(
      (r) => r.docs.map((doc) => doc.data()) as SkillType[]
    )
  );
}

export function useLeadershipSkills() {
  return useQuery(['skills', 'leadership'], () =>
    getDocs(collection(db, 'skills_leadership')).then(
      (r) => r.docs.map((doc) => doc.data()) as SkillType[]
    )
  );
}
