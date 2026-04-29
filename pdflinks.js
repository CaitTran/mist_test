    const username = 'CaitTran'; //your GitHub username
    const repo = 'mist_test'; //your GitHub repository name
    const folderPath = document.currentScript.dataset.folder ; //the folder in your repo where the files are located, e.g., 'pdfs' or 'documents'
    const branch = 'website_test'; //the branch where your files are located, e.g., 'main' or 'master'
    
    //insert this at the end of your desired html file: <script src="pdflinks.js" data-folder="FOLDER_ON_GITHUB"></script>

    async function getFiles() {
        try {
            // This builds the specific URL GitHub needs to "talk" to your code
            const url = `https://api.github.com/repos/${username}/${repo}/contents/${folderPath}?ref=${branch}`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Check your username, repo name, or folder path!');
            }

            const data = await response.json();
            const listElement = document.getElementById('file-list');
            listElement.innerHTML = ''; // Removes the "Loading..." text

            data.forEach(file => {
                // Only create links for files, and skip the index file
                if (file.type === 'file' && file.name !== 'index.html' && file.name !== '.DS_Store') {
                    const li = document.createElement('li');
                    const pdfPreviewUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(file.download_url)}&embedded=false`;
                    // This creates the clickable link to download
                    // li.innerHTML = `
                    //     <a href="${file.download_url}" target="_blank" style="color: #2c3e50; font-weight: bold;">
                    //         📄 ${file.name}
                    //     </a>`;

                    // This creates a clickable link to preview
                    li.innerHTML = `
                        <a href="${pdfPreviewUrl}" target="_blank" style="color: #2c3e50; font-weight: bold;">
                            📄 ${file.name}
                        </a>`;
                    
                    listElement.appendChild(li);
                }
            });
        } catch (error) {
            document.getElementById('file-list').innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
        }
    }

    getFiles();
