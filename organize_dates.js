// When page loads, create constants to store the headers in an 'array'
document.addEventListener("DOMContentLoaded", () => { 
    const header = document.querySelector("header");
    const headings = Array.from(header.querySelectorAll("h2"));

    const sections = headings.map(h2 => {
        return {
            date: h2.textContent.trim().split(" ")[0],
            h2: h2,
            ul: h2.nextElementSibling //extract the unordered list that follows each header and add to the storage array
        }; // Split the header string (including the date) into sections so can filter the date section
    });
    // Sort the sections by alphabet (localeCompare()); in this case is chronological
    sections.sort((a, b) => a.date.localeCompare(b.date));

    header.innerHTML = ""; //clear the header that we extracted stuff from

    sections.forEach(section => { //put the ordered headers into the empty slots
        header.appendChild(section.h2);
        header.appendChild(section.ul); //add the unordered lists back under their respective headers
    });
});
