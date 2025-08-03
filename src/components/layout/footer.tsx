export function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Helverita
            </h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Empowering data-driven decisions through beautiful and intuitive
              visualizations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Product</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Helverita. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
