import './App.css'; 
import React, { useState } from 'react';
import logo from './logo.svg';
import loan from './loan.png';
import tick from './green tick.svg';
import cibil from './Cibilscore.svg';
import eligibility from  './Loaneligibility.svg';
import support from './Contact.svg';
import Frame from './Frame.svg';
import avatar from './Avatar group.svg';
import doctor from './Doctorimg.png';
import Vehicleloan from './Vehicleloan.png';
import termlife from './Termlifeinsurance.png';
import health from './Healthinsurance.png'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-container">
          <div className="logo-container">
            <img src="https://fairneft.com/Images/logo.svg" alt="FairNeft Icon" className="logo-icon" />
          </div>
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <nav className="main-nav mobile">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About Us</a>
              <a href="/products" className="nav-link">Products</a>
              <a href="/contact" className="nav-link">Contact</a>
              <a href="/faq" className="nav-link">FAQs</a>
              <a href="/careers" className="nav-link">Careers</a>
            </nav>
            <div className="auth-buttons mobile">
              <a href="/login" className="login-link">Login</a>
              <button className="register-button">Register</button>
            </div>
          </div>
          <nav className="main-nav">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/about" className="nav-link">
              About Us
            </a>
            <div className="dropdown">
              <button className="dropdown-button">
                Products <i className="chevron-icon">▼</i>
              </button>
            </div>
            <a href="/contact" className="nav-link">
              Contact
            </a>
            <a href="/faq" className="nav-link">
              FAQs
            </a>
            <a href="/careers" className="nav-link">
              Careers
            </a>
          </nav>
          <div className="auth-buttons">
            <a href="/login" className="login-link">
              Login
            </a>
            <button className="register-button">Register</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Empower Your Financial Future</h1>
              <p className="hero-description">
                We provide financial solutions tailored to your needs. Simple, fast, and transparent processes. Whether
                you're looking to buy a home, expand your business, or need personal funds, we're here to help you
                achieve your financial dreams.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="check-icon">
                  <img src={tick} alt="check-icon" className="check-icon" />
                  </div>
                  <p style={{color: "white"}}>Wide Range of Financial Products</p>
                </div>
                <div className="feature-item">
                  <div className="check-icon">
                  <img src={tick} alt="check-icon" className="check-icon" />
                  </div>
                  <p style={{color: "white"}}>Personalized Recommendations</p>
                </div>
                <div className="feature-item">
                  <div className="check-icon">
                  <img src={tick} alt="check-icon" className="check-icon" />
                  </div>
                  <p style={{color: "white"}}>Fast Approvals</p>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="primary-button">Apply Now</button>
                <button className="outline-button">Find Loans</button>
              </div>
            </div>
          
          </div>
        </section>

        {/* Loan Products Section */}
        <section className="offerings-section">
          <div className="container">
            <div className="loan-product">
              <div className="loan-content">
                <h2 className="section-title">OUR CREDIT SOLUTIONS</h2>
                <h1 className="loan-title">Personal Loan</h1>
                <p className="loan-description">
                  Need urgent cash? Whether it's for a medical emergency, travel, wedding, education, or home
                  renovation, our personal loans offer competitive interest rates and easy repayment options with
                  flexible repayment tenure.
                </p>
                <p className="italic-text">
                  Life is unpredictable, but your finances don't have to be!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
              <div className="loan-image-container">
                <img src={loan} alt="Personal Loan" className="loan-image" />
              </div>
            </div>

            {/* Business Loan */}
            <div className="loan-product reverse">
              <div className="loan-image-container">
                <img src={require('./Businessloan (1).png')} alt="Business Loan" className="loan-image" />
              </div>
              <div className="loan-content">
                <h3 className="loan-title">Business Loans</h3>
                <p className="loan-description">
                Whether you're expanding your business, managing cash flow, purchasing equipment, or hiring top talent, 
                FairNeft’s Business Loans provide the financial support you need—fast, flexible, 
                and hassle-free! Choose between Secured Business Loans (backed by assets for lower interest rates) 
                or Unsecured Business Loans (no collateral required, just quick access to funds)..
                </p>
                <p className="italic-text">
                Your business deserves the best financial support—apply today and watch it grow!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
            </div>

            {/* Home Loan */}
            <div className="loan-product">
              <div className="loan-content">
                <h3 className="loan-title">Home Loan</h3>
                <p className="loan-description">
                Your dream home is closer than you think! Whether you're buying a new house,
                 building your own, renovating your space, or refinancing an existing loan, FairNeft’s Home Loan offers affordable EMIs, 
                 flexible tenures, and instant approvals—all with minimal paperwork and a 100% digital process.
                 Say goodbye to financial stress and hello to homeownership made easy!
                </p>
                <p className="italic-text">
                Don’t just dream of your perfect home—move in faster with FairNeft!
                </p>

                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
              <div className="loan-image-container">
                <img src={require('./Homeloan.png')} alt="Home Loan" className="loan-image" />
              </div>
            </div>
          </div>
        

        {/* Loan Against Property */}

         <div className="loan-product reverse">
              <div className="loan-image-container">
                <img src={require('./LoanAginst.png')} alt="Loan Against Property" className="loan-image" />
              </div>
              <div className="loan-content">
                <h3 className="loan-title">Loan Against Property</h3>
                <p className="loan-description">
                Need funds for business expansion, education, medical emergencies, 
                or personal expenses? FairNeft’s Loan Against Property (LAP) helps you leverage your residential, 
                commercial, or industrial property to secure high-value loans at low-interest rates. Keep ownership
                 of your property while enjoying flexible repayment tenures and quick disbursals—all with a hassle-free process and minimal paperwork!
                </p>
                <p className="italic-text">
                Why let your property sit idle? Put it to work for you today!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
            </div>

            {/* Overdraft */}
            <div className="container">
            <div className="loan-product">
              <div className="loan-content">
                <h1 className="loan-title">Overdraft</h1>
              
                <p className="loan-description">
                Need quick access to funds for business expenses, 
                personal needs, or emergencies? With FairNeft’s Overdraft Facility, you get a pre-approved credit limit that you can withdraw from anytime, 
                anywhere, and pay interest only on the amount used. Whether you're a salaried professional or a business owner,
                 our overdraft gives you the freedom to borrow,
                 repay, and re-borrow as needed—without any extra charges!
                </p>
                <p className="italic-text">
                Need urgent cash? Get access to funds instantly!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
              <div className="loan-image-container">
              <img src={require('./Overdraft.png')} alt="Loan Against Property" className="loan-image" />
              </div>
            </div>
            </div>
           
            {/* Professional Loan */}
            <div className="loan-product reverse">
              <div className="loan-image-container">
                <img src={doctor} alt="Business Loan" className="loan-image" />
              </div>
              <div className="loan-content">
                <h3 className="loan-title">Professional Loan</h3>
                <p className="loan-description">
                Are you a doctor, chartered accountant, engineer, consultant, or architect looking for funds to expand your practice,
                 upgrade equipment, or manage professional expenses? FairNeft’s Professional Loan offers high loan amounts, 
                 low-interest rates, 
                and flexible repayment options—all with zero collateral and minimal paperwork!
                </p>
                <p className="italic-text">
                Take the next step in your career—apply for a professional loan today!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
            </div>

            {/* Education Loan */}

            <div className="container">
            <div className="loan-product">
              <div className="loan-content">
                <h1 className="loan-title">Education Loan</h1>
              
                <p className="loan-description">
                Dreaming of studying at a top university but worried about finances? With FairNeft’s Education Loan, 
                you get 100% financing for tuition, living expenses, travel, and more—so you can focus on your education, not your finances.
                 Whether it's in India or abroad, we offer low-interest rates, flexible repayment options, 
                and quick approvals to help you achieve your academic goals without stress.
                </p>
                <p className="italic-text">
                Invest in your career growth—apply today!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
              <div className="loan-image-container">
              <img src={require('./Educationloan.png')} alt="Loan Against Property" className="loan-image" />
              </div>
            </div>
            </div>
          

            {/* Vehicle Loan */}
            <div className="loan-product reverse">
              <div className="loan-image-container">
                <img src={Vehicleloan} alt="Business Loan" className="loan-image" />
              </div>
          <div className="loan-content">
                <h3 className="loan-title">Vehicle Loan</h3>
                <p className="loan-description">
                Looking to buy a new or used car, bike, or commercial vehicle? With FairNeft’s Vehicle Loan, 
                you can drive home your dream ride without worrying about finances! We offer low-interest rates,
                 up to 100% financing, 
                and flexible repayment options—all with quick approvals and minimal paperwork.
                </p>
                <p className="italic-text">
                Don’t wait—get on the road with FairNeft’s easy vehicle loans!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
            </div>
           
           {/* machinery Loan */}   
            <div className="container">
            <div className="loan-product">
              <div className="loan-content">
                <h1 className="loan-title">Machinery Loan</h1>
              
                <p className="loan-description">
                Looking to upgrade or purchase new machinery for your business? With FairNeft’s Machinery Loan, 
                you can equip your enterprise with the latest technology without financial strain! We offer low-interest rates, 
                up to 100% financing, and flexible repayment options—all with quick approvals and minimal paperwork.
                </p>
                <p className="italic-text">
                Don’t let outdated equipment slow you down—apply for a machinery loan today!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
              <div className="loan-image-container">
              <img src={require('./Mechineryloan.png')} alt="Loan Against Property" className="loan-image" />
              </div>
            </div>
            </div>
            </section>
{/*Term Life Insurance*/}
            <div className="container">
            <div className="loan-product">
              <div className="loan-content">
                <h2 className="section-title">INSURANCE & INVESTMENT SOLUTIONS</h2>
                <h1 className="loan-title">Term Life Insurance</h1>
                <p className="loan-description">
                Life is unpredictable, but your family’s financial security shouldn’t be. With FairNeft’s Term Life Insurance,
                 you can ensure your loved ones are financially protected in case of life’s uncertainties. Get high coverage at affordable premiums,
                  flexible policy terms, and additional benefits like critical illness cover, accidental death benefit, 
                and disability protection—so you can live worry-free knowing your family is always secure.
                </p>
                <p className="italic-text">
                Because Your family deserves the best protection!!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
              <div className="loan-image-container">
                <img src={termlife} alt="Personal Loan" className="loan-image" />
              </div>
            </div>
            </div>

            {/*Health Insurance*/}
            <div className="loan-product reverse">
              <div className="loan-image-container">
                <img src={health} alt="Business Loan" className="loan-image" />
              </div>
          <div className="loan-content">
                <h3 className="loan-title">Health Insurance</h3>
                <p className="loan-description">
                Medical emergencies can happen anytime, but financial stress shouldn’t. With FairNeft’s Health Insurance, 
                get cashless hospitalization, pre- & post-hospitalization coverage,
                 and critical illness protection—so you and your loved ones get the best medical care without worrying about expenses.
                  Choose from individual plans, 
                family floater plans, senior citizen policies, and critical illness cover, all with low premiums and high coverage.
                </p>
                <p className="italic-text">
                Your health is priceless—get insured today!
                </p>
                <div className="loan-buttons">
                  <button className="primary-button">Apply for Loan</button>
                  <button className="outline-button">ASK EXPERT</button>
                </div>
              </div>
            </div>
          
            </section>


     

        {/* CIBIL Score Section */}
        <section className="cibil-section" style={{background: "linear-gradient(253.92deg, rgb(255, 255, 255) -7.95%, rgb(212, 215, 226) 101.01%)", padding: "4rem 0"}}>
          <div className="cibil-container">
            <div className="cibil-content">
              <h1 style={{fontWeight: "bold", fontSize: "2rem", marginBottom: "1rem"}}>
                Know Your <span style={{color: "rgb(119, 196, 118)"}}>CIBIL Score -</span>  Unlock Better Financial Opportunities!
              </h1>
              <p style={{marginBottom: "1rem"}}>
              Your CIBIL Score is the key to faster loan approvals, lower interest rates, 
              and better financial opportunities. Whether applying for a personal loan, 
              home loan, or credit card, lenders use your CIBIL Score to evaluate your creditworthiness.
              At FairNeft, we help you check your CIBIL Score instantly for free, understand your credit health,
               and improve your score for better financial freedom!
              </p>
              <p style={{color: "rgb(86, 101, 176)", fontStyle: "italic", marginBottom: "1.5rem"}}>
              Your financial future depends on your credit health—know your score today!
              </p>
              <button style={{
                backgroundColor: "rgb(119, 196, 118)",
                color: "white",
                padding: "12px 35px",
                fontSize: "16px",
                borderRadius: "30px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 8px",
                border: "2px solid rgb(119, 196, 118)",
                fontWeight: "600"
              }}>
                Check Eligibility
              </button>
            </div>
            <div className="cibil-image-container">
              <img alt="CIBIL Score Meter" className="cibil-image" src={cibil} style={{maxWidth: "100%", height: "auto"}}/>
            </div>
          </div>
        </section>

        {/* Loan Eligibility Section */}
        <section className="eligibility-section">
          <div className="container">
            <div className="eligibility-content">
              <div className="eligibility-text">
                <h1 className="eligibility-title" style={{ width: "50%" }}>
                  Know Your<span style={{color: "rgb(119, 196, 118)"}}> Loan Eligibility </span> Instantly!
                </h1>
                <p className="eligibility-description">
                  Wondering if you qualify for a loan? Use our simple, hassle-free loan eligibility calculator to find
                  out instantly. Just enter a few details about your income and existing loans, and we'll tell you how
                  much you can borrow and at what rate.
                </p>
                <button className="primary-button">Check Eligibility</button>
              </div>
              <div className="eligibility-image">
                <img src={eligibility} alt="Loan Eligibility" style={{maxWidth: '80%', height: 'auto'}}/>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section class="values-section">
    <div class="container">
      <h3 class="section-label">WHY CHOOSE US?</h3>
      <h2 class="values-title">
        Empowering Your Financial Journey with <span class="highlight">Trust</span>, 
        <span class="highlight">Transparency</span>, and <span class="highlight">Tailored</span> Solutions
      </h2>
      <p class="values-subtitle">
        At Fairnet, we believe in simplifying your financial decisions and providing solutions that truly matter. 
        Here's why you can trust us:
      </p>

      <div class="values-items">
        <div class="value-item">
          <h3 class="value-item-title">Tailored Solutions</h3>
          <p class="value-item-description">
            Whether you're investing, insuring, or borrowing, we offer personalized options that align with your unique needs and goals.
          </p>
        </div>

        <div class="value-item">
          <h3 class="value-item-title">Trusted Partners</h3>
          <p class="value-item-description">
            Partnered with leading financial institutions and insurers, ensuring you get the best products and services in the market.
          </p>
        </div>

        <div class="value-item">
          <h3 class="value-item-title">Transparency Guaranteed</h3>
          <p class="value-item-description">
            No hidden fees or surprises. Enjoy a clear, straightforward process for all your financial needs.
          </p>
        </div>

        <div class="value-item">
          <h3 class="value-item-title">Expert Guidance</h3>
          <p class="value-item-description">
            Our team of experts is here to guide you at every step, from choosing the right product to managing your finances efficiently.
          </p>
        </div>

        <div class="value-item">
          <h3 class="value-item-title">Seamless Experience</h3>
          <p class="value-item-description">
            With an intuitive platform and quick processing, we make managing your finances easy, accessible, and stress-free.
          </p>
        </div>

        <div class="value-item">
          <h3 class="value-item-title">Customer-Centric Approach</h3>
          <p class="value-item-description">
            Your satisfaction is our priority. We're dedicated to delivering excellent service and unparalleled support.
          </p>
        </div>
      </div>
    </div>
  </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2 className="contact-title">
              We're Here to Help – <br />
              Reach Out for Support or Queries Anytime!
            </h2>

            <div className="contact-container">
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-input" placeholder='First name'/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-input" placeholder='Last name'/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="yourname@example.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                  <small className="error-message" style={{color: 'red', display: 'none'}}>
                    Message cannot be empty
                  </small>
                </div>

                <div className="form-group" style={{margin: '1rem 0'}}>
                  <label style={{display: 'flex', alignItems: 'center'}}>
                    <input 
                      type="checkbox" 
                      required
                      style={{marginRight: '0.5rem'}} 
                    />
                    You agree to our friendly privacy policy
                  </label>
                  <small className="error-message" style={{color: 'red', display: 'none'}}>
                    You must accept the privacy policy
                  </small>
                </div>

                <button className="primary-button full-width">Submit</button>
              </div>

              <div className="contact-image">
              <img src={support} alt="Personal Loan" className="loan-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
          <div className="app">
        <section className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">Subscribe to the Newsletter</h2>
              <p className="newsletter-description">
                Join thousands of smart investors & borrowers—stay ahead in your financial journey!
              </p>
              <div className="newsletter-form">
                <input type="email" placeholder="Email" className="newsletter-input" />
                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>
            <div className="newsletter-image">
              <div className="image-container">
                <img
                  src={ Frame} height = "150&width=250"
                  alt="Plants growing in jars with coins"
                  className="circular-image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Everything you need to know about the product and billing.</p>

            <div className="faq-list">
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(0)}>
                  How can I apply for a loan through FairNeft?
                  <span className="faq-icon">{activeFaq === 0 ? '˄' : '˅'}</span>
                </button>
                {activeFaq === 0 && (
                  <div className="faq-answer">
                    <p>Users can apply online by filling out an application form and submitting the necessary documents.</p>
                  </div>
                )}
              </div>

              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(1)}>
                  What documents are required for a loan application?
                  <span className="faq-icon">{activeFaq === 1 ? '˄' : '˅'}</span>
                </button>
                {activeFaq === 1 && (
                  <div className="faq-answer">
                    <p>Required documents typically include proof of identity (Aadhar card, PAN card), proof of address, income proof (salary slips or bank statements), and photographs.</p>
                  </div>
                )}
              </div>

              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(2)}>
                  How can I check my CIBIL score for free?
                  <span className="faq-icon">{activeFaq === 2 ? '˄' : '˅'}</span>
                </button>
                {activeFaq === 2 && (
                  <div className="faq-answer">
                    <p>You can check your CIBIL score for free once a year through the official CIBIL website. FairNeft also provides a complimentary credit score check during the application process.</p>
                  </div>
                )}
              </div>

              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(3)}>
                  How long does it take to get a loan approved?
                  <span className="faq-icon">{activeFaq === 3 ? '˄' : '˅'}</span>
                </button>
                {activeFaq === 3 && (
                  <div className="faq-answer">
                    <p>Most loan applications are processed within 24-48 hours, with disbursal occurring within 3-5 business days after approval.</p>
                  </div>
                )}
              </div>

              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(4)}>
                  Can I repay my loan early?
                  <span className="faq-icon">{activeFaq === 4 ? '˅' : '˅'}</span>
                </button>
                {activeFaq === 4 && (
                  <div className="faq-answer">
                    <p>Yes, you can repay your loan early. FairNeft offers flexible repayment options with minimal prepayment charges. Please refer to your loan agreement for specific terms.</p>
                  </div>
                )}
              </div>
            </div>
            
           
            <div className="more-questions">
          
              <div className="more-questions-card">
              <div className="avatar">
              <img src={avatar} alt="Loan Eligibility" />
                <h3 className="more-questions-title">Still have questions?</h3>
                <p className="more-questions-description">
                  Can't find the answer you're looking for? Reach out with our friendly team.
                </p>
                <button className="primary-button">Get in Touch</button>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <img src={logo} alt="FairNeft Logo" className="footer-logo-img" />
                <span className="footer-logo-text"></span>
              </div>
              <p className="footer-description">Empowering financial decisions with transparency and trust.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="social-icon twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="social-icon instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="social-icon linkedin"></i>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Credit Solutions</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Personal Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Business Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Home Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Loan Against Property
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Education Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Credit Card
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Calculators
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    CIBIL Score
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Annual Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Videos
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 FairNeft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
