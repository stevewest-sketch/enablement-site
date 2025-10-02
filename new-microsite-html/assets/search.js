// Simple site-wide search functionality
const searchIndex = [
    // Homepage
    { title: 'Home', url: 'index.html', keywords: 'gtm hub enablement sales support resources' },

    // Enablement
    { title: 'Enablement', url: 'enablement/index.html', keywords: 'training toolkits playbooks demo' },
    { title: 'Training', url: 'enablement/training/index.html', keywords: 'learning courses education onboarding' },
    { title: 'Team Toolkits', url: 'enablement/toolkits/index.html', keywords: 'sales csm success marketing tools resources' },
    { title: 'Sales Toolkit', url: 'enablement/toolkits/sales/index.html', keywords: 'demos battle cards plays sales materials' },
    { title: 'CSM Toolkit', url: 'enablement/toolkits/csm/index.html', keywords: 'qbr adoption value renewal customer success' },
    { title: 'SC Toolkit', url: 'enablement/toolkits/success/index.html', keywords: 'demo environments technical docs poc solutions' },
    { title: 'Marketing Toolkit', url: 'enablement/toolkits/marketing/index.html', keywords: 'campaigns content templates brand assets' },
    { title: 'Playbooks', url: 'enablement/playbooks/index.html', keywords: 'sales playbooks strategies guides' },
    { title: 'Demo', url: 'enablement/demo/index.html', keywords: 'demo demonstration product showcase' },

    // Product
    { title: 'Product', url: 'product/index.html', keywords: 'products features sidekick ai platform' },
    { title: 'Sidekick Sales', url: 'product/sidekick-sales/index.html', keywords: 'sales ai assistant automation' },
    { title: 'Sidekick Voice', url: 'product/sidekick-voice/index.html', keywords: 'voice call ai transcription' },
    { title: 'Sidekick Email', url: 'product/sidekick-email/index.html', keywords: 'email ai response automation' },
    { title: 'Sidekick Standalone', url: 'product/sidekick-standalone/index.html', keywords: 'standalone ai assistant' },
    { title: 'App Platform', url: 'product/app-platform/index.html', keywords: 'platform apps integrations' },
    { title: 'Guides & Journeys', url: 'product/guides-journeys/index.html', keywords: 'guides journeys customer experience' },
    { title: 'Customer AI', url: 'product/customer-ai/index.html', keywords: 'ai machine learning intelligence' },

    // Center of Excellence
    { title: 'Center of Excellence', url: 'coe/index.html', keywords: 'best practices excellence coe' },
    { title: 'BVA', url: 'coe/bva/index.html', keywords: 'business value assessment roi metrics' },
    { title: 'AI Best Practices', url: 'coe/ai-best-practices/index.html', keywords: 'ai best practices guidelines strategies' },
    { title: 'Customer Wins', url: 'coe/customer-wins/index.html', keywords: 'success stories case studies wins' },

    // Resources
    { title: 'Resources', url: 'resources/index.html', keywords: 'resources content templates' },
    { title: 'Content', url: 'resources/content/index.html', keywords: 'content library resources' },
    { title: 'Templates', url: 'resources/templates/index.html', keywords: 'templates documents forms' }
];

function initSearch(inputId, resultsId, currentPath) {
    const searchInput = document.getElementById(inputId);
    const searchResults = document.getElementById(resultsId);

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const results = searchIndex.filter(item => {
            return item.title.toLowerCase().includes(query) ||
                   item.keywords.toLowerCase().includes(query);
        }).slice(0, 8); // Limit to 8 results

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
            searchResults.style.display = 'block';
            return;
        }

        searchResults.innerHTML = results.map(item => {
            const url = getRelativeSearchPath(currentPath, item.url);
            return `<a href="${url}" class="search-result-item">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-path">${item.url}</div>
            </a>`;
        }).join('');

        searchResults.style.display = 'block';
    });

    // Close results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Show results when input is focused and has value
    searchInput.addEventListener('focus', function() {
        if (searchInput.value.length >= 2) {
            searchResults.style.display = 'block';
        }
    });
}

function getRelativeSearchPath(currentPath, targetPath) {
    const depth = currentPath.split('/').filter(p => p && p !== 'index.html').length;
    const prefix = depth > 0 ? '../'.repeat(depth) : '';
    return prefix + targetPath;
}
