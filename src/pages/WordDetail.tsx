import { words } from '@/data/words';
import { WordCard } from '@/components/WordCard';
import { Link, useParams } from '@tanstack/react-router';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WordDetail() {
  const { id } = useParams({ from: '/words/$id' });
  const word = words.find(w => w.id === Number(id));

  if (!word) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Word Not Found</h1>
          <Link to="/words">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Words
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const wordDate = new Date(word.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link to="/words">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Words
          </Button>
        </Link>

        {/* Word Card */}
        <WordCard word={word} showFull={true} className="shadow-2xl mb-8" />

        {/* Additional Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Added on {wordDate}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Try using this word in a sentence today to reinforce your learning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Look for this word in books, articles, or conversations you encounter.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Practice the pronunciation using the audio button above.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}