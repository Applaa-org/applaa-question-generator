import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionGenerator from "@/components/QuestionGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              AI Exam Question Generator
            </h1>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Create comprehensive exam questions on any topic instantly. Perfect for teachers, students, and tutors.
            </p>
          </div>
          <QuestionGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;