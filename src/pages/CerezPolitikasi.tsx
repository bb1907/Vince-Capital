/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cookie } from 'lucide-react';
import { LegalPage } from '../components/LegalPage';

export default function CerezPolitikasi() {
  return (
    <LegalPage 
      titleKey="cookies.title" 
      contentKey="cookies.content" 
      icon={Cookie} 
    />
  );
}
