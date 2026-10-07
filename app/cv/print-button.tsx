'use client';
import { Download } from 'lucide-react';
export default function PrintButton({ label }: { label: string }) {
  return <button className="print-button" onClick={() => window.print()}><Download aria-hidden="true" size={14} strokeWidth={1.8} />{label}</button>;
}
