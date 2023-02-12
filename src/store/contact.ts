import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';

import { contactInfo } from '~/store/store-backup';
import { db } from '~/contexts/FirebaseContext';

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export function useContactInfo() {
  return useQuery<ContactInfo>(['contact_info'], () =>
    getDoc(doc(db, 'contact_info', '1')).then(
      (r) => r.data() as ContactInfo,
      () => contactInfo
    )
  );
}
