import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Helverita
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the power of data visualization with our cutting-edge
          platform. Transform complex information into beautiful, interactive
          insights.
        </p>

        {/* Main Visualization */}
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Image
                    src="/globe.svg"
                    alt="Main visualization"
                    width={48}
                    height={48}
                    className="text-white"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Interactive Data Explorer
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Your gateway to powerful data insights
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
