import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "./ResizableNavbar";

const CompleteNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Contact", link: "#contact" },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navigationItems}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex items-center space-x-4">
            <NavbarButton
              variant="secondary"
              href="https://wa.me/+263712505368"
            >
              Enquire
            </NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={handleMobileMenuToggle}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <div className="space-y-4">
            {navigationItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                className="block text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors"
                onClick={handleMobileMenuClose}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <NavbarButton
                variant="gradient"
                href="#contact"
                className="w-full"
                onClick={handleMobileMenuClose}
              >
                Contact Us
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
};

export default CompleteNavbar;
