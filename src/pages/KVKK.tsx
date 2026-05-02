/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck } from 'lucide-react';
import { LegalPage } from '../components/LegalPage';

export default function KVKK() {
  return (
    <LegalPage 
      titleKey="kvkk.title" 
      contentKey="kvkk.content" 
      icon={ShieldCheck} 
    />
  );
}
