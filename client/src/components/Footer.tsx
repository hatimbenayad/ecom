export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo + Payment */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Hatim Demo N2</h3>
            <p className="text-sm font-medium mb-3 uppercase">Payment Methods</p>
            <div className="flex gap-2 flex-wrap">
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">VISA</div>
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">MC</div>
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">PP</div>
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">BZ</div>
            </div>
          </div>

          {/* Column 2: Help */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-faq">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-shipping">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-gift-cards">Gift Cards</a></li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-stores">Stores</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-company">Company Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">About Hatim Demo N2</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">Terms & Conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p data-testid="text-copyright">©2023 Hatim Demo N2 all rights reserved.</p>
          <p data-testid="text-developer">Developed by <span className="font-medium">Experimentosgilizity</span></p>
        </div>
      </div>
    </footer>
  );
}
