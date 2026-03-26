import type { Certificate } from '@/types/certificate';

/**
 * Dr. Jehan's professional certificates and credentials.
 *
 * Notes:
 * - `order` controls display priority in the certificates grid.
 * - `featured` is reserved for the most strategic credential to highlight.
 */
const certificateData: Certificate[] = [
  {
    id: 'cert-scope',
    title: 'اعتماد SCOPE الدولي البريطاني لأخصائية السمنة الاحترافية',
    issuer: 'الاتحاد العالمي للسمنة - المملكة المتحدة',
    date: '2026',
    image:
      '/images/certificates/أخصائية معتمدة دولياً من الاتحاد العالمي للسمنة من دولة بريطانيا(SCOPE Certified)..jpg',
    category: 'professional',
    description:
      'اعتماد دولي مهني صادر عن الاتحاد العالمي للسمنة بالمملكة المتحدة، يثبت التأهيل الاحترافي في التثقيف المتخصص وإدارة السمنة وفق معايير عالمية معتمدة.',
    featured: true,
    badge: 'اعتماد دولي من بريطانيا',
    highlight: 'SCOPE Certified',
    order: 1,
  },
  {
    id: 'cert-dietcare',
    title: 'شهادة خبرة من DietCare Clinic كأخصائية تغذية',
    issuer: 'DietCare Clinic',
    date: '10 أشهر',
    image:
      '/images/certificates/شهادة خبرة من عيادة DietCare Clinic - أخصائي تغذية.jpg',
    category: 'experience',
    description:
      'توثيق لخبرة عملية في تصميم برامج غذائية مخصصة، ومتابعة تقدم العملاء، والمساهمة في نجاح الخطط العلاجية داخل العيادة.',
    badge: 'خبرة عملية',
    order: 2,
  },
  {
    id: 'cert-better-life',
    title: 'أخصائية تغذية علاجية معتمدة بخبرة ميدانية',
    issuer: 'Better Life Clinics',
    date: '10 أشهر',
    image:
      '/images/certificates/أخصائية تغذية علاجية معتمدة (خبرة ميدانية).jpg',
    category: 'experience',
    description:
      'شهادة خبرة ميدانية في متابعة الحالات وتصميم برامج إنقاص الوزن الغذائية بما يضمن نتائج عملية قابلة للقياس.',
    badge: 'خبرة ميدانية',
    order: 3,
  },
  {
    id: 'cert-1',
    title: 'شهادة مشاركة في دورة تجميل عبر الإنترنت',
    issuer: 'أكاديمية التجميل عبر الإنترنت',
    date: '2023',
    image:
      '/images/certificates/Certificate of Participation in an Online Cosmetology Course.jpg',
    category: 'training',
    description:
      'شهادة مشاركة في دورة تجميل عبر الإنترنت تثبت اجتياز تدريب متخصص في مجال التجميل والعناية بالبشرة.',
    order: 20,
  },
  {
    id: 'cert-2',
    title: 'شهادة خبرة من مركز Be Gold',
    issuer: 'مركز Be Gold',
    date: '2023',
    image:
      '/images/certificates/Certificate of experience at be gold center.jpg',
    category: 'experience',
    description:
      'شهادة خبرة من مركز Be Gold تؤكد الخبرة العملية والمهنية في مجال التغذية والتجميل.',
    order: 21,
  },
  {
    id: 'cert-3',
    title: 'دبلومة التغذية العلاجية من الجامعة الأمريكية للعلوم',
    issuer: 'الجامعة الأمريكية للعلوم',
    date: '2022',
    image:
      '/images/certificates/Clinical nutrition diploma of American University of science.jpg',
    category: 'diploma',
    description: 'مؤهل أكاديمي متخصص في التغذية الإكلينيكية والحميات الطبية.',
    order: 22,
  },
  {
    id: 'cert-4',
    title: 'شهادة في علوم التجميل',
    issuer: 'معهد التجميل',
    date: '2023',
    image: '/images/certificates/Cosmology certification.jpg',
    category: 'professional',
    description:
      'شهادة معتمدة في علوم التجميل تثبت الكفاءة المهنية والتخصصية في مجال التجميل والعناية.',
    order: 23,
  },
  {
    id: 'cert-5',
    title: 'شهادة اللجنة النقابية المهنية',
    issuer: 'اللجنة النقابية للعاملين بخدمات التجميل والصحة',
    date: '2023',
    image:
      '/images/certificates/Issuing Authority The Occupational Syndicate Committee for Workers in Beauty and Health Services (ا.jpg',
    category: 'professional',
    description:
      'اعتماد مهني رسمي صادر عن اللجنة النقابية المهنية للعاملين في خدمات الصحة والجمال.',
    order: 24,
  },
  {
    id: 'cert-6',
    title: 'شهادة عضوية EISNO',
    issuer: 'المنظمة المصرية الدولية لعلوم التغذية (EISNO)',
    date: '2023',
    image: '/images/certificates/Membership certificate of EISNO.jpg',
    category: 'membership',
    description:
      'شهادة عضوية مهنية في المنظمة المصرية الدولية لعلوم التغذية، بما يعكس ارتباطًا مهنيًا مع جهة متخصصة معترف بها.',
    order: 25,
  },
  {
    id: 'cert-7',
    title: 'دبلومة التغذية',
    issuer: 'أكاديمية التغذية',
    date: '2022',
    image: '/images/certificates/Nutrition diploma.jpg',
    category: 'diploma',
    description:
      'دبلومة متخصصة في علوم التغذية والحميات الغذائية والتخطيط للوجبات الصحية.',
    order: 26,
  },
  {
    id: 'cert-8',
    title: 'شهادة خبرة مهنية من مركز Be Gold للتغذية والتجميل',
    issuer: 'مركز Be Gold للتغذية والتجميل',
    date: '2023',
    image:
      '/images/certificates/Professional Certificate of Experience Be Gold Center for Nutrition and Beauty.jpg',
    category: 'experience',
    description:
      'توثيق للخبرة العملية والإنجازات المهنية في التعامل مع الحالات وخطط التغذية والتجميل.',
    order: 27,
  },
];

export const certificates: Certificate[] = [...certificateData].sort(
  (first, second) =>
    (first.order ?? Number.MAX_SAFE_INTEGER) -
    (second.order ?? Number.MAX_SAFE_INTEGER)
);

export const CERTIFICATES_COUNT = certificateData.length;

/**
 * Get featured certificate.
 */
export const getFeaturedCertificate = (): Certificate | undefined => {
  return certificates.find((cert) => cert.featured);
};

/**
 * Get certificates by category.
 */
export const getCertificatesByCategory = (
  category: Certificate['category']
): Certificate[] => {
  return certificates.filter((cert) => cert.category === category);
};
