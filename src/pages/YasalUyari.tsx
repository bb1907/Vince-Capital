/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scale } from 'lucide-react';
import { LegalPage } from '../components/LegalPage';

export default function YasalUyari() {
  return (
    <LegalPage 
      titleKey="legal.title" 
      contentKey="legal.content" 
      icon={Scale} 
    />
  );
}
