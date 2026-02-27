import { MadeWithApplaa } from '@/components/made-with-applaa';
import { BookOpen, Target, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About WordBuilder
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your daily companion for building a powerful vocabulary.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Target className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            WordBuilder is designed to help learners expand their vocabulary gradually and effectively. 
            We believe that building a strong vocabulary is essential for clear communication, 
            better reading comprehension, and academic success. Our app provides carefully curated words 
            with real-world examples to make learning practical and engaging.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-700">
                <strong>Daily Words:</strong> A new word every day to keep your learning journey fresh and consistent.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-700">
                <strong>Usage Examples:</strong> Real-world sentences showing how words are used in context.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-700">
                <strong>Difficulty Levels:</strong> Words organized from beginner to advanced for progressive learning.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-700">
                <strong>Audio Pronunciation:</strong> Listen to correct pronunciation for each word.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Users className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Who Is This For?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Students</h3>
              <p className="text-gray-600 text-sm">Improve academic writing and reading comprehension</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Professionals</h3>
              <p className="text-gray-600 text-sm">Enhance business communication and presentations</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Language Learners</h3>
              <p className="text-gray-600 text-sm">Build a stronger foundation in English vocabulary</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Lifelong Learners</h3>
              <p className="text-gray-600 text-sm">Continuously expand your knowledge and expression</p>
            </div>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
              <Heart className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-amber-900">Educational Purpose</h2>
          </div>
          <p className="text-amber-800 leading-relaxed">
            WordBuilder is designed for educational purposes only. While we strive for accuracy in definitions 
            and examples, language is constantly evolving and meanings may vary across different contexts, 
            regions, and usage patterns. We encourage learners to verify words in multiple sources and 
            practice using them in real conversations to fully understand their nuances.
          </p>
        </div>

        <MadeWithApplaa />
      </div>
    </div>
  );
}