import { getDailyWord } from '@/data/words';
import { WordCard } from './WordCard';
import { Sparkles, Calendar } from 'lucide-react';

export function DailyWord() {
  const dailyWord = getDailyWord();
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-4">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">{today}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            Word of the Day
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expand your vocabulary one word at a time. Learn, practice, and master new words daily.
          </p>
        </div>
        <WordCard word={dailyWord} showFull={true} className="shadow-2xl" />
      </div>
    </section>
  );
}