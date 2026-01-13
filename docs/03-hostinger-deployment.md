# Module 3: Deployment to Hostinger

There are two main ways to deploy your application: manual ZIP upload or GitHub Auto-deploy.

---

## 📦 Method A: Manual ZIP Upload (Legacy)
1. **Build the frontend** locally: 
   ```bash
   cd frontend && npm run build
   ```
2. **Create a ZIP** including ONLY:
   - `index.js`
   - `package.json`
   - `frontend/dist/`
3. ⚠️ **IMPORTANT**: Do **NOT** include `node_modules` or `package-lock.json`.
4. **Upload** via Hostinger's **Node.js Apps** panel.

---

## 🤖 Method B: GitHub Integration (Recommended)
1. Push your code to a GitHub branch (e.g., `main`).
2. Connect the repository in the Hostinger **hPanel**.
3. **Build Settings**:
   - **Install Command**: `npm install`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Start Command**: `npm start`

---

## 🛠️ Troubleshooting & Tips
If you encounter a **503 Service Unavailable** error:

1. **Clean Slate**: Delete the `node_modules` folder in the Hostinger File Manager and re-run installation.
2. **Node Version**: Ensure you are using **Node.js v22.x** (or the latest LTS).
3. **Logs**: Check `stderr.log` for "Module Not Found" errors to identify missing dependencies.
