# Traditional Hosting Guide for Built Rite Creations Website

This guide explains how to build and deploy your Built Rite Creations website to traditional web hosting providers like GoDaddy, Bluehost, HostGator, or any shared hosting service.

## Prerequisites

- Node.js (version 18 or higher) installed on your computer
- Access to your web hosting control panel (cPanel, Plesk, etc.)

## Step 1: Build the Website

1. Open a terminal/command prompt in the project root directory
2. Install dependencies (first time only):
   ```bash
   cd frontend
   npm install
   ```

3. Build the production-ready website:
   ```bash
   npm run build
   ```

4. After the build completes, you'll find a `dist` folder inside the `frontend` directory. This folder contains all the files you need to upload.

## Step 2: Prepare for Upload

The `frontend/dist` folder contains:
- `index.html` - The main HTML file
- `assets/` - All CSS, JavaScript, and other assets
- Other supporting files

**Important:** You need to upload the **contents** of the `dist` folder, not the folder itself.

## Step 3: Upload to Your Hosting Provider

### Using cPanel File Manager (Most Common)

1. Log in to your hosting control panel (cPanel)
2. Open **File Manager**
3. Navigate to your website's root directory:
   - Usually `public_html` for main domain
   - Or `public_html/subdomain` for a subdomain
4. **Delete or backup** any existing files in this directory
5. Upload all files from the `frontend/dist` folder:
   - Select all files inside `dist` (not the dist folder itself)
   - Click **Upload** and select all files
   - Make sure the `assets` folder and `index.html` are in the root
6. Wait for the upload to complete

### Using FTP (FileZilla, Cyberduck, etc.)

1. Connect to your hosting via FTP using your credentials
2. Navigate to `public_html` (or your site's root directory)
3. Delete or backup existing files
4. Drag and drop all contents from `frontend/dist` to the remote directory
5. Ensure the folder structure is preserved:
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].js
   │   ├── index-[hash].css
   │   └── ...
   └── ...
   ```

## Step 4: Test Your Website

1. Open your website in a browser: `https://yourdomain.com`
2. Test all navigation links (Home, Services, Gallery, About, Contact)
3. Verify that all pages load correctly
4. Check that images and styles appear properly

## Important Notes

### Hash-Based Routing
This website uses hash-based routing (URLs like `https://yourdomain.com/#/services`). This means:
- ✅ All pages work without server configuration
- ✅ Direct links and page refreshes work correctly
- ✅ No `.htaccess` or server rewrites needed

### Browser Compatibility
The site works in all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Updates
To update your website:
1. Make changes to the source code
2. Run `npm run build` again
3. Upload the new `dist` folder contents (overwrite existing files)

### Troubleshooting

**Problem:** Blank page after upload
- **Solution:** Check browser console for errors. Ensure all files uploaded correctly, especially the `assets` folder.

**Problem:** Styles not loading
- **Solution:** Verify the `assets` folder is in the same directory as `index.html`.

**Problem:** 404 errors
- **Solution:** Make sure you uploaded to the correct directory (`public_html` for main domain).

**Problem:** Links don't work
- **Solution:** The site uses hash routing. URLs should look like `/#/services` not `/services`.

## Local Testing (Optional)

Before uploading, you can test the built site locally:

