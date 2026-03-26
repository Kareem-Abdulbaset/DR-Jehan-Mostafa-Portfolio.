/**
 * Statistics Data
 *
 * Contains statistics displayed in Hero and About sections.
 *
 * @module data/stats
 */

import { CERTIFICATES_COUNT } from '@/data/certificates';
import type { StatItem, Stats } from '@/types/data';

/**
 * Main statistics
 */
export const stats: Stats = {
  years: 5,
  certifications: CERTIFICATES_COUNT,
  clients: '500+',
  availability: 'Online',
};

/**
 * Detailed stat items for display
 */
export const statItems: StatItem[] = [
  {
    id: 'years',
    value: 5,
    label: 'Years Experience',
    suffix: '+',
    icon: '📅',
    description: 'Years of professional experience in clinical nutrition',
    animationDuration: 2000,
  },
  {
    id: 'certifications',
    value: CERTIFICATES_COUNT,
    label: 'Certifications',
    icon: '🏆',
    description: 'Professional certifications and credentials',
    animationDuration: 1500,
  },
  {
    id: 'clients',
    value: '500',
    label: 'Happy Clients',
    suffix: '+',
    icon: '😊',
    description: 'Satisfied clients who achieved their health goals',
    animationDuration: 2500,
  },
  {
    id: 'availability',
    value: '24/7',
    label: 'Online Support',
    icon: '💬',
    description: 'Available for online consultations',
    animationDuration: 1000,
  },
];

/**
 * Get stat item by ID
 */
export const getStatById = (id: string): StatItem | undefined =>
  statItems.find((item) => item.id === id);
