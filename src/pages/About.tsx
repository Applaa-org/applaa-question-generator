import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationButtons from "@/components/NavigationButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Zap, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <NavigationButtons />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              About AI Exam Generator
            </h1>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Empowering educators and learners with instant, high-quality exam questions
            </p>
          </div>
          {/* Rest of the content remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-900">Instant Generation</CardTitle>
                    <CardDescription className="text-blue-700">
                      Generate 10 comprehensive questions in seconds
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-900">Customizable</CardTitle>
                    <CardDescription className="text-blue-700">
                      Choose difficulty level and question type to match your needs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-900">Any Subject</CardTitle>
                    <CardDescription className="text-blue-700">
                      From mathematics to history, science to literature
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-900">For Everyone</CardTitle>
                    <CardDescription className="text-blue-700">
                      Perfect for teachers, students, and tutors
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Our AI Exam Generator uses advanced artificial intelligence to create comprehensive,
                well-structured exam questions on any topic you specify. Simply enter your subject,
                choose your preferred difficulty level and question type, and let our AI do the rest.
              </p>
              <p>
                Whether you're a teacher preparing classroom materials, a student studying for exams,
                or a tutor creating practice questions, our tool provides instant access to
                high-quality educational content tailored to your specific needs.
              </p>
              <p>
                The generated questions include detailed answers and explanations, making it perfect
                for self-study, classroom instruction, or assessment preparation.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;