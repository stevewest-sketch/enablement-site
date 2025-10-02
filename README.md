# Gladly Field Team Hub

A comprehensive internal content website for the Gladly field team, providing centralized access to training materials, competitive intelligence, product information, and sales enablement resources.

## 🏠 Main Hub (`index.html`)

The central landing page that serves as the command center for all field team resources.

### Features:
- **Hero Section** with key statistics and overview
- **Quick Actions** for common tasks
- **Team Toolkits** organized by role (Sales, CSM, SC, Marketing)
- **Recent Updates** showing latest content additions
- **Popular Resources** with direct links to most-used materials

## 📚 Content Pages

### Training Hub (`v3-training-hub.html`)
- Live session recordings and training materials
- Filterable by product (Sidekick Standalone, Sales, Voice, Email, Hero, Customer AI)
- Training metadata (duration, materials type)
- Direct links to Google Drive folders

### Content Library (`v3-content-hub.html`)
- Product presentations and decks
- One-pagers and product sheets
- Industry-specific materials
- Case studies and customer stories
- Marketing collateral and brand assets

### Competitive Intelligence (`new comp.html`)
- Battle cards for key competitors
- Competitive positioning materials
- Objection handling resources
- Market analysis and differentiation

### Sales Playbooks (`playbooks page.html`)
- Sales methodologies and processes
- Deal progression frameworks
- Customer engagement strategies
- Success metrics and KPIs

### Product Hub (`prob hub.html`)
- Technical product information
- Feature specifications
- Integration guides
- Demo environments and POC materials

## 🎨 Design System

### Unified Styling (`gladly-shared.css`)
The website uses a comprehensive CSS framework that includes:

- **Color Palette**:
  - Primary Green: `#009B00`
  - Purple Accent: `#8C69F0`
  - Neutral Grays: `#F3F3F3`, `#666`, `#0D0D0D`

- **Typography**:
  - System fonts: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`
  - Consistent font weights and sizes

- **Components**:
  - Hero sections with gradients
  - Card-based layouts
  - Responsive grids
  - Interactive hover effects
  - Sticky navigation

### Navigation System
- **Sticky Header**: Consistent navigation across all pages
- **Active States**: Visual indication of current page
- **Mobile Responsive**: Collapsible navigation for smaller screens
- **Logo Branding**: Consistent Gladly Field Hub branding

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full grid layouts)
- **Tablet**: 768px-1199px (adjusted grid columns)
- **Mobile**: <768px (single column layouts)

## 🔧 Technical Features

### Performance Optimizations
- **Shared CSS**: Single stylesheet for consistent loading
- **Optimized Images**: Efficient image handling
- **Smooth Scrolling**: Enhanced user experience
- **Anchor Navigation**: In-page linking with offset compensation

### Accessibility
- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG compliant color combinations

## 🚀 Getting Started

### Local Development
1. Open `index.html` in a web browser
2. All pages are self-contained with shared CSS
3. No build process required

### Content Updates
1. **Add New Content**: Create new HTML pages following the established patterns
2. **Update Navigation**: Add new pages to the navigation in all existing pages
3. **Maintain Consistency**: Use the shared CSS classes for consistent styling

### File Structure
```
/
├── index.html                 # Main hub page
├── v3-training-hub.html      # Training materials
├── v3-content-hub.html       # Content library
├── new comp.html             # Competitive intelligence
├── playbooks page.html       # Sales playbooks
├── prob hub.html             # Product information
├── gladly-shared.css         # Unified stylesheet
└── README.md                 # This documentation
```

## 📊 Content Management

### Adding New Training Sessions
1. Open `v3-training-hub.html`
2. Add new training card following the template:
```html
<div class="training-card" data-product="[PRODUCT-FILTER-VALUE]">
    <div class="training-header">
        <div class="training-date">[DATE]</div>
        <h3>[TRAINING TITLE]</h3>
        <span class="training-product">[PRODUCT NAME]</span>
    </div>
    <div class="training-body">
        <p>[DESCRIPTION]</p>
        <div class="training-meta">
            <span>[DURATION]</span>
            <span>[MATERIALS TYPE]</span>
        </div>
        <a href="[YOUR-ACTUAL-LINK]" class="training-link">View Materials →</a>
    </div>
</div>
```

### Adding New Content Resources
1. Open `v3-content-hub.html`
2. Add new content cards in appropriate sections
3. Use consistent styling classes from the shared CSS

### Updating Navigation
When adding new pages, update the navigation in all existing pages:
```html
<nav class="main-nav">
    <div class="nav-container">
        <a href="index.html" class="logo">Gladly Field Hub</a>
        <div class="nav-links">
            <a href="index.html" class="nav-link">Home</a>
            <a href="v3-training-hub.html" class="nav-link">Training</a>
            <a href="v3-content-hub.html" class="nav-link">Content</a>
            <!-- Add new pages here -->
        </div>
    </div>
</nav>
```

## 🎯 Best Practices

### Content Guidelines
- **Keep it Current**: Regularly update content with latest information
- **Use Clear Titles**: Descriptive titles that indicate content purpose
- **Provide Context**: Include descriptions and metadata for all resources
- **Link Directly**: Use direct links to actual resources, not placeholder links

### Design Consistency
- **Use Shared Classes**: Leverage the established CSS framework
- **Maintain Hierarchy**: Follow the established heading structure
- **Test Responsiveness**: Verify layouts work across all device sizes
- **Check Accessibility**: Ensure proper contrast and keyboard navigation

## 🔗 External Integrations

### Google Drive Integration
- Training materials link to Google Drive folders
- Content resources stored in organized Drive structure
- Direct access to latest versions of materials

### Slack Integration
- Help section links to `#enablement-resources` channel
- Community support for content discovery
- Real-time assistance for field team members

## 📈 Analytics & Tracking

### Usage Monitoring
- Track most popular resources
- Identify content gaps
- Monitor training completion rates
- Measure field team engagement

### Content Performance
- A/B test different layouts
- Optimize based on user behavior
- Regular content audits
- Feedback collection and implementation

## 🛠️ Maintenance

### Regular Updates
- **Weekly**: Check for broken links and outdated content
- **Monthly**: Review and update competitive materials
- **Quarterly**: Comprehensive content audit and refresh
- **Annually**: Full design and functionality review

### Content Lifecycle
- **New Content**: Add immediately with proper categorization
- **Updated Content**: Refresh existing materials with new versions
- **Deprecated Content**: Archive or remove outdated resources
- **Popular Content**: Ensure high-traffic resources are always current

---

**Built for the Gladly Field Team** 🚀

*This website serves as the central hub for all field team enablement, providing easy access to the resources needed to sell, support, and grow with Gladly.*

