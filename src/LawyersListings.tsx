import { Search, Filter, ChevronDown, Star, MapPin, Briefcase, DollarSign, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface LawyerData {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  experience: number;
  specialization: string[];
  languages: string[];
  location: string;
  fee: number;
  availability: 'Available' | 'Busy' | 'Unavailable';
}

interface LawyersListingsProps {
  onBackToHome?: () => void;
  initialSearchQuery?: string;
  onNavigateToLogin?: () => void;
  onNavigateToSignUp?: () => void;
  onNavigateToLawyerSignUp?: () => void;
}

export default function LawyersListings({ onBackToHome, initialSearchQuery = '', onNavigateToLogin, onNavigateToSignUp, onNavigateToLawyerSignUp }: LawyersListingsProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [showExperienceFilter, setShowExperienceFilter] = useState(false);
  const [showLanguageFilter, setShowLanguageFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showRatingFilter, setShowRatingFilter] = useState(false);
  const [showAvailabilityFilter, setShowAvailabilityFilter] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Filter states
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

  // Generate random lawyer data
  const lawyers: LawyerData[] = useMemo(() => {
    const firstNames = ['Rajesh', 'Priya', 'Amit', 'Sneha', 'Vikram', 'Anjali', 'Ravi', 'Deepika', 'Karan', 'Meera', 'Arjun', 'Kavita', 'Rohit', 'Nisha', 'Sanjay', 'Pooja', 'Rahul', 'Shreya', 'Aditya', 'Simran'];
    const lastNames = ['Sharma', 'Patel', 'Kumar', 'Singh', 'Verma', 'Gupta', 'Reddy', 'Iyer', 'Joshi', 'Mehta', 'Nair', 'Rao', 'Mishra', 'Pillai', 'Das', 'Bhatia', 'Khanna', 'Malhotra', 'Agarwal', 'Shah'];
    const specializations = ['Property Law', 'Divorce & Family', 'Criminal Defense', 'Consumer Rights', 'Business & Contracts', 'Cyber Crime', 'Financial & Tax', 'Civil Litigation'];
    const languages = ['Hindi', 'English', 'Tamil', 'Telugu', 'Marathi', 'Bengali', 'Kannada', 'Malayalam'];
    const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad'];
    const availabilityOptions: ('Available' | 'Busy' | 'Unavailable')[] = ['Available', 'Available', 'Available', 'Busy', 'Unavailable'];

    return Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
      image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 70)}.jpg`,
      rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
      reviews: Math.floor(Math.random() * 200) + 10,
      experience: Math.floor(Math.random() * 20) + 1,
      specialization: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
        specializations[Math.floor(Math.random() * specializations.length)]
      ).filter((v, i, a) => a.indexOf(v) === i),
      languages: Array.from({ length: Math.floor(Math.random() * 3) + 2 }, () => 
        languages[Math.floor(Math.random() * languages.length)]
      ).filter((v, i, a) => a.indexOf(v) === i),
      location: cities[Math.floor(Math.random() * cities.length)],
      fee: Math.floor(Math.random() * 4000) + 1000,
      availability: availabilityOptions[Math.floor(Math.random() * availabilityOptions.length)]
    }));
  }, []);

  // Filter options
  const experienceOptions = ['1-5 years', '5+ years', '10+ years', '15+ years'];
  const languageOptions = ['Hindi', 'English', 'Tamil', 'Telugu', 'Marathi', 'Bengali', 'Kannada', 'Malayalam'];
  const priceRangeOptions = ['₹1000-₹2000', '₹2000-₹3000', '₹3000-₹4000', '₹4000+'];
  const ratingOptions = ['5 stars', '4+ stars', '3+ stars'];
  const availabilityOptions = ['Available', 'Busy', 'Unavailable'];

  // Handle filter toggles
  const toggleExperience = (exp: string) => {
    setSelectedExperience(prev => 
      prev.includes(exp) ? prev.filter(e => e !== exp) : [...prev, exp]
    );
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages(prev => 
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
  };

  const togglePriceRange = (price: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]
    );
  };

  const toggleRating = (rating: string) => {
    setSelectedRatings(prev => 
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const toggleAvailability = (avail: string) => {
    setSelectedAvailability(prev => 
      prev.includes(avail) ? prev.filter(a => a !== avail) : [...prev, avail]
    );
  };

  // Filter lawyers based on all filters
  const filteredLawyers = useMemo(() => {
    return lawyers.filter(lawyer => {
      // Search query filter
      const matchesSearch = searchQuery === '' || 
        lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lawyer.specialization.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())) ||
        lawyer.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Experience filter
      const matchesExperience = selectedExperience.length === 0 || selectedExperience.some(exp => {
        if (exp === '1-5 years') return lawyer.experience >= 1 && lawyer.experience <= 5;
        if (exp === '5+ years') return lawyer.experience >= 5;
        if (exp === '10+ years') return lawyer.experience >= 10;
        if (exp === '15+ years') return lawyer.experience >= 15;
        return true;
      });

      // Language filter
      const matchesLanguage = selectedLanguages.length === 0 || 
        selectedLanguages.some(lang => lawyer.languages.includes(lang));

      // Price filter
      const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
        if (range === '₹1000-₹2000') return lawyer.fee >= 1000 && lawyer.fee <= 2000;
        if (range === '₹2000-₹3000') return lawyer.fee > 2000 && lawyer.fee <= 3000;
        if (range === '₹3000-₹4000') return lawyer.fee > 3000 && lawyer.fee <= 4000;
        if (range === '₹4000+') return lawyer.fee > 4000;
        return true;
      });

      // Rating filter
      const matchesRating = selectedRatings.length === 0 || selectedRatings.some(rating => {
        if (rating === '5 stars') return lawyer.rating === 5;
        if (rating === '4+ stars') return lawyer.rating >= 4;
        if (rating === '3+ stars') return lawyer.rating >= 3;
        return true;
      });

      // Availability filter
      const matchesAvailability = selectedAvailability.length === 0 || 
        selectedAvailability.includes(lawyer.availability);

      return matchesSearch && matchesExperience && matchesLanguage && matchesPrice && matchesRating && matchesAvailability;
    });
  }, [lawyers, searchQuery, selectedExperience, selectedLanguages, selectedPriceRanges, selectedRatings, selectedAvailability]);

  const handleFileCase = (lawyerId: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Filing case with lawyer ID: ${lawyerId}`);
    }, 1500);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <div className="min-h-screen bg-background">
          {/* Top Navbar */}
          <Navbar 
            onNavigateToHome={onBackToHome}
            onNavigateToLogin={onNavigateToLogin}
            onNavigateToSignUp={onNavigateToSignUp}
            onNavigateToLawyerSignUp={onNavigateToLawyerSignUp}
          />

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            {/* Search Bar and Top Filters */}
            <div className="mb-6">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center mb-4">
                {/* Search Bar */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
                  <input
                    type="text"
                    placeholder="Search lawyers by name, specialization, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-300"
                  />
                </div>

                {/* Top Right Filters */}
                <div className="flex gap-3 w-full lg:w-auto">
                  {/* 5+ yr Experience Filter */}
                  <div className="relative flex-1 lg:flex-initial">
                    <button
                      onClick={() => setShowExperienceFilter(!showExperienceFilter)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full border-2 transition-all duration-300 w-full justify-center ${
                        selectedExperience.length > 0 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-border hover:border-primary'
                      }`}
                      style={{ borderRadius: '26px' }}
                    >
                      <span className="text-sm font-medium whitespace-nowrap">Experience</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {showExperienceFilter && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 bg-white rounded-2xl shadow-lg border-2 border-border p-4 w-64 right-0 z-50"
                        >
                          <div className="space-y-2">
                            {experienceOptions.map(exp => (
                              <label key={exp} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <input
                                  type="checkbox"
                                  checked={selectedExperience.includes(exp)}
                                  onChange={() => toggleExperience(exp)}
                                  className="w-4 h-4 accent-primary"
                                />
                                <span className="text-sm">{exp}</span>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hindi Proficient Filter */}
                  <div className="relative flex-1 lg:flex-initial">
                    <button
                      onClick={() => setShowLanguageFilter(!showLanguageFilter)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full border-2 transition-all duration-300 w-full justify-center ${
                        selectedLanguages.length > 0 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-border hover:border-primary'
                      }`}
                      style={{ borderRadius: '26px' }}
                    >
                      <span className="text-sm font-medium whitespace-nowrap">Language</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {showLanguageFilter && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 bg-white rounded-2xl shadow-lg border-2 border-border p-4 w-64 right-0 z-50"
                        >
                          <div className="space-y-2">
                            {languageOptions.map(lang => (
                              <label key={lang} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <input
                                  type="checkbox"
                                  checked={selectedLanguages.includes(lang)}
                                  onChange={() => toggleLanguage(lang)}
                                  className="w-4 h-4 accent-primary"
                                />
                                <span className="text-sm">{lang}</span>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Bottom Filters Row */}
              <div className="flex gap-3 items-center flex-wrap">
                {/* Price Filter */}
                <div className="relative">
                  <button
                    onClick={() => setShowPriceFilter(!showPriceFilter)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-300 ${
                      selectedPriceRanges.length > 0 
                        ? 'border-primary bg-primary text-white' 
                        : 'border-border hover:border-primary'
                    }`}
                    style={{ borderRadius: '26px' }}
                  >
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-medium">Price</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {showPriceFilter && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 bg-white rounded-2xl shadow-lg border-2 border-border p-4 w-56 z-50"
                      >
                        <div className="space-y-2">
                          {priceRangeOptions.map(price => (
                            <label key={price} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <input
                                type="checkbox"
                                checked={selectedPriceRanges.includes(price)}
                                onChange={() => togglePriceRange(price)}
                                className="w-4 h-4 accent-primary"
                              />
                              <span className="text-sm">{price}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Rating Filter */}
                <div className="relative">
                  <button
                    onClick={() => setShowRatingFilter(!showRatingFilter)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-300 ${
                      selectedRatings.length > 0 
                        ? 'border-primary bg-primary text-white' 
                        : 'border-border hover:border-primary'
                    }`}
                    style={{ borderRadius: '26px' }}
                  >
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">Rating</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {showRatingFilter && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 bg-white rounded-2xl shadow-lg border-2 border-border p-4 w-56 z-50"
                      >
                        <div className="space-y-2">
                          {ratingOptions.map(rating => (
                            <label key={rating} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <input
                                type="checkbox"
                                checked={selectedRatings.includes(rating)}
                                onChange={() => toggleRating(rating)}
                                className="w-4 h-4 accent-primary"
                              />
                              <span className="text-sm">{rating}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Availability Filter */}
                <div className="relative">
                  <button
                    onClick={() => setShowAvailabilityFilter(!showAvailabilityFilter)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-300 ${
                      selectedAvailability.length > 0 
                        ? 'border-primary bg-primary text-white' 
                        : 'border-border hover:border-primary'
                    }`}
                    style={{ borderRadius: '26px' }}
                  >
                    <span className="text-sm font-medium">Availability</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {showAvailabilityFilter && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 bg-white rounded-2xl shadow-lg border-2 border-border p-4 w-56 z-50"
                      >
                        <div className="space-y-2">
                          {availabilityOptions.map(avail => (
                            <label key={avail} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <input
                                type="checkbox"
                                checked={selectedAvailability.includes(avail)}
                                onChange={() => toggleAvailability(avail)}
                                className="w-4 h-4 accent-primary"
                              />
                              <span className="text-sm">{avail}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* More Filters Button */}
                <button
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-border hover:border-primary transition-all duration-300"
                  style={{ borderRadius: '26px' }}
                >
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">More Filters</span>
                </button>

                {/* Results Count */}
                <span className="text-sm text-secondary ml-auto">
                  {filteredLawyers.length} lawyers found
                </span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Side - Lawyers List (Scrollable) */}
              <div className="lg:col-span-2 h-[calc(100vh-240px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100">
                <div className="space-y-4">
                  {filteredLawyers.map((lawyer, index) => (
                    <motion.div
                      key={lawyer.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 p-5 shadow-sm hover:shadow-md"
                    >
                      <div className="flex gap-4">
                        {/* Lawyer Image */}
                        <div className="flex-shrink-0">
                          <ImageWithFallback
                            src={lawyer.image}
                            alt={lawyer.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-border"
                          />
                        </div>

                        {/* Lawyer Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{lawyer.name}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="font-medium text-sm">{lawyer.rating}</span>
                                </div>
                                <span className="text-xs text-secondary">({lawyer.reviews} reviews)</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  lawyer.availability === 'Available' ? 'bg-safe-action text-white' :
                                  lawyer.availability === 'Busy' ? 'bg-yellow-500 text-white' :
                                  'bg-destructive text-white'
                                }`}>
                                  {lawyer.availability}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-primary font-semibold text-lg">₹{lawyer.fee}</div>
                              <div className="text-xs text-secondary">per consultation</div>
                            </div>
                          </div>

                          <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Briefcase className="w-4 h-4 text-secondary" />
                              <span>{lawyer.experience} years experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="w-4 h-4 text-secondary" />
                              <span>{lawyer.location}</span>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="text-xs text-secondary mb-1">Specializations:</div>
                            <div className="flex flex-wrap gap-2">
                              {lawyer.specialization.map(spec => (
                                <span key={spec} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="text-xs text-secondary mb-1">Languages:</div>
                            <div className="flex flex-wrap gap-2">
                              {lawyer.languages.map(lang => (
                                <span key={lang} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <button
                              onClick={() => handleFileCase(lawyer.id)}
                              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
                              style={{ borderRadius: '26px' }}
                            >
                              File a Case
                            </button>
                            <button className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-6 py-2 rounded-lg transition-all text-sm font-medium"
                              style={{ borderRadius: '26px' }}
                            >
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {filteredLawyers.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-secondary text-lg">No lawyers found matching your criteria</p>
                      <p className="text-sm text-secondary mt-2">Try adjusting your filters</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Map (Fixed) */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 h-[calc(100vh-240px)] rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                    alt="Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-sm font-medium">📍 Showing lawyers near you</p>
                    <p className="text-xs text-secondary mt-1">{filteredLawyers.length} available lawyers in your area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}