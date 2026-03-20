'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname, Locale} from '@/i18n/routing';
import {ChangeEvent, useTransition} from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
      router.refresh();
    });
  }

  return (
    <label className={`relative ${isPending ? 'opacity-50 transition-opacity' : ''}`}>
      <span className="sr-only">Change language</span>
      <select
        className="bg-gray-900 text-brand-light border border-gray-700 hover:border-brand-green/50 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-green appearance-none pr-8 cursor-pointer transition-colors"
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">EN</option>
        <option value="pt">PT-BR</option>
        <option value="ja">日本語</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-green">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </label>
  );
}
