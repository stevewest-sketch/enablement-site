// Shared navigation for all pages
function getNavHTML(currentPath) {
    return `
    <nav class="left-nav">
        <div class="nav-logo">
            <h2>Gladly</h2>
        </div>

        <div class="nav-section">
            <a href="${getRelativePath(currentPath, 'index.html')}" class="nav-parent-solo ${isActive(currentPath, 'index.html') ? 'active' : ''}">
                <span class="nav-text">Home</span>
            </a>
        </div>

        <div class="nav-section">
            <div class="nav-parent-container">
                <span class="nav-arrow ${isParentActive(currentPath, 'enablement') ? 'open' : ''}" data-nav-toggle>▶</span>
                <a href="${getRelativePath(currentPath, 'enablement/index.html')}" class="nav-parent-link ${isActive(currentPath, 'enablement/index.html') && !isParentActive(currentPath, 'enablement') ? 'active' : ''}">
                    <span class="nav-text">Enablement</span>
                </a>
            </div>
            <div class="nav-children ${isParentActive(currentPath, 'enablement') ? 'open' : ''}">
                <a href="${getRelativePath(currentPath, 'enablement/training/index.html')}" class="nav-child ${isActive(currentPath, 'enablement/training') ? 'active' : ''}">Training</a>
                <a href="${getRelativePath(currentPath, 'enablement/toolkits/index.html')}" class="nav-child ${isActive(currentPath, 'enablement/toolkits') ? 'active' : ''}">Team Toolkits</a>
                <a href="${getRelativePath(currentPath, 'enablement/playbooks/index.html')}" class="nav-child ${isActive(currentPath, 'enablement/playbooks') ? 'active' : ''}">Playbooks</a>
                <a href="${getRelativePath(currentPath, 'enablement/competitive/competitive.html')}" class="nav-child ${isActive(currentPath, 'enablement/competitive') ? 'active' : ''}">Competitive</a>
                <a href="${getRelativePath(currentPath, 'enablement/demo/index.html')}" class="nav-child ${isActive(currentPath, 'enablement/demo') ? 'active' : ''}">Demo</a>
            </div>
        </div>

        <div class="nav-section">
            <div class="nav-parent-container">
                <span class="nav-arrow ${isParentActive(currentPath, 'product') ? 'open' : ''}" data-nav-toggle>▶</span>
                <a href="${getRelativePath(currentPath, 'product/index.html')}" class="nav-parent-link ${isActive(currentPath, 'product/index.html') && !isParentActive(currentPath, 'product') ? 'active' : ''}">
                    <span class="nav-text">Product</span>
                </a>
            </div>
            <div class="nav-children ${isParentActive(currentPath, 'product') ? 'open' : ''}">
                <a href="${getRelativePath(currentPath, 'product/sidekick-sales/index.html')}" class="nav-child ${isActive(currentPath, 'product/sidekick-sales') ? 'active' : ''}">Sidekick Sales</a>
                <a href="${getRelativePath(currentPath, 'product/sidekick-voice/index.html')}" class="nav-child ${isActive(currentPath, 'product/sidekick-voice') ? 'active' : ''}">Sidekick Voice</a>
                <a href="${getRelativePath(currentPath, 'product/sidekick-email/index.html')}" class="nav-child ${isActive(currentPath, 'product/sidekick-email') ? 'active' : ''}">Sidekick Email</a>
                <a href="${getRelativePath(currentPath, 'product/sidekick-standalone/index.html')}" class="nav-child ${isActive(currentPath, 'product/sidekick-standalone') ? 'active' : ''}">Sidekick Standalone</a>
                <a href="${getRelativePath(currentPath, 'product/app-platform/index.html')}" class="nav-child ${isActive(currentPath, 'product/app-platform') ? 'active' : ''}">App Platform</a>
                <a href="${getRelativePath(currentPath, 'product/guides-journeys/index.html')}" class="nav-child ${isActive(currentPath, 'product/guides-journeys') ? 'active' : ''}">Guides & Journeys</a>
                <a href="${getRelativePath(currentPath, 'product/customer-ai/index.html')}" class="nav-child ${isActive(currentPath, 'product/customer-ai') ? 'active' : ''}">Customer AI</a>
            </div>
        </div>

        <div class="nav-section">
            <div class="nav-parent-container">
                <span class="nav-arrow ${isParentActive(currentPath, 'coe') ? 'open' : ''}" data-nav-toggle>▶</span>
                <a href="${getRelativePath(currentPath, 'coe/index.html')}" class="nav-parent-link ${isActive(currentPath, 'coe/index.html') && !isParentActive(currentPath, 'coe') ? 'active' : ''}">
                    <span class="nav-text">Center of Excellence</span>
                </a>
            </div>
            <div class="nav-children ${isParentActive(currentPath, 'coe') ? 'open' : ''}">
                <a href="${getRelativePath(currentPath, 'coe/bva/index.html')}" class="nav-child ${isActive(currentPath, 'coe/bva') ? 'active' : ''}">BVA</a>
                <a href="${getRelativePath(currentPath, 'coe/ai-best-practices/index.html')}" class="nav-child ${isActive(currentPath, 'coe/ai-best-practices') ? 'active' : ''}">AI Best Practices</a>
                <a href="${getRelativePath(currentPath, 'coe/customer-wins/index.html')}" class="nav-child ${isActive(currentPath, 'coe/customer-wins') ? 'active' : ''}">Customer Wins</a>
            </div>
        </div>

        <div class="nav-section">
            <div class="nav-parent-container">
                <span class="nav-arrow ${isParentActive(currentPath, 'personas') ? 'open' : ''}" data-nav-toggle>▶</span>
                <div class="nav-parent-link nav-no-link">
                    <span class="nav-text">Personas</span>
                </div>
            </div>
            <div class="nav-children ${isParentActive(currentPath, 'personas') ? 'open' : ''}">
                <a href="${getRelativePath(currentPath, 'personas/cto-cio.html')}" class="nav-child ${isActive(currentPath, 'personas/cto-cio') ? 'active' : ''}">CTO/CIO/CDO</a>
            </div>
        </div>

        <div class="nav-section">
            <div class="nav-parent-container">
                <span class="nav-arrow ${isParentActive(currentPath, 'resources') ? 'open' : ''}" data-nav-toggle>▶</span>
                <div class="nav-parent-link nav-no-link">
                    <span class="nav-text">Resources</span>
                </div>
            </div>
            <div class="nav-children ${isParentActive(currentPath, 'resources') ? 'open' : ''}">
                <a href="${getRelativePath(currentPath, 'resources/content/index.html')}" class="nav-child ${isActive(currentPath, 'resources/content') ? 'active' : ''}">Content</a>
                <a href="${getRelativePath(currentPath, 'resources/templates/index.html')}" class="nav-child ${isActive(currentPath, 'resources/templates') ? 'active' : ''}">Templates</a>
            </div>
        </div>
    </nav>
    `;
}

function getRelativePath(currentPath, targetPath) {
    const depth = currentPath.split('/').filter(p => p && p !== 'index.html').length;
    const prefix = depth > 0 ? '../'.repeat(depth) : '';
    return prefix + targetPath;
}

function isActive(currentPath, targetPath) {
    return currentPath.includes(targetPath);
}

function isParentActive(currentPath, parent) {
    return currentPath.startsWith(parent + '/');
}

function toggleNavSection(arrowElement) {
    // Toggle the arrow rotation
    arrowElement.classList.toggle('open');

    // Find the nav-section, then get the children div
    const section = arrowElement.closest('.nav-section');
    const children = section.querySelector('.nav-children');

    if (children) {
        children.classList.toggle('open');
    }
}

function initNav(currentPath) {
    // Check if nav already exists to prevent duplicates
    if (document.querySelector('.left-nav')) {
        return;
    }

    document.body.insertAdjacentHTML('afterbegin', getNavHTML(currentPath));

    // Use event delegation for click handlers (more robust)
    document.body.addEventListener('click', function(e) {
        const toggle = e.target.closest('[data-nav-toggle]');
        if (toggle) {
            e.preventDefault();
            e.stopPropagation();
            toggleNavSection(toggle);
        }
    });

    // Store reference to prevent re-initialization
    window._navInitialized = true;
}
