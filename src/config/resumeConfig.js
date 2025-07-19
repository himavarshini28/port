// Resume Configuration
// Update this file whenever you want to change your resume link

export const resumeConfig = {
  // Option 1: Google Drive (Recommended for auto-sync)
  googleDrive: {
    fileId: "1I4Dlt7PodYiSy4LVB9cBQeBrsP0AA9R4",
    viewUrl: "https://drive.google.com/file/d/1I4Dlt7PodYiSy4LVB9cBQeBrsP0AA9R4/view?usp=drive_link",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1I4Dlt7PodYiSy4LVB9cBQeBrsP0AA9R4"
  },
  
  // Option 2: Dropbox (Alternative cloud solution)
  dropbox: {
    shareUrl: "YOUR_DROPBOX_SHARE_URL", // Replace with your Dropbox share URL
    directUrl: "YOUR_DROPBOX_DIRECT_URL" // Replace ?dl=0 with ?dl=1 for direct download
  },
  
  // Option 3: Local file (requires manual updates)
  local: {
    path: "/resume.pdf"
  },
  
  // Current active method - change this to switch between options
  activeMethod: "googleDrive" // Using Google Drive for the resume link
};

// Helper function to get current resume URLs
export const getResumeUrls = () => {
  const { activeMethod } = resumeConfig;
  
  switch (activeMethod) {
    case "googleDrive":
      return {
        viewUrl: resumeConfig.googleDrive.viewUrl,
        downloadUrl: resumeConfig.googleDrive.downloadUrl
      };
    case "dropbox":
      return {
        viewUrl: resumeConfig.dropbox.shareUrl,
        downloadUrl: resumeConfig.dropbox.directUrl
      };
    case "local":
    default:
      return {
        viewUrl: resumeConfig.local.path,
        downloadUrl: resumeConfig.local.path
      };
  }
};
