# Auto-Updating Resume Setup Guide

## 🎯 Goal
Keep your portfolio resume automatically updated without rebuilding/redeploying your website.

## 📋 Setup Options

### Option 1: Google Drive (Recommended) ⭐

**Benefits:**
- ✅ Always up-to-date automatically
- ✅ No website rebuild needed
- ✅ Free and reliable
- ✅ Professional sharing capabilities

**Setup Steps:**

1. **Upload your resume to Google Drive**
   - Go to [drive.google.com](https://drive.google.com)
   - Upload your resume PDF

2. **Get sharing settings right**
   - Right-click your resume → "Share"
   - Change to "Anyone with the link can view"
   - Copy the share link

3. **Extract the File ID**
   - Your link looks like: `https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74mHxYnpkmE/view`
   - The File ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74mHxYnpkmE`

4. **Update your config**
   - Open `src/config/resumeConfig.js`
   - Replace `YOUR_GOOGLE_DRIVE_FILE_ID` with your actual File ID
   - Set `activeMethod: "googleDrive"`

### Option 2: Dropbox Alternative

**Setup Steps:**
1. Upload resume to Dropbox
2. Get shareable link
3. Replace `?dl=0` with `?dl=1` for direct download
4. Update config file

### Option 3: GitHub Auto-Deploy (Advanced)

**For automatic deployment when resume changes:**

```yaml
# .github/workflows/auto-update.yml
name: Auto Update Resume
on:
  schedule:
    - cron: '0 0 * * *' # Check daily
  workflow_dispatch: # Manual trigger

jobs:
  update-resume:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Download latest resume
        run: |
          curl -L "YOUR_GOOGLE_DRIVE_DIRECT_LINK" -o public/resume.pdf
      - name: Check for changes
        run: |
          if git diff --exit-code public/resume.pdf; then
            echo "No changes"
          else
            git config --local user.email "action@github.com"
            git config --local user.name "GitHub Action"
            git add public/resume.pdf
            git commit -m "Auto-update resume"
            git push
          fi
```

## 🚀 How to Update Your Resume

### With Google Drive (Recommended):
1. Update your resume document
2. Save/export as PDF
3. Replace the file in Google Drive (keep same name)
4. Your portfolio automatically shows the new version! 🎉

### With Local Files:
1. Update your resume
2. Replace `public/resume.pdf`
3. Rebuild and redeploy your site

## 🛠️ Configuration

Edit `src/config/resumeConfig.js`:

```javascript
export const resumeConfig = {
  googleDrive: {
    fileId: "YOUR_ACTUAL_FILE_ID_HERE",
    // ... rest stays the same
  },
  activeMethod: "googleDrive" // Change this to switch methods
};
```

## 🔄 Switching Methods

To switch between resume hosting methods:
1. Open `src/config/resumeConfig.js`
2. Change `activeMethod` to "googleDrive", "dropbox", or "local"
3. No other code changes needed!

## 💡 Pro Tips

1. **Keep consistent naming**: Always use the same filename when updating
2. **Test links**: Check both view and download work correctly
3. **Backup**: Keep local copies of your resume
4. **Professional email**: Use a professional Google account for sharing
5. **Mobile friendly**: Test resume viewing on mobile devices

## 🔧 Troubleshooting

**"Failed to load PDF":**
- Ensure Google Drive file is set to "Anyone with link can view"
- Try re-uploading the PDF
- Check if PDF is password protected (remove protection)

**Links not working:**
- Verify File ID is correct
- Check sharing permissions
- Test direct Google Drive link first
