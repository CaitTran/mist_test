Hello! This is the documentation for the MIST data plots website.

This website is coded with HTML, CSS, and JavaScript. It does not pull data from any database, API, or anything of the like. 
This website only displays PDF files of plots of data taken from the MIST antennas during campaigns. Those files are stored in a Github repository, which is also the domain on which this website runs.

-----------------------------------------------------------------------------------------------------------------------

MAIN PAGE:
The main page's code is stored in "index.html". The "<a>" hyperlinks are not ordered automatically by date, so when a campaign during a previously undocumented year is added, you must manually add the year in the correct chronological order (earliest to latest = top to bottom).

There is no need to replicate this page. As of April, 2026, this page is the only home page this website has. 
This page references "mistwebsitestyle.css" as its stylesheet.

-----------------------------------------------------------------------------------------------------------------------

"20XX.html" FILES:
These pages store all of the campaigns during the respective year (20XX).  The basic format for a 20XX.html file can be found in "20XX_format.txt". You MUST order your dates in the format "20XX-XX" with the second set of XX numbers being the month (e.g. November, 2028 = "2028-11"). 

The campaign dates ARE AUTOMATICALLY ordered chronologically with the "organize_dates.js" script, so you do not need to worry in which order you add a hyperlink to the campaign's respective .html page to a 20XX.html file.
This page type references "mistwebsitestyle.css" as its stylesheet.

-----------------------------------------------------------------------------------------------------------------------

CAMPAIGN PAGE FILES:
These pages usually have the format LOCATION-INSTRUMENT DETAILS-YEAR (e.g. csa_dipole2022.html). These pages are where the PDF files are fetched from the GitHub repository to be stored as a viewable object (DOCX). Users also have the option to download these PDF's if needed. Each PDF has its own link, because it has its own file identity. 

The script that these pages reference is "pdflinks.js". The format for these pages can be found in "CAMPAIGN_PAGE_format.txt". 
This page type references "downloadableresources.css" as its stylesheet.

-----------------------------------------------------------------------------------------------------------------------

ADDING DATA:
If you want to add more campaigns to this website, you must follow this streamline:
1. Run the dataset through the MIST plotting script (private, the code is not available on the GitHub repository for this website). 

2. Upload the dataset as a folder to the GitHub repository that hosts the website. The folder may be named in any format you prefer, but the standard as of April 2026 is: 
"INSTRUMENTDETAILS_SITE_YEAR" (e.g. "mist2_mars_2024")

3. Linking it on the website:
    3a. If the dataset is from a year NOT included on the index.html homepage, a "20XX.html" file must be created. The format for this page is in "20XX_format.txt". 
    3b. All datasets under a "20XX.html" page have their own .html file. Follow the format underlined in "CAMPAIGN_PAGE_format.html" to set one up. This must be done in order to pull the .PDF's from the Github repository. Make sure that when referencing the "pdflinks.js" in the <script> line that you are referencing the correct FOLDER_ON_GITHUB where the .PDF files for the campaign are located.

IMPORTANT: In the JavaScript for pdflinks.js, you will see:
const username = 'CaitTran'; //your GitHub username
const repo = 'mist_test'; //your GitHub repository name
const folderPath = document.currentScript.dataset.folder ; //the folder in your repo where the files are located, e.g., 'pdfs' or 'documents'
const branch = 'website_test'; //the branch where your files are located, e.g., 'main' or 'master'

If this website is hosted by a different account, you must replace the username, repo, folderPath, and branch variables with the corresponding credentials to that host account. 
    
-----------------------------------------------------------------------------------------------------------------------

If you have any questions, please feel free to email the dev: caitlint35@berkeley.edu.