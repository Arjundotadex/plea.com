export default function Footer() {
  return (
    <footer className="bg-[#EFEFEF] mt-12" style={{ borderTopLeftRadius: '50px', borderTopRightRadius: '50px', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-primary mb-4">LegalEase</h3>
            <p className="text-secondary text-sm">
              Your trusted partner in legal services. File cases in just 10 minutes.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="text-secondary hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#case-types" className="text-secondary hover:text-primary transition-colors">Case Types</a></li>
              <li><a href="#why-us" className="text-secondary hover:text-primary transition-colors">Why Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-foreground mb-4">For Lawyers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#join" className="text-secondary hover:text-primary transition-colors">Join as a Lawyer</a></li>
              <li><a href="#benefits" className="text-secondary hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#resources" className="text-secondary hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="text-secondary hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#terms" className="text-secondary hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-secondary text-sm">
            © 2025 LegalEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
