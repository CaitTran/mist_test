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
These pages usually have the format LOCATION-INSTRUMENT DETAILS-YEAR (e.g. csa_dipole2022.html). These pages are where the PDF files are fetched from the Github repository to be stored as a viewable object (DOCX). Users also have the option to download these PDF's if needed. Each PDF has its own link, because it has its own file identity. 

The script that these pages reference is "pdflinks.js". The format for these pages can be found in "CAMPAIGN_PAGE_format.txt". 
This page type references "downloadableresources.css" as its stylesheet.

-----------------------------------------------------------------------------------------------------------------------

If you have any questions, please feel free to email the dev: caitlint35@berkeley.edu.