const fs = require('fs');
const path = require('path');

// Debug script to run just before build to check directory structure
console.log('DEBUG: Starting directory check');
console.log('Current working directory:', process.cwd());

// Check if src/app exists
const srcAppPath = path.join(process.cwd(), 'src', 'app');
console.log('Checking if src/app exists:', fs.existsSync(srcAppPath));

// Check if .next exists
const nextPath = path.join(process.cwd(), '.next');
console.log('Checking if .next exists:', fs.existsSync(nextPath));

// If .next exists, check if routes-manifest.json exists
if (fs.existsSync(nextPath)) {
  const manifestPath = path.join(nextPath, 'routes-manifest.json');
  console.log('Checking if routes-manifest.json exists:', fs.existsSync(manifestPath));
  
  // If routes-manifest exists, log its content
  if (fs.existsSync(manifestPath)) {
    try {
      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      console.log('routes-manifest.json content:', manifestContent.substring(0, 100) + '...');
    } catch (err) {
      console.error('Error reading routes-manifest.json:', err);
    }
  }
} 