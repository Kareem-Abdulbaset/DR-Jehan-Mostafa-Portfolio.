import Image from 'next/image';
import Link from 'next/link';

export default function FloatingScopeBadge() {
  return (
    <Link
      href="/#certificates"
      aria-label="عرض اعتماد SCOPE الدولي"
      title="اعتماد SCOPE الدولي"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-[1.75rem] border border-white/70 bg-white/90 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-4 sm:bottom-6 sm:right-6 sm:px-3"
    >
      <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
        <Image
          src="/images/certificates/scope-badge.png"
          alt="شعار اعتماد SCOPE الدولي"
          fill
          className="object-contain drop-shadow-[0_10px_18px_rgba(15,23,42,0.12)]"
          sizes="(max-width: 640px) 56px, 64px"
        />
      </div>

      <div className="hidden min-w-[8.5rem] text-right sm:block">
        <span className="bg-secondary/12 mb-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold text-secondary-dark">
          اعتماد دولي
        </span>
        <p className="text-sm font-bold text-gray-900">SCOPE Certified</p>
        <p className="text-xs text-gray-500">المملكة المتحدة</p>
      </div>
    </Link>
  );
}
