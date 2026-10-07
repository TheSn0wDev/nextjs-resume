'use client';
import { Download } from 'lucide-react';
export default function PrintButton() {
  return <button className="print-button" onClick={() => window.print()}><Download aria-hidden="true" size={14} strokeWidth={1.8} />Exporter en PDF</button>;
}
