import { words } from '@/data/words';
import { WordCard } from '@/components/WordCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export default function Words() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const difficulties: Array<'all' | 'beginner' | 'intermediate' | 'advanced'> = ['all', 'beginner', 'intermediate', 'advanced'];
  const categories: string[] = ['all', ...Array.from(new Set(words.map(w => w.category)))];

  const filteredWords = words.filter(word => {
    const matchesSearch = word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         word.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || word.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vocabulary Library
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of words organized by difficulty and category.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search words or definitions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Difficulty:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <Badge
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 capitalize"
                  onClick={() => setSelectedDifficulty(difficulty)}
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 capitalize"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredWords.length}</span> word{filteredWords.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredWords.map(word => (
            <Link key={word.id} to="/words/$id" params={{ id: String(word.id) }}>
              <WordCard word={word} showFull={false} />
            </Link>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No words found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDifficulty('all');
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}