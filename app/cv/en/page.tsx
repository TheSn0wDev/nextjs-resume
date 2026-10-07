import type { Metadata } from 'next';
import Resume from '../resume';
export const metadata: Metadata = { title: 'Clément Ozor — Backend & AI Software Engineer | Resume', description: 'Clément Ozor’s resume: software engineer specializing in backend development and generative AI.' };
export default function EnglishCV() { return <Resume locale="en" />; }
