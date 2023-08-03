#!/bin/bash

# Define the GitHub API URL for the latest release of PDF.js
API_URL="https://api.github.com/repos/mozilla/pdf.js/releases/latest"

# Fetch the latest release from browser_download_url
TARBALL_URL=$(curl -fsSL $API_URL |
              grep -oP '"browser_download_url":\s*"\K[^"]+' |
              head -n 1)
