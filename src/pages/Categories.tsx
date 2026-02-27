import { categories, words } from '@/data/words';
import { Link } from '@tanstack/react-router';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function Categories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore words organized by thematic categories to focus your learning on specific topics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/words"
              search={{ category: category.name }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <BookOpen className="text-white w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="font-medium">
                    {category.count} word{category.count !== 1 ? 's' : ''}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore vocabulary related to {category.name.toLowerCase()}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  View words
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{words.length}</div>
              <div className="text-blue-100">Total Words</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{categories.length}</div>
              <div className="text-blue-100">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-100">Difficulty Levels</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}