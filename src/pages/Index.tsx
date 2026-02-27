import { DailyWord } from '@/components/DailyWord';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Link } from '@tanstack/react-router';
import { BookOpen, TrendingUp, Target, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: BookOpen,
    title: "Curated Vocabulary",
    description: "Carefully selected words to enhance your language skills progressively."
  },
  {
    icon: TrendingUp,
    title: "Gradual Learning",
    description: "Build your vocabulary step by step with words organized by difficulty."
  },
  {
    icon: Target,
    title: "Real Examples",
    description: "See how words are used in context with practical, real-world examples."
  },
  {
    icon: Clock,
    title: "Daily Updates",
    description: "A new word every day to keep your learning journey fresh and engaging."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <DailyWord />
      
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why WordBuilder?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master new vocabulary with our systematic approach to language learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Expand Your Vocabulary?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our complete collection of words and start your journey to becoming a more articulate communicator.
          </p>
          <Link to="/words">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              Browse All Words
            </Button>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-sm text-amber-800 text-center">
              <strong>Disclaimer:</strong> This application is for educational purposes only. 
              While we strive for accuracy, definitions and examples may vary across different contexts and regions.
            </p>
          </div>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
};

export default Index;