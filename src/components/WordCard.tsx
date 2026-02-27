import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Volume2 } from 'lucide-react';
import { Word } from '@/data/words';
import { cn } from '@/lib/utils';

interface WordCardProps {
  word: Word;
  showFull?: boolean;
  className?: string;
}

export function WordCard({ word, showFull = false, className }: WordCardProps) {
  const speakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 hover:bg-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    advanced: 'bg-red-100 text-red-800 hover:bg-red-200'
  };

  return (
    <Card className={cn("overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-gray-900">{word.word}</h2>
              <button
                onClick={speakWord}
                className="p-2 rounded-full hover:bg-blue-100 text-blue-600 transition-colors"
                aria-label="Pronounce word"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-500 font-mono text-sm mb-2">{word.pronunciation}</p>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="font-medium">
                {word.partOfSpeech}
              </Badge>
              <Badge className={cn("font-medium", difficultyColors[word.difficulty])}>
                {word.difficulty}
              </Badge>
              <Badge variant="secondary" className="font-medium">
                {word.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Definition</h3>
          <p className="text-lg text-gray-800 leading-relaxed">{word.definition}</p>
        </div>

        {showFull && word.examples.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Examples</h3>
            <ul className="space-y-2">
              {word.examples.map((example, index) => (
                <li key={index} className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">
                  {example}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showFull && word.synonyms.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Synonyms</h3>
            <div className="flex flex-wrap gap-2">
              {word.synonyms.map((synonym, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {synonym}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {showFull && word.antonyms.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Antonyms</h3>
            <div className="flex flex-wrap gap-2">
              {word.antonyms.map((antonym, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {antonym}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {showFull && word.etymology && (
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Etymology</h3>
            <p className="text-sm text-gray-600 italic">{word.etymology}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}